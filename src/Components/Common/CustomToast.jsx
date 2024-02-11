import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as color from '../../../constants/colors'

export const toastConfig = {
    success: ({ text1 }) => (
        <View style={[styles.container, styles.successContainer]}>
            <MaterialCommunityIcons name={"check-circle"} size={17} style={{ color: color.DARK_GREEN }} />
            <Text style={styles.text1}>{text1}</Text>
        </View>
    ),

    info: ({ text1 }) => (
        <View style={[styles.container, styles.infoContainer]}>
            <MaterialCommunityIcons name={"information"} size={17} style={{ color: color.DARK_GREEN }} />
            <Text style={styles.text1}>{text1}</Text>
        </View>
    ),

    error: ({ text1 }) => (
        <View style={[styles.container, styles.errorContainer]}>
            <MaterialCommunityIcons name={"close-circle"} size={17} style={{ color: color.DARK_GREEN }} />
            <Text style={styles.text1}>{text1}</Text>
        </View>
    ),
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '90%',
        borderRadius: 15,
        padding: 20,
        marginTop: 22,
    },
    successContainer: {
        backgroundColor: color.EXTRA_LIGHT_GREEN,
        borderWidth: 2,
        borderColor: color.LIGHT_GREEN
    },
    errorContainer: {
        backgroundColor: color.EXTRA_LIGHT_RED,
        borderWidth: 2,
        borderColor: color.RED
    },
    infoContainer: {
        backgroundColor: color.EXTRA_LIGHT_BLUE,
        borderWidth: 2,
        borderColor: color.BLUE
    },
    text1: {
        color: color.DARK_GREEN,
        marginStart: 10,
        fontSize: 14,
        fontFamily: 'Oxygen-Regular',
    },
});
