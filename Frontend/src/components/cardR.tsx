import { Text, View , Pressable, StyleSheet, Image} from 'react-native';
import { colors, globalStyles } from '../theme/global.style';
const ImageBanner = require ('../../assets/images/mclarenPlaceholder.jpg');
import { router } from "expo-router";

export default function LandingCardR({ title, description }: { title: string; description: string }) {
  return (
    <View style={styles.card}>
        
        <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDescription}>{description}</Text>
        </View>
        <View style={styles.cardImageContainer}>        
            <Image source={ImageBanner} style={styles.cardImage} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
   card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    height: 130,
  },
  cardImageContainer: {
    width: 150,
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
   cardTextContainer: {
    flex: 1, //Take up all available space in the parent horizontal direction
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingRight: 15,
    height: '100%', //100% of the height of the parent container
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.primaryText,
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: colors.mutedtext,
  },
});