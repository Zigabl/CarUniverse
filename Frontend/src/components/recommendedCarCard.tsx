import { Text, View , Pressable, StyleSheet, Image} from 'react-native';
import { colors, globalStyles } from '../theme/global.style';
const ImageBanner = require ('../../assets/images/mclarenPlaceholder.jpg');
import { router } from "expo-router";

type Car = { //just define it the way the car is structured in the backend response (you define what you are allowed to use from the object)
  name: string;
  price: number;
};

type Props = {
  car: Car;
};

export default function RecommendedCarCard( { car }: Props) {
  return (
    <View style={styles.card}>
        <View style={styles.cardImageContainer}>
            <Image source={ImageBanner} style={styles.cardImage} />
        </View>
        <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>{car.name}</Text>
            <Text style={styles.carPrice}>{car.price}$</Text>
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
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: 15,
    height: '100%', 
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.primaryText,
    marginBottom: 5,
  },
  carPrice: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    fontSize: 14,
    color: colors.Accent,

  },
});