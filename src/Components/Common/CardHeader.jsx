import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as color from '../../../constants/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CardHeader({ iconName, title, info }) {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.inLine}>
                <MaterialCommunityIcons name={iconName} size={14} style={{ color: color.DARK_GREEN }} />
                <Text style={styles.title}>{title}</Text>
            </View>
            {info ? <TouchableOpacity><MaterialCommunityIcons name={"information"} size={17} style={{ color: color.DARK_GREEN }} /></TouchableOpacity> : null}
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