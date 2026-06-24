import { useLocalSearchParams } from "expo-router";
import axios from "axios";
import { useEffect, useState, } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { colors, globalStyles } from '../../theme/global.style';
const ImageBanner = require ('../../../assets/images/mclarenPlaceholder.jpg');
import LandingFooter from '../../components/landingFooter';

export default function CarDetail() {

  type Car = {
    name: string,
    registration: string,
    fuelType: string,
    transmission: string,
    price: number;
  };

  const { id } = useLocalSearchParams(); //get id from filename(fileurl)
  const [car, setCar] = useState<Car | null>(null); //we define that it can be Car or null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(
          `http://192.168.1.19:3000/api/cars/${id}`
        );

        setCar(response.data.car);
        console.log(response.data.car)
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchCar();
  }, [id]); //tells react only run this effect if id chnages (dependancy array)

  if (loading || !car) {
  return <Text>Loading...</Text>;
  }

  return (
  <>
    <ScrollView style={globalStyles.container}>
      <Text style={styles.carName}>{car.name}</Text>
      <Image style={globalStyles.imageBanner} source={ImageBanner} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation 
          and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
          </Text>
      </View>
      <View style={styles.grid}>
         <View style={styles.item}><Text>First registration:</Text></View>
         <View style={styles.item}><Text>{car.registration}</Text></View>
         <View style={styles.item}><Text>Fuel Type:</Text></View>
         <View style={styles.item}><Text>{car.fuelType}</Text></View>
         <View style={styles.item}><Text>Transmission:</Text></View>
         <View style={styles.item}><Text>{car.transmission}</Text></View>
         <View style={styles.item}><Text style={ {fontWeight: 'bold'} }>Price:</Text></View>
         <View style={styles.item}><Text style={ {fontWeight: 'bold'} }>{car.price}$</Text></View>
      </View>
      <LandingFooter />
    </ScrollView>

  </>
);
}

const styles = StyleSheet.create({
   carName: {
    marginTop: 102,
    marginLeft: 18,
    marginRight: 18,
    marginBottom: 8, 
    fontSize: 17,
    fontWeight: 'bold'
   },
   descriptionContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
   },
   descriptionText: {
    fontSize: 14,
    color: colors.primaryText,
   },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: 'center',
    marginHorizontal: 15,
    marginTop: 10,
    height:180
  },
  item: {
    width: "50%", 
    padding: 5,
  },
});