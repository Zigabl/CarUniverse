import { StyleSheet, Text, ScrollView, View, Image, Pressable } from 'react-native';
import { colors, globalStyles } from '../theme/global.style';
import LandingHeader from '../components/landingHeader';
import LandingFooter from '../components/landingFooter';
import CardL from './cardL';
import CardR from './cardR';
const ImageBanner = require ('../../assets/images/mclarenPlaceholder.jpg');
import { router } from "expo-router";


export default function LandingScreen() {
  return (
    <View style={styles.imageBannerFooter}> 
        <Pressable style={styles.footerButton} onPress={() => router.push('/aboutApp')}>
           <Text style={{ color: colors.background }}>About App</Text> 
        </Pressable>
         <Pressable style={styles.footerButton} onPress={() => router.push('/recommendation')}>
           <Text style={{ color: colors.background }}>Recommendations</Text> 
        </Pressable>
        <Pressable style={styles.footerButton} onPress={() => router.push('/(auth)/register')}>
           <Text style={{ color: colors.background }}>Education</Text> 
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBannerFooter: {
     backgroundColor: '#333333',
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center', 
     width: '100%',
     height: 40,
     marginBottom: 30,
     paddingVertical: 5,
     paddingHorizontal: 15,
  },
  footerButton: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    borderColor: colors.primaryText,
  },
});

