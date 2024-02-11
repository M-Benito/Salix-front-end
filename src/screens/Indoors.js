import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SugestionCard from '../Components/Common/SugestionCard';
import CardHeader from '../Components/Common/CardHeader';
import IndoorsPreview from '../Components/Home/IndoorsPreview';
import * as color from '../../constants/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory-native';

export default function Indoors() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.svContainer}>
                <SugestionCard iconName={"weather-windy"} titleText={"Toca ventilar tu hogar"} bodyText={"Hemos detectado que jhace al menos 24 horas que no ventilas tu hogar."} hasBorder={true} positiveBtn={"Ventilar"} negativeBtn={"Recordar luego"} positiveAction={'Genial, casa ventilada!'} negativeAction={'Perfecto, te lo recordaremos luego.'} show={true}/>
                
                <SugestionCard iconName={"fire"} titleText={"Enciende la calefacción"} bodyText={"Es el momento de que enciendas la calefacción, no querrás quedarte helado."} hasBorder={true} positiveBtn={"Encender"} negativeBtn={"Recordar luego"} positiveAction={'Genial, tu casa se está calentando!'} negativeAction={'Perfecto, te lo recordaremos luego.'} show={true}/>

                <IndoorsPreview hasVentilated={false} hasTempSensor={false} />

                <View style={styles.cardsContainer}>
                    <CardHeader iconName={"fire"} title={"Calefacción"} info={false} />
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.titleBold}>120€/Mwh</Text>
                        <Text style={styles.subtitle}>Precio actual de la luz</Text>

                        <View style={[styles.inLine, { marginTop: 30 }]}>
                            <TouchableOpacity><MaterialCommunityIcons name={"minus-circle"} size={30} style={{ color: color.DARK_GREEN }} /></TouchableOpacity>
                            <Text style={[styles.titleBold, { marginStart: 10, marginEnd: 10 }]}>20º</Text>
                            <TouchableOpacity><MaterialCommunityIcons name={"plus-circle"} size={30} style={{ color: color.DARK_GREEN }} /></TouchableOpacity>
                        </View>
                        <Text style={[styles.smallSubtitle, { paddingStart: 50, paddingEnd: 50 }]}>Temperatura a la que quieres tener tu hogar</Text>

                        <View style={styles.hourContainer}>
                            <View style={{ width: '100%', alignItems: 'flex-end' }}>
                                <TouchableOpacity><MaterialCommunityIcons name={"information"} size={20} style={{ color: color.DARK_GREEN }} /></TouchableOpacity>
                            </View>
                            <Text style={styles.titleBold}>12:00</Text>
                            <Text style={styles.smallSubtitle}>Estimación de la hora a la que deberías encender la calefacción</Text>
                        </View>
                    </View>
                </View>


                <View style={[styles.cardsContainer, { marginBottom: 22 }]}>
                    <CardHeader iconName={"lightbulb"} title={"Precio de la luz por horas"} info={false} />
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.titleBold}>120€/Mwh</Text>
                        <Text style={styles.subtitle}>Precio actual de la luz</Text>
                    </View>
                    <LightChart />
                </View>

            </View>
        </ScrollView>
    )
}

function LightChart() {

    const auxiliar = []

    for (var i = 0; i <= 24; i++) {
        let price = Math.round(Math.random() * (300 - 110) + 110, 2);
        auxiliar[i] = { Horas: i, Precio: price, fill: price <= 180 ? color.LIGHT_GREEN : color.RED };
    }

    /*const data = [
        { Horas: 0, Precio: 123, fill: color.LIGHT_GREEN },
        { Horas: 1, Precio: 120, fill: color.LIGHT_GREEN },
        { Horas: 2, Precio: 145, fill: color.LIGHT_GREEN },
        { Horas: 3, Precio: 234, fill: color.RED },
        { Horas: 4, Precio: 233, fill: color.RED },
        { Horas: 5, Precio: 256, fill: color.RED },
        { Horas: 6, Precio: 257, fill: color.RED },
        { Horas: 7, Precio: 260, fill: color.RED },
        { Horas: 8, Precio: 234, fill: color.RED },
        { Horas: 9, Precio: 123, fill: color.LIGHT_GREEN },
        { Horas: 10, Precio: 120, fill: color.LIGHT_GREEN },
        { Horas: 11, Precio: 111, fill: color.LIGHT_GREEN },
        { Horas: 12, Precio: 100, fill: color.LIGHT_GREEN },
        { Horas: 13, Precio: 123, fill: color.LIGHT_GREEN },
        { Horas: 14, Precio: 129, fill: color.LIGHT_GREEN },
        { Horas: 15, Precio: 234, fill: color.RED },
        { Horas: 16, Precio: 256, fill: color.RED },
        { Horas: 17, Precio: 289, fill: color.RED },
        { Horas: 18, Precio: 260, fill: color.RED },
        { Horas: 19, Precio: 256, fill: color.RED },
        { Horas: 20, Precio: 220, fill: color.RED },
        { Horas: 21, Precio: 200, fill: color.RED },
        { Horas: 22, Precio: 180, fill: color.RED },
        { Horas: 23, Precio: 140, fill: color.LIGHT_GREEN }
    ];*/

    return (
        <View style={styles.chart}>
            <VictoryChart domainPadding={1}>
                <VictoryAxis tickValues={[0, 4, 8, 12, 16, 20, 23]} tickFormat={["0", "4", "8", "12", "16", "20", "24"]} />
                <VictoryBar data={auxiliar} x="Horas" y="Precio" style={{ data: { fill: ({ datum }) => datum.fill, }, labels: { fontSize: 6, color: color.Dar } }} labels={({ datum }) => `${datum.Precio}`} />
            </VictoryChart>
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
        marginTop: 3,
        textAlign: 'center'
    },
    smallSubtitle: {
        color: color.DARK_GREEN,
        marginTop: 3,
        textAlign: 'center',
        fontSize: 14,
        paddingStart: 12,
        paddingEnd: 12
    },
    hourContainer: {
        flexDirection: 'colum',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 15,
        paddingStart: 10,
        paddingTop: 10,
        paddingEnd: 10,
        paddingBottom: 20,
        width: '100%',
        marginTop: 30,
    },
    chart: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});