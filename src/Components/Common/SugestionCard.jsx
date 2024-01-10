import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as color from '../../../constants/colors'

export default function SugestionCard({ isCloseable, iconName, hasBorder, titleText, bodyText, isGoodDay, positiveBtn, negativeBtn, positiveAction, negativeAction }) {

    return (
        <View style={[styles.container, { borderWidth: hasBorder ? 2 : 0 }]}>
            <View style={styles.headerContainer}>
                <View style={styles.inLine}>
                    <MaterialCommunityIcons name={iconName} size={14} style={{ color: color.DARK_GREEN }} />
                    <Text style={styles.title}>{titleText}</Text>
                    {isGoodDay != undefined ? <PillStatus isGoodDay={isGoodDay}/> : null}
                </View>
                {isCloseable ? <TouchableOpacity><MaterialCommunityIcons name={"window-close"} size={14} style={{ color: color.DARK_GREEN }} /></TouchableOpacity> : null}
            </View>
            <Text style={styles.body}>{bodyText}</Text>
            <View style={styles.headerContainer}>
                {positiveBtn ? <TouchableOpacity style={styles.negativeBtn} onPress={() => Alert.alert(negativeAction)}><Text>{negativeBtn}</Text></TouchableOpacity> : null}
                {positiveBtn ? <TouchableOpacity style={styles.positiveBtn} onPress={() => Alert.alert(positiveAction)}><Text>{positiveBtn}</Text></TouchableOpacity> : null}
            </View>
        </View>
    )
}

function PillStatus({ isGoodDay }) {
    if(isGoodDay) {
        return (
            <View style={[styles.pillContainer, {borderColor: color.LIGHT_GREEN}]}>
                <View style={[styles.pillDot,  {backgroundColor: color.LIGHT_GREEN}]} />
                <Text>Bueno</Text>
            </View>
        )
    } else {
        return (
            <View style={[styles.pillContainer, {borderColor: color.RED}]}>
                <View style={[styles.pillDot,  {backgroundColor: color.RED}]} />
                <Text>Perjudicial</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.BACKGROUND_CARD_COLOR,
        borderRadius: 21,
        padding: 20,
        marginTop: 22,
        borderColor: color.LIGHT_GREEN,
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    inLine: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    title: {
        marginStart: 4,
        color: color.DARK_GREEN,
        fontSize: 14,
        fontFamily: 'Oxygen-Bold',
    },

    body: {
        color: color.DARK_GREEN,
        marginTop: 12,
        fontSize: 14,
        fontFamily: 'Oxygen-Regular',
    },

    pillContainer: {
        borderColor: color.LIGHT_GREEN,
        borderRadius: 50,
        borderWidth: 1.5,
        paddingStart: 5,
        paddingTop: 1,
        paddingEnd: 10,
        paddingBottom: 1,
        marginLeft: 5,
        fontSize: 8,
        fontFamily: 'Oxygen-Bold',
        flexDirection: 'row',
        alignItems: 'center',
    },

    pillDot: {
        borderRadius: 50,
        backgroundColor: color.LIGHT_GREEN,
        width: 9,
        height: 9,
        marginEnd: 5
    },

    negativeBtn: {
        flex: 1,
        borderRadius: 21,
        borderColor: color.DARK_GREEN,
        padding: 15,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Oxygen-Bold',
        fontSize: 16,
        color: color.DARK_GREEN,
        marginEnd: 10,
        marginTop: 20,
    },

    positiveBtn: {
        flex: 1,
        borderRadius: 21,
        borderColor: color.LIGHT_GREEN,
        backgroundColor: color.LIGHT_GREEN,
        padding: 15,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Oxygen-Bold',
        fontSize: 16,
        color: color.LIGHT_GREEN,
        marginTop: 20,
    },
});
