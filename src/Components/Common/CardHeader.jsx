import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as color from '../../../constants/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CardHeader({ iconName, title, info, edit, state }) {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.inLine}>
                <MaterialCommunityIcons name={iconName} size={17} style={{ color: color.DARK_GREEN }} />
                <Text style={styles.title}>{title}</Text>
            </View>
            {info ? <TouchableOpacity><MaterialCommunityIcons name={"information"} size={17} style={{ color: color.DARK_GREEN }} /></TouchableOpacity> : null}
            {edit ? <TouchableOpacity onPress={() => state(previousState => !previousState)}><MaterialCommunityIcons name={"pencil"} size={17} style={{ color: color.GRAY }} /></TouchableOpacity> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    inLine: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    title: {
        marginStart: 5,
        color: color.DARK_GREEN,
        fontSize: 14,
        fontFamily: 'Oxygen-Bold',
    }
});