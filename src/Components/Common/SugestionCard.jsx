import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SugestionCard({ isCloseable, iconName, hasBorder, titleText, bodyText, positiveBtn, negativeBtn }) {

    return (
        <View style={[styles.container, { borderWidth: hasBorder ? 2 : 0}]}>
            <View style={styles.headerContainer}>
                <View style={styles.inLine}>
                    <MaterialCommunityIcons name={iconName} size={14} color="black" />
                    <Text style={styles.title}>{titleText}</Text>
                </View>
                {isCloseable ? <TouchableOpacity><MaterialCommunityIcons name={"window-close"} size={14} color='black' /></TouchableOpacity> : null}
            </View>
            <Text style={styles.body}>{bodyText}</Text>
            <View style={styles.headerContainer}>
            {positiveBtn ? <TouchableOpacity style={styles.negativeBtn}><Text>{negativeBtn}</Text></TouchableOpacity> : null}
            {positiveBtn ? <TouchableOpacity style={styles.positiveBtn}><Text>{positiveBtn}</Text></TouchableOpacity> : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EAECDD',
        borderRadius: 21,
        padding: 20,
        marginTop: 22,
        borderColor: '#9AEBA3',
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
        color: '#0B1D12',
        fontSize: 14,
        fontFamily: 'Oxygen-Bold',
    },

    body: {
        color: '#0B1D12',
        marginTop: 16,
        fontSize: 14,
        fontFamily: 'Oxygen-Regular',
    },

    negativeBtn: {
        flex: 1,
        borderRadius: 21,
        borderColor: '#0B1D12',
        padding:15,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Oxygen-Bold',
        fontSize: 16,
        color: '#0B1D12',
        marginEnd:10,
        marginTop: 20,
    },

    positiveBtn: {
        flex: 1,
        borderRadius: 21,
        borderColor: '#9AEBA3',
        backgroundColor: '#9AEBA3',
        padding:15,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Oxygen-Bold',
        fontSize: 16,
        color: '#9AEBA3',
        marginTop: 20,
    },
});
