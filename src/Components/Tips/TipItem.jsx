import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as color from '../../../constants/colors'
import Checkbox from 'expo-checkbox';

export default function TipItem({ title, body, points, isCompleted }) {
  
    const [isChecked, setChecked] = useState(isCompleted);
    const isCheckedChanged = () => setChecked(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.2, alignItems: 'center' }}>
                <Text style={styles.pointsTitle}>+{points}</Text>
                <Text style={styles.pointsSubtitle}>Vilanos</Text>
            </View>
            <View style={{ flex: 0.7, marginStart: 5 }}>
                <Text style={[styles.title, isChecked ? { textDecorationLine: 'line-through' } : { textDecorationLine: 'none' }]}>{title}</Text>
                <Text style={[styles.body, isChecked ? { textDecorationLine: 'line-through' } : { textDecorationLine: 'none' }]}>{body}</Text>
            </View>
            <View style={{ flex: 0.1, alignItems: 'center' }}>
                <Checkbox value={isChecked} onValueChange={isCheckedChanged} color={isChecked ? color.DARK_GREEN : undefined} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: color.BACKGROUND_CARD_COLOR,
        borderRadius: 21,
        padding: 21,
        marginTop: 21,

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
});
