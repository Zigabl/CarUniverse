require("dotenv").config();
const cheerio = require("cheerio");
const { chromium } = require('playwright');
const mongoose = require("mongoose");
const Cars = require("../models/Cars");

async function connectMongo()
{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");
}

async function saveCars(cars)
{
    await Cars.insertMany(cars);
    console.log("Scraped cars saved to DB")
}

async function scrape() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(
    'https://www.avto.net/Ads/results.asp?znamka=&model=&modelID=&tip=&znamka2=&model2=&tip2=&znamka3=&model3=&tip3=&cenaMin=5000&cenaMax=100000&letnikMin=2006&letnikMax=2026&bencin=0&starost2=999&oblika=12,%2011,%2013,%2014,%2015,%2016,%2017,%2018&ccmMin=0&ccmMax=99999&mocMin=&mocMax=&kmMin=0&kmMax=9999999&kwMin=0&kwMax=999&motortakt=&motorvalji=&lokacija=0&sirina=&dolzina=&dolzinaMIN=&dolzinaMAX=&nosilnostMIN=&nosilnostMAX=&sedezevMIN=&sedezevMAX=&lezisc=&presek=&premer=&col=&vijakov=&EToznaka=&vozilo=&airbag=&barva=&barvaint=&doseg=&BkType=&BkOkvir=&BkOkvirType=&Bk4=&EQ1=1000000000&EQ2=1000000000&EQ3=1000000000&EQ4=100000000&EQ5=1000000000&EQ6=1000000000&EQ7=1110100120&EQ8=1010000000&EQ9=100000002&EQ10=1000000000&EQ11=1000000000&EQ12=120000000&KAT=1010000000&PIA=&PIAzero=&PIAOut=&PSLO=&akcija=&paketgarancije=0&broker=&prikazkategorije=&kategorija=&ONLvid=&ONLnak=&zaloga=10&arhiv=&presort=&tipsort=&stran=',
    { waitUntil: "domcontentloaded" }
  );

  // Wait until cars appear
  await page.waitForSelector(".GO-Results-Row", {
    timeout: 60000,
  });

  const cars = await page.$$eval(".GO-Results-Row", rows => {
    return rows.map(row => {
      const getValue = label => {
        const td = [...row.querySelectorAll("td")].find(
          td => td.textContent.trim() === label
        );

        return td?.nextElementSibling?.textContent?.trim() || null;
      };

      const name =
        row.querySelector(".GO-Results-Naziv span")
          ?.textContent
          ?.trim() || null;

      const price =
        row.querySelector(".GO-Results-Top-Price-TXT-Regular")
          ?.textContent
          .replace(/\./g, "") 
          .replace("€", "")
          ?.trim() || null;

      return { //mongo doesnt care about order just field names need to be the same
        name,
        registration: getValue("1.registracija"),
        mileage: getValue("Prevoženih"),
        fuelType: getValue("Gorivo"),
        transmission: getValue("Menjalnik"),
        price,
      };
    });
  });

  console.log(JSON.stringify(cars.slice(0, 10), null, 2));

  saveCars(cars);

  process.stdin.once("data", async () => {
    await browser.close();
    process.exit();
  });
}


connectMongo();
scrape();