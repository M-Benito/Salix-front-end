import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OutdoorsPreview from '../Components/Home/OutdoorsPreview';
import IndoorsPreview from '../Components/Home/IndoorsPreview';
import { SafeAreaView } from 'react-native-safe-area-context';
import SugestionCard from '../Components/Common/SugestionCard';
import ProfileHeader from '../Components/Home/ProfileHeader';
import * as color from '../../constants/colors'

export default function Home() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.svContainer}>
                <ProfileHeader userLevel={2} completedPercentage={75} points={120} />
                <SugestionCard iconName={"information"} titleText={"Dato curioso del día"} bodyText={"El modo standby representa un 10,7% del consumo energético total de la vivienda. Si apagáramos completamente cada electrodoméstico, ahorraríamos unos 50 euros al año."} />
                <TouchableOpacity onPress={() => navigation.navigate("Outdoors")}>
                    <OutdoorsPreview temperatue={"20"} aqiState={2} aqi={"84"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Indoors")}>
                    <IndoorsPreview hasVentilated={false} hasTempSensor={false} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lightPriceContainer} onPress={() => navigation.navigate("Indoors")}>
                    <Text style={styles.title}>120€/Mwh</Text>
                    <Text style={styles.subtitle}>Precio actual de la luz</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.BACKGROUND_COLOR,
    },
    svContainer: {
        paddingStart: 20,
        paddingTop: 20,
        paddingEnd: 20
    },
    lightPriceContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 21,
        width: '100%',
        marginTop: 22,
        marginBottom: 44,
        padding: 20,
        backgroundColor: color.BACKGROUND_CARD_COLOR,
    },
    title: {
        fontSize: 48,
        color: color.DARK_GREEN,
        fontFamily: 'Oxygen-Bold',
    },
    subtitle: {
        fontSize: 20,
        color: color.DARK_GREEN,
        marginTop: 3
    },
});
