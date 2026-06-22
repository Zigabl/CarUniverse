import Slider from '@react-native-community/slider';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  value: number;
  onChange: (value: number) => void;
};

export default function BudgetSlider({ value, onChange }: Props){

  return (
    <View>
      <Text style={styles.sliderTitle}>Max Budget: €{value}</Text>

      <Slider style={styles.slider}
        minimumValue={5000}
        maximumValue={150000}
        step={1000}
        value={value}
        onValueChange={onChange}
        minimumTrackTintColor='#888888'
        thumbTintColor='#3b3b3b'
      />
    </View>
  );
}

const styles = StyleSheet.create({
   sliderTitle: {
    marginBottom: 5,
    fontWeight: '600',
    marginTop: 20,
   },
   slider: {
    width: 200
   }
});