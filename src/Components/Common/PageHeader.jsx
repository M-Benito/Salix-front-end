import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import * as color from '../../../constants/colors'

export default function PageHeader({ title }) {
    return (
        <Text style={styles.text}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Oxygen-Bold',
        fontSize: 20,
        color: color.DARK_GREEN,
        marginStart: 21,
        marginTop: 12
    },
});