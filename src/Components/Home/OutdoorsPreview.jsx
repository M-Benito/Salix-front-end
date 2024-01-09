import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as color from '../../../constants/colors'

export default function OutdoorsHomePreview() {

    return (
        <View style={styles.container}>
            <View style={styles.inLine}>
                <MaterialCommunityIcons name={"cloud"} size={26} style={{ color: color.DARK_GREEN, marginRight: 15 }} />
                <Text style={styles.title}>20º</Text>
            </View>
            <Text style={styles.subtitle}>Temperatura actual</Text>
            <View style={styles.aqStatusContainer}>
                <View style={styles.aqiStatusCircle}/>
                <Text style={styles.aqStatusText}>Buena</Text>
            </View>
            <Text style={styles.title}><Text style={styles.titleBold}>84</Text>/100</Text>
            <Text style={styles.subtitle}>Calidad del aire</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.LIGHT_GREEN,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 21,
        width: '100%',
        marginTop: 22,
        padding:20
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
    aqStatusContainer:{
        borderRadius:50,
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
        backgroundColor:  color.DARK_GREEN,
        width: 11,
        height: 11,
        borderRadius: 50,
        marginEnd: 5
    },
    aqStatusText:{
        color: color.DARK_GREEN,
        fontSize: 10,
    },
    titleBold: {
        fontFamily: 'Oxygen-Bold',
    },
});
