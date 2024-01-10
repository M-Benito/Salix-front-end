import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SugestionCard from '../Components/Common/SugestionCard';
import CardHeader from '../Components/Common/CardHeader';
import IndoorsPreview from '../Components/Home/IndoorsPreview';
import * as color from '../../constants/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Indoors() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.svContainer}>
                <SugestionCard iconName={"weather-windy"} titleText={"Toca ventilar tu hogar"} bodyText={"Hemos detectado que jhace al menos 24 horas que no ventilas tu hogar."} hasBorder={true} positiveBtn={"Ventilar"} negativeBtn={"Recordar luego"} positiveAction={'Ventilado'} negativeAction={'Te lo recordaremos luego'} />

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


                <View style={[styles.cardsContainer, {marginBottom: 22}]}>
                    <CardHeader iconName={"lightbulb"} title={"Precio de la luz por horas"} info={false} />
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.titleBold}>120€/Mwh</Text>
                        <Text style={styles.subtitle}>Precio actual de la luz</Text>
                    </View>
                </View>



            </View>
        </ScrollView>
    )
}

function HeaderCard({ iconName, title, info }) {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.inLine}>
                <MaterialCommunityIcons name={iconName} size={14} style={{ color: color.DARK_GREEN }} />
                <Text style={styles.title}>{title}</Text>
            </View>
            {info ? <TouchableOpacity><MaterialCommunityIcons name={"information"} size={14} style={{ color: color.DARK_GREEN }} /></TouchableOpacity> : null}
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
    }
});