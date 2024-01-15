import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as color from '../../../constants/colors'

export default function TextImputEnriched({ title, plaseholder, keyboardType, isEraseable, theme }) {
    return (
        <View style={[styles.textImputContainer, { borderColor: theme == "light" ? color.LIGHT_GREEN : color.DARK_GREEN, backgroundColor: theme == "light" ? color.LIGHT_GREEN : null }]}>
            <View>
                <Text style={[styles.title, { color: theme == "border-liht" ? color.GRAY : color.DARK_GREEN }]}>{title}</Text>
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
