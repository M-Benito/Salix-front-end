import { StyleSheet, Text, View } from 'react-native';
import * as color from '../../../constants/colors'

export default function TextEnriched({ title, plaseholder }) {
    return (
        <View style={styles.textImputContainer}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{plaseholder}</Text>
            </View>
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
        paddingBottom: 10,
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
