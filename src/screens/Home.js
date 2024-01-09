import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OutdoorsHomePreview from '../Components/Home/OutdoorsPreview';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import SugestionCard from '../Components/Common/SugestionCard';
import ProfileHeader from '../Components/Home/ProfileHeader';

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ProfileHeader />
                <SugestionCard iconName={"information"} titleText={"Dato curioso del día"} bodyText={"El modo standby representa un 10,7% del consumo energético total de la vivienda. Si apagáramos completamente cada electrodoméstico, ahorraríamos unos 50 euros al año."} />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FAED',
        padding: 20,
    },
});
