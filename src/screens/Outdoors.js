import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SugestionCard from '../Components/Common/SugestionCard';
import CardHeader from '../Components/Common/CardHeader';
import * as color from '../../constants/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Outdoors() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.svContainer}>
                <SugestionCard iconName={"information"} titleText={"Resumen del día:"} bodyText={"La calidad del aire es buena y los niveles de polen bajos. Un buen día para salir a la calle."} isGoodDay={true} show={true}/>

                <View style={[styles.cardsContainer, { alignItems: 'center', }]}>
                    <View style={styles.inLine}>
                        <MaterialCommunityIcons name="cloud" size={26} style={{ color: color.DARK_GREEN, marginRight: 15 }} />
                        <Text style={styles.titleBold}>20º</Text>
                    </View>
                    <Text style={styles.subtitle}>Temperatura actual</Text>
                    <View style={styles.forecastDetailsContainter}>
                        <ForecastDetailsPharam title={"64%"} subtitle={"Humedad"} />
                        <ForecastDetailsPharam title={"4,75"} subtitle={"Índice UV"} />
                        <ForecastDetailsPharam title={"25º"} subtitle={"Tª Máxima"} />
                    </View>
                    <View style={styles.forecastDetailsContainter}>
                        <ForecastDetailsPharam title={"5,3 Km/h"} subtitle={"Viento"} />
                        <ForecastDetailsPharam title={"58%"} subtitle={"Percipitaciones"} />
                        <ForecastDetailsPharam title={"15º"} subtitle={"Tª Mínima"} />
                    </View>
                </View>

                <View style={[styles.cardsContainer, { borderTopLeftRadius: 21, borderTopRightRadius: 21, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }]}>
                    <CardHeader iconName={"weather-windy"} title={"Calidad del aire exterior"} info={true} />
                    <AqAirPharams title={"Partículas en suspensión"} subtitle={"PM10"} max={100} min={10} actual={17.37} units={"ug/m3"} />
                    <AqAirPharams title={"Partículas en suspensión"} subtitle={"PM2,5"} max={100} min={6} actual={4.19} units={"ug/m3"} />
                    <AqAirPharams title={"Ozono"} subtitle={"O3"} max={100} min={3} actual={18.68} units={"ppb"} />
                    <AqAirPharams title={"Dióxido de azufre"} subtitle={"SO2"} max={100} min={12} actual={1.0} units={"ppb"} />
                    <AqAirPharams title={"Monóxido de Carbono"} subtitle={"CO"} max={100} min={5} actual={856.6} units={"ppb"} />
                    <AqAirPharams title={"Dióxido de nitrógeno"} subtitle={"NO2"} max={100} min={12} actual={18.44} units={"ppb"} />
                </View>
                <View style={styles.aqiRessumeContainer}>
                    <View style={[styles.inLine, { justifyContent: 'space-between', marginBottom: 14 }]}>
                        <Text style={styles.aqiRessumeTitle}>84 - Excelente</Text>
                        <Text style={styles.aqiRessumeText}>Índice de calidad del aire</Text>
                    </View>
                    <HorizontalLinerarGradient firstColor={color.RED} seconColor={color.LIGHT_GREEN} min={3} max={100} actual={20} />
                    <View style={[styles.inLine, { justifyContent: 'space-between', marginTop: 5 }]}>
                        <Text style={[styles.aqiRessumeText, { marginStart: 5 }]}>0</Text>
                        <Text style={[styles.aqiRessumeText, { marginEnd: 5 }]}>100</Text>
                    </View>
                </View >

                <View style={[styles.cardsContainer, { marginBottom: 24 }]}>
                    <CardHeader iconName={"flower-pollen"} title={"Nivel de polen"} info={true} />
                    <AqPollenPharams title={"Aliso"} max={100} min={10} actual={17.37} units={"granos/m3"} />
                    <AqPollenPharams title={"Abedul"} max={100} min={3} actual={4.19} units={"granos/m3"} />
                    <AqPollenPharams title={"Césped"} max={100} min={7} actual={18.68} units={"granos/m3"} />
                    <AqPollenPharams title={"Artemisa"} max={100} min={11} actual={1.0} units={"granos/m3"} />
                    <AqPollenPharams title={"Olivo"} max={100} min={4} actual={856.6} units={"granos/m3"} />
                    <AqPollenPharams title={"Ambrosía"} max={100} min={18} actual={18.44} units={"granos/m3"} />
                </View>
            </View>
        </ScrollView>
    )
}

function ForecastDetailsPharam({ title, subtitle }) {
    return (
        <View style={styles.forecastDetailsPharamContainer}>
            <Text style={styles.detailTitle}>{title}</Text>
            <Text style={styles.detailSubtitle}>{subtitle}</Text>
        </View>
    )
}

function AqAirPharams({ title, subtitle, max, min, actual, units }) {

    return (
        <View style={[styles.forecastDetailsContainter, { marginTop: 12 }]}>
            <View style={{ flex: 1, alignContent: 'flex-start' }}>
                <Text style={styles.aqTitle}>{title}</Text>
                <Text style={styles.aqSubtitle}>{subtitle}</Text>
            </View>
            <HorizontalLinerarGradient firstColor={color.LIGHT_GREEN} seconColor={color.RED} min={min} max={max} actual={actual} inDarkMode={true} />
            <View />
            <View style={{ flex: 0.3, alignContent: 'flex-end' }}>
                <Text style={[styles.aqTitle, { textAlign: 'right' }]}>{actual}</Text>
                <Text style={[styles.aqSubtitle, { textAlign: 'right' }]}>{units}</Text>
            </View>
        </View>
    )
}

function AqPollenPharams({ title, max, min, actual, units }) {
    return (
        <View style={[styles.forecastDetailsContainter, { marginTop: 12 }]}>
            <Text style={[styles.aqTitle, { flex: 0.3, alignContent: 'flex-start', marginEnd: 10 }]}>{title}</Text>
            <HorizontalLinerarGradient firstColor={color.LIGHT_GREEN} seconColor={color.RED} min={min} max={max} actual={actual} inDarkMode={true} />
            <View />
            <View style={{ flex: 0.3, alignContent: 'flex-end', marginStart: 0 }}>
                <Text style={[styles.aqTitle, { textAlign: 'right' }]}>{actual}</Text>
                <Text style={[styles.aqSubtitle, { textAlign: 'right' }]}>{units}</Text>
            </View>
        </View>
    )
}

function HorizontalLinerarGradient({ firstColor, seconColor, min, max, actual, inDarkMode }) {
    return (
        <LinearGradient style={[styles.barContainter, { paddingStart: min, borderColor: inDarkMode ? color.BACKGROUND_CARD_COLOR : color.DARK_GREEN }]} colors={[firstColor, seconColor]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
            <View style={[styles.dot, { borderColor: inDarkMode ? color.DARK_GREEN : 'white' }]}></View>
        </LinearGradient>
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
    cardsContainer: {
        backgroundColor: color.BACKGROUND_CARD_COLOR,
        justifyContent: 'center',
        borderRadius: 21,
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
    aqiRessumeContainer: {
        backgroundColor: color.DARK_GREEN,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 21,
        borderBottomRightRadius: 21,
        padding: 20,
    },
    aqiRessumeTitle: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Oxygen-Bold',
    },
    aqiRessumeText: {
        color: 'white',
        fontSize: 11,
        fontFamily: 'Oxygen-Regular',
    },
    forecastDetailsContainter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
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
    aqTitle: {
        color: color.DARK_GREEN,
        fontSize: 10,
        fontFamily: 'Oxygen-Bold',
    },
    aqSubtitle: {
        color: color.DARK_GREEN,
        fontSize: 8,
        fontFamily: 'Oxygen-Regular',
    },
    barContainter: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 16,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: color.BACKGROUND_CARD_COLOR,
        paddingStart: 3,
        paddingEnd: 3
    },
    dot: {
        width: 16,
        height: 16,
        borderColor: color.DARK_GREEN,
        borderWidth: 3,
        borderRadius: 50,
    }
});