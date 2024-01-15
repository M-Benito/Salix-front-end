import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as color from '../../../constants/colors'

export default function TextImputEnriched({ title, plaseholder, keyboardType, isEraseable }) {
    return (
        <View style={styles.textImputContainer}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <TextInput style={styles.subtitle} placeholder={plaseholder} keyboardType={keyboardType} />
            </View>
            {isEraseable ? <TouchableOpacity><MaterialCommunityIcons name={"close-circle"} size={17} style={{ color: color.DARK_GREEN }} /></TouchableOpacity> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    textImputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 12,
        paddingStart: 12,
        paddingTop: 10,
        paddingEnd: 12,
        paddingBottom: 5,
        borderColor: color.DARK_GREEN,
        borderWidth: 2,
        marginTop: 12,
    },
    title: {
        fontFamily: 'Oxygen-Bold',
        fontSize: 12,
        color: color.GRAY,
    },
    subtitle: {
        fontFamily: 'Oxygen-Regular',
        fontSize: 12,
        color: color.DARK_GREEN,
    },
});
