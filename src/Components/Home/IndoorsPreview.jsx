import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import * as color from '../../../constants/colors'

export default function IndoorsPreview({ hasVentilated }) {

    return (
        <View style={styles.container}>
            <Text style={[styles.subtitle, { marginBottom: 20 }]}>Tu hogar</Text>
            <Text style={styles.title}>20º</Text>
            <Text style={styles.subtitle}>Temperatura interior</Text>
            <ImageBackground resizeMode="contain" style={styles.image} source={hasVentilated ? require("../../../assets/house-green.png") : require("../../../assets/house-yellow.png")}>
                <View style={styles.houseContainer} >
                    <Text style={styles.houseTitle}>{hasVentilated ? "Bueno" : "Regular"}</Text>
                    <Text style={[styles.houseSubtitle, { marginBottom: 15 }]}>Aire interior</Text>
                    <Text style={[styles.houseSubtitle, { paddingStart: 20, paddingTop: 10, paddingEnd: 20 }]}>{hasVentilated ? "La calidad del aire en el interior es buena." : "No has ventilado tu casa desde hace más de 24 horas"}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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
    title: {
        fontSize: 48,
        color: color.DARK_GREEN,
        fontFamily: 'Oxygen-Bold',
    },
    subtitle: {
        fontSize: 20,
        color: color.DARK_GREEN,
        marginTop: 3,
        textAlign: 'center'
    },
    aqStatusContainer: {
        borderRadius: 50,
        borderWidth: 2,
        borderColor: color.DARK_GREEN,
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 8,
        paddingEnd: 8,
        paddingTop: 4,
        paddingBottom: 4,
        marginTop: 27,
        marginBottom: 10
    },
    aqiStatusCircle: {
        backgroundColor: color.DARK_GREEN,
        width: 11,
        height: 11,
        borderRadius: 50,
        marginEnd: 5
    },
    aqStatusText: {
        color: color.DARK_GREEN,
        fontSize: 10,
    },
    titleBold: {
        fontFamily: 'Oxygen-Bold',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 20
    },
    houseContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 21,
        width: '100%',
        marginTop: 25,

        padding: 30
    },
    houseTitle: {
        fontSize: 30,
        color: color.DARK_GREEN,
        fontFamily: 'Oxygen-Bold',
        marginTop: 5,
        marginBottom: 5
    },
    houseSubtitle: {
        textAlign: 'center',
        fontSize: 15,
        color: color.DARK_GREEN,
        fontFamily: 'Oxygen-Regular',
    },
});
