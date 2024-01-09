import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OutdoorsHomePreview from '../Components/Home/OutdoorsPreview';
import { SafeAreaView } from 'react-native-safe-area-context';
import SugestionCard from '../Components/Common/SugestionCard';
import ProfileHeader from '../Components/Home/ProfileHeader';

export default function Home() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.svContainer}>
                <ProfileHeader />
                <SugestionCard iconName={"information"} titleText={"Dato curioso del día"} bodyText={"El modo standby representa un 10,7% del consumo energético total de la vivienda. Si apagáramos completamente cada electrodoméstico, ahorraríamos unos 50 euros al año."} />
                <TouchableOpacity onPress={() => navigation.navigate("Outdoors")}>
                    <OutdoorsHomePreview />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FAED',
    },
    svContainer: {
        paddingStart: 20,
        paddingTop: 20,
        paddingEnd: 20
    },
});
