import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SugestionCard from '../Components/Common/SugestionCard';
import * as color from '../../constants/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Outdoors() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.svContainer}>
                <SugestionCard iconName={"information"} titleText={"Resumen del día:"} bodyText={"La calidad del aire es buena y los niveles de polen bajos. Un buen día para salir a la calle."} isGoodDay={true} />

                <View style={[styles.forcastContainer]}>
                    <View style={styles.inLine}>
                        <MaterialCommunityIcons name="cloud" size={26} style={{ color: color.DARK_GREEN, marginRight: 15 }} />
                        <Text style={styles.titleBold}>20º</Text>
                    </View>
                    <Text style={styles.subtitle}>Temperatura actual</Text>
                    <View style={styles.forecastDetailsContainter}>
                        <ForecastDetailsPharam title={"64%"} subtitle={"Humedad"}/>
                        <ForecastDetailsPharam title={"4,75"} subtitle={"Índice UV"}/>
                        <ForecastDetailsPharam title={"25º"} subtitle={"Tª Máxima"}/>
                    </View>
                    <View style={styles.forecastDetailsContainter}>
                        <ForecastDetailsPharam title={"5,3 Km/h"} subtitle={"Viento"}/>
                        <ForecastDetailsPharam title={"58%"} subtitle={"Percipitaciones"}/>
                        <ForecastDetailsPharam title={"15º"} subtitle={"Tª Mínima"}/>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

function ForecastDetailsPharam({ title, subtitle}) {
    return (
        <View style={styles.forecastDetailsPharamContainer}>
            <Text style={styles.detailTitle}>{title}</Text>
            <Text style={styles.detailSubtitle}>{subtitle}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.BACKGROUND_COLOR,
    },
    svContainer: {
        paddingStart: 20,
        paddingEnd: 20
    },
    forcastContainer: {
        backgroundColor: color.BACKGROUND_CARD_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 21,
        width: '100%',
        marginTop: 22,
        padding: 20
    },
    inLine: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleBold: {
        fontFamily: 'Oxygen-Bold',
        fontSize: 48,
        color: color.DARK_GREEN,
    },
    subtitle: {
        fontSize: 20,
        color: color.DARK_GREEN,
        marginTop: 3
    },
    forecastDetailsContainter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    forecastDetailsPharamContainer: {
        flex: 1,
        alignItems: 'center',
    },
    detailTitle: {
        fontSize: 20,
        fontFamily: 'Oxygen-Bold',
        color: color.DARK_GREEN,
    },
    detailSubtitle: {
        fontSize: 12,
        color: color.DARK_GREEN,
    },
});