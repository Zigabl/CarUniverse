import { Text, View , Pressable, StyleSheet} from 'react-native';
import { colors, globalStyles } from '../theme/global.style';
import { router } from "expo-router";

export default function LandingHeader() {
  return (
    <View style={styles.header}>
        <View style={styles.headerLeft}>
            <Pressable onPress={() => router.push('/')}> 
              <Text style={styles.headerTitle}>CarUniverse</Text>
            </Pressable>
        </View>
        <View style={styles.headerRight}>
            <Pressable style={styles.HeaderButton} onPress={() => router.push('/(auth)/register')}>
                <Text style={globalStyles.buttonText}>Register</Text> 
            </Pressable>
            <Pressable style={styles.HeaderButton} onPress={() => router.push('/(auth)/login')}>
                <Text style={globalStyles.buttonText}>Login</Text> 
            </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between', //both dependent on flex direction -> this one spaces elements evenly across the main axis (horizontal in our case)
        alignItems: 'flex-end', //cross axis alignemnt (vertical alignemnt in our case)
        height: 110,
        backgroundColor: 'transparent',
        paddingTop: 55,
        paddingBottom: 8,
        paddingHorizontal: 18,
    },
    headerTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: colors.primaryText,
    },
    headerLeft: {
        flex: 1,
    },
    headerRight: {
        flexDirection: 'row',
        gap: 10,
    },
    HeaderButton: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 0,
        borderRightWidth: 1,
        borderBottomWidth: 0,
        borderLeftWidth: 1, 
        borderColor: colors.primaryText,
        width: 70,
        height: 25,
    },
});
