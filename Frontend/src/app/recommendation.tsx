import { StyleSheet, Text, ScrollView, View, Image, Pressable } from 'react-native';
import { useState } from 'react';
import { colors, globalStyles } from '../theme/global.style';
import { FlatList } from "react-native";
import LandingHeader from '../components/landingHeader';
import LandingFooter from '../components/landingFooter';
import ImageBannerFooter from '../components/imageBannerFooter'
import FuelTypeDropdown from '../components/dropdowns/fueltypeDropdown';
import TransmissionTypeDropdown from '../components/dropdowns/transmissionDropdown';
import UsageDropdown from '../components/dropdowns/usageDropdown';
import PriceSlider from '../components/sliders/priceSlider'
import RecommendedCarCard from '../components/recommendedCarCard';
const ImageBanner = require ('../../assets/images/mclarenPlaceholder.jpg');
import { router } from "expo-router";
import axios from 'axios';


export default function AboutAppScreen() {
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(10000);
  const [fuelType, setFuelType] = useState('bencinski motor');
  const [transmissionType, setTransmissionType] = useState('avtomatski menjalnik');
  const [recommendedCars, setRecommendedCars] = useState<Recommendation[]>([]);

  type Car = { //type defining is super important (backend send us a full car but we only choose to save these three details about it)
    _id: string;
    name: string;
    registration: string,
    fuelType: string,
    transmission: string,
    price: number;
  };

  type Recommendation = {
    car: Car;
    score: number;
  };

  const submitPreferences = async () => {
    try {

      setLoading(true);

      const response = await axios.post(
        'http://192.168.1.19:3000/api/recommend',
        {
          price,
          fuelType,
          transmissionType
        }
      );

      console.log(response.data);
      setRecommendedCars(response.data.results); //.results to store only results without other thing like success
    } catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false);
    }
  };


  return (
    <FlatList
      style={globalStyles.container}
      data={recommendedCars}
      renderItem={({ item }) => ( //goes trough all items in recommended cars and makes a new component for every one of them
        <Pressable 
        onPress={() => router.push(`/car/${item.car._id}`)}
        > 
        <RecommendedCarCard car={item.car} />
        </Pressable>
      )}
      ListHeaderComponent={
        <>
          <LandingHeader />

          <Image style={globalStyles.imageBanner} source={ImageBanner}/>

          <ImageBannerFooter />

          <View style={styles.recommendationFormContainer}>
            <Text style={styles.recommendationTitle}>Car Recommendations</Text>
            <PriceSlider value={price} onChange={setPrice} />
            <FuelTypeDropdown value={fuelType} onChange={setFuelType}/>
            <TransmissionTypeDropdown value={transmissionType} onChange={setTransmissionType}/>
            <Pressable style={styles.submitButton} onPress={submitPreferences}>
            <Text style={globalStyles.buttonText2}>{loading ? "Finding cars..." : "Submit"}</Text>
            </Pressable>
          </View>
        </>
      }
       ListFooterComponent={
        <>
          <LandingFooter />
        </>
       }
    />
  );
}



const styles = StyleSheet.create({
   recommendationFormContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  recommendationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primaryText,
    marginBottom: 5,
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: '#333333',
    width: 80,
    height: 35,
    marginTop: 25
  }
});

