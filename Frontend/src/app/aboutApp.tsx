import { StyleSheet, Text, ScrollView, View, Image, Pressable } from 'react-native';
import { colors, globalStyles } from '../theme/global.style';
import LandingHeader from '../components/landingHeader';
import LandingFooter from '../components/landingFooter';
import ImageBannerFooter from '../components/imageBannerFooter';
import CardL from '../components/cardL';
import CardR from '../components/cardR';
const ImageBanner = require ('../../assets/images/mclarenPlaceholder.jpg');
import { router } from "expo-router";


export default function AboutAppScreen() {
  return (
    <View style={globalStyles.container}>
        <LandingHeader />
        <Image style={globalStyles.imageBanner} source={ImageBanner} />
        <ImageBannerFooter />
        <View style={styles.aboutTextContainer}>
            <Text style={styles.aboutTitle}>About Our App</Text>
            <Text style={styles.aboutDescription}>
                Welcome to our car recommendation app! We are dedicated to providing you with the best car options based on your preferences and needs.
            </Text>
            <Text style={styles.aboutTitle}>Our Mission</Text>
            <Text style={styles.aboutDescription}>
                Our mission is to make car shopping easy and enjoyable by providing personalized recommendations and a seamless user experience.
            </Text>
            <Text style={styles.aboutTitle}>About me</Text>
            <Text style={styles.aboutDescription}>
                I am a passionate developer who loves creating innovative solutions for everyday problems.
            </Text>
        </View>
        <LandingFooter />
    </View>
  );
}

const styles = StyleSheet.create({
    aboutTextContainer: {
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    aboutTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primaryText,
        marginBottom: 5,
    },
    aboutDescription: {
        fontSize: 14,
        color: colors.primaryText,
        marginBottom: 10,
    },
});

