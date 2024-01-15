import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import * as color from '../../../constants/colors'

export default function WeeklyPointsItem({ title, body, points, daysCompleted }) {
    
    let days = [false, false, false, false, false, false, false];
    for (var i = 0; i < daysCompleted.length; i++) {
        if (daysCompleted[i] == 1) days[0] = true;
        if (daysCompleted[i] == 2) days[1] = true
        if (daysCompleted[i] == 3) days[2] = true
        if (daysCompleted[i] == 4) days[3] = true
        if (daysCompleted[i] == 5) days[4] = true
        if (daysCompleted[i] == 6) days[5] = true
        if (daysCompleted[i] == 7) days[6] = true
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={{ flex: 0.2, alignItems: 'center' }}>
                    <Text style={styles.pointsTitle}>+{points * daysCompleted.length}</Text>
                    <Text style={styles.pointsSubtitle}>Vilanos</Text>
                </View>
                <View style={{ flex: 0.8, marginStart: 5 }}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.body}>{body}</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={{ flex: 0.2, alignItems: 'center', marginTop: 10 }}>
                    <Text style={styles.pointsTitle}>{daysCompleted.length}/7</Text>
                    <Text style={styles.pointsSubtitle}>Días</Text>
                </View>
                <View style={{ flex: 0.8, marginStart: 5, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={days[0] ? styles.dayCompleted : styles.dayIncompleted}>L</Text>
                    <Text style={days[1] ? styles.dayCompleted : styles.dayIncompleted}>M</Text>
                    <Text style={days[2] ? styles.dayCompleted : styles.dayIncompleted}>X</Text>
                    <Text style={days[3] ? styles.dayCompleted : styles.dayIncompleted}>J</Text>
                    <Text style={days[4] ? styles.dayCompleted : styles.dayIncompleted}>V</Text>
                    <Text style={days[5] ? styles.dayCompleted : styles.dayIncompleted}>S</Text>
                    <Text style={days[6] ? styles.dayCompleted : styles.dayIncompleted}>D</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: color.BACKGROUND_CARD_COLOR,
        borderRadius: 21,
        padding: 21,

    },
    row: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pointsTitle: {
        color: color.GRAY,
        fontFamily: 'Oxygen-Bold',
        fontSize: 18,
    },
    pointsSubtitle: {
        color: color.DARK_GREEN,
        fontFamily: 'Oxygen-Regular',
        fontSize: 10,
        textAlign: 'center',
    },
    title: {
        color: color.GRAY,
        fontFamily: 'Oxygen-Bold',
        fontSize: 14,
    },
    body: {
        color: color.DARK_GREEN,
        fontFamily: 'Oxygen-Regular',
        fontSize: 14,
    },
    checkbox: {
        margin: 8,
    },
    dayCompleted: {
        width: 30,
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: color.LIGHT_GREEN,
        backgroundColor: color.LIGHT_GREEN,
        paddingTop: 3,
        paddingBottom: 2,
        paddingStart: 8,
        paddingEnd: 8,
        fontFamily: 'Oxygen-Bold',
        color: color.DARK_GREEN,
    },
    dayIncompleted: {
        width: 30,
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: color.GRAY,
        backgroundColor: color.BACKGROUND_CARD_COLOR,
        paddingTop: 3,
        paddingBottom: 2,
        paddingStart: 8,
        paddingEnd: 8,
        fontFamily: 'Oxygen-Bold',
        color: color.GRAY,
    }
});
