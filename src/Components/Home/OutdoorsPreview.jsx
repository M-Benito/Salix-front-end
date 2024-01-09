import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as color from '../../../constants/colors'

export default function OutdoorsPreview({ forecastImage, temperatue, aqiState, aqi }) {

    let bgColor = color.LIGHT_GREEN;
    let aqText = "Buena";

    bgColor = StablishAquState(aqiState)[0];
    aqText = StablishAquState(aqiState)[1];

    return (
        <View style={[styles.container, { backgroundColor: bgColor }]}>
            <View style={styles.inLine}>
                <MaterialCommunityIcons name={"cloud"} size={26} style={{ color: color.DARK_GREEN, marginRight: 15 }} />
                <Text style={styles.titleBold}>{temperatue}º</Text>
            </View>
            <Text style={styles.subtitle}>Temperatura actual</Text>
            <View style={styles.aqStatusContainer}>
                <View style={styles.aqiStatusCircle} />
                <Text style={styles.aqStatusText}>{aqText}</Text>
            </View>
            <Text style={styles.title}><Text style={styles.titleBold}>{aqi}</Text>/100</Text>
            <Text style={styles.subtitle}>Calidad del aire</Text>
        </View>
    )
}

function StablishAquState(aqiState) {
    let bgColor = color.LIGHT_GREEN;
    let aqText = "Buena";

    if (aqiState == 1) {
        bgColor = color.LIGHT_GREEN;
        aqText = "Excelente";
    }
    if (aqiState == 2) {
        bgColor = color.LIGHT_GREEN;
        aqText = "Buena";
    }
    if (aqiState == 3) {
        bgColor = color.YELLOW;
        aqText = "Moderado";
    }
    if (aqiState == 4) {
        bgColor = color.RED;
        aqText = "Perjudicial";
    }

    return [bgColor, aqText];
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.LIGHT_GREEN,
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
    },
    subtitle: {
        fontSize: 20,
        color: color.DARK_GREEN,
        marginTop: 3
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
        fontSize: 48,
        color: color.DARK_GREEN,
    },
});
