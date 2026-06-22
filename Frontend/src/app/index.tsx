import { StyleSheet, Text, ScrollView, View, Image, Pressable } from 'react-native';
import { colors, globalStyles } from '../theme/global.style';
import LandingHeader from '../components/landingHeader';
import LandingFooter from '../components/landingFooter';
import CardL from '../components/cardL';
import CardR from '../components/cardR';
const ImageBanner = require ('../../assets/images/mclarenPlaceholder.jpg');
import { router } from "expo-router";
import ImageBannerFooter from '@/components/imageBannerFooter';


export default function LandingScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <LandingHeader />
      <Image style={globalStyles.imageBanner} source={ImageBanner} />
      <ImageBannerFooter />
      <CardL title="Car Recommendation" description="Card Description" />
      <CardR title="Car Recommendation" description="Card Description" />
      <CardL title="Car Recommendation" description="Card Description" />
      <LandingFooter />
    </ScrollView>
  );
}

