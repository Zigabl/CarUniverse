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

const usages = [
  'city',
  'country',
  'offRoad',
  'longCommutes',
  'track',
  'highway'
];

export default function BrandDropdown({ value, onChange }: Props) {
  const [visible, setVisible] = useState(false);

  const selectUsage = (usage: string) => {
    onChange(usage);
    setVisible(false);
  };

  return (
    <>
      <Text style={styles.label}>Usage</Text>

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
              Select Usage
            </Text>

            {usages.map((usage) => (
              <Pressable
                key={usage}
                style={styles.option}
                onPress={() => selectUsage(usage)}
              >
                <Text>{usage}</Text>
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
    marginTop: 15,
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