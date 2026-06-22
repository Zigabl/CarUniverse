import { StyleSheet } from 'react-native';

export const colors = {
  background: '#ffffff',
  surface: '#f2f2f2',
  primaryText: '#000000',
  mutedtext: '#888888',
  Accent: '#333333',
  softHighlight: '#F0F0F0',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  buttonText: {
    color: colors.primaryText,
    fontSize: 15,
  },
   buttonText2: {
    color: colors.background,
    fontSize: 15,
  },
  imageBanner: {
    width: '100%',
    height: 200,
  }
});