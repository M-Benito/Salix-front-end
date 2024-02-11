import { StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
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
                <ProfileHeader userName={"Nacho"} userLevel={2} completedPercentage={75} points={120} />
                
                <SugestionCard iconName={"flash"} titleText={"Tienes tareas diarias sin completar"} bodyText={"Realiza las tareas diarias para para mejorar tus hábitos y conseguir vilanos 💪."} hasBorder={true} positiveBtn={"Revisar"} negativeBtn={"Recordar luego"} positiveAction={"NAVIGATETO:Indoors"} negativeAction={'Perfecto, te lo recordaremos luego.'} show={false}/>
                
                <SugestionCard iconName={"account-plus"} titleText={"Nueva solicitud de Lydia"} bodyText={"Lydia te ha enviado una petición para formar parte de la misma unidad habitacional. ¿Quieres aceptarla?"} hasBorder={true} positiveBtn={"Acpetar"} negativeBtn={"Rechazar"} positiveAction={"Genial, ahora Lydia y tu pertenecéis a la misma casa."} negativeAction={"Vale :(\nAvisaremos a Lydia de tu decisión."} show={false}/>
                
                <SugestionCard iconName={"information"} titleText={"Dato curioso del día"} bodyText={"El modo standby representa un 10,7% del consumo energético total de la vivienda. Si apagáramos completamente cada electrodoméstico, ahorraríamos unos 50 euros al año."} show={true}/>
                
                <TouchableOpacity onPress={() => navigation.navigate("Outdoors")}>
                    <OutdoorsPreview forecastImage={"cloud"} temperatue={"20"} aqiState={2} aqi={"84"} />
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
        marginBottom: 120,
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
