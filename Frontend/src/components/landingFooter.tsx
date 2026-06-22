import { Text, View , Pressable, StyleSheet} from 'react-native';
import { colors, globalStyles } from '../theme/global.style';
import { router } from "expo-router";

export default function LandingFooter() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerTitle}>Footer Title</Text>
      <Text style={styles.footerDescription}>Footer Description</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: colors.primaryText,
        flexDirection: 'column',
        alignItems: 'center', 
        height: 110,
        paddingHorizontal: 18,
        paddingVertical: 10,
        marginTop: 30,
    },
  footerTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.background,
    marginBottom: 5,
  },
  footerDescription: {
    fontSize: 14,
    color: colors.mutedtext,
  },
});
