import React, { useState } from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const fuelTypes = [
  'diesel motor',
  'bencinski motor'
];

export default function BrandDropdown({ value, onChange }: Props) {
  const [visible, setVisible] = useState(false);

  const selectFuelType = (fuelType: string) => {
    onChange(fuelType);
    setVisible(false);
  };

  return (
    <>
      <Text style={styles.label}>Fuel Type</Text>

      <Pressable
        style={styles.selector}
        onPress={() => setVisible(true)}
      >
        <Text>{value}</Text>
      </Pressable>

      <Modal
        visible={visible}
        transparent
        animationType="slide"
      >
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text style={styles.title}>
              Choose Brand
            </Text>

            {fuelTypes.map((fuelType) => (
              <Pressable
                key={fuelType}
                style={styles.option}
                onPress={() => selectFuelType(fuelType)}
              >
                <Text>{fuelType}</Text>
              </Pressable>
            ))}

            <Pressable
              style={styles.cancelButton}
              onPress={() => setVisible(false)}
            >
              <Text>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
    fontWeight: '600',
    marginTop: 5,
  },

  selector: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    width: 200,
    alignItems: 'center'
  },

  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
  },

  modal: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  option: {
    paddingVertical: 15,
  },

  cancelButton: {
    marginTop: 15,
    alignItems: 'center',
  },

});