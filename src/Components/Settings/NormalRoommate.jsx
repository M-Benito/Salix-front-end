import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as color from '../../../constants/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function NormalRoommate({ userName }) {
    return (
        <View style={styles.profileImageContainer}>
            <View style={{ position: 'relative', flexDirection: 'colum', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <Image style={styles.profileRoommateImage} source={require('../../../assets/Lydia.jpg')} />
                <TouchableOpacity style={{ position: 'absolute', justifyContent: 'flex-end' }}>
                    <View style={styles.laveHouseContainer}>
                        <MaterialCommunityIcons name={"exit-to-app"} size={16} style={{ color: color.DARK_GREEN }} />
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={styles.titleRoommate}>{userName}</Text>
            <Text style={styles.subtitleRoommate}>Vive en la casa</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    profileImageContainer: {
        flexDirection: 'colum',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileRoommateImage: {
        width: 90,
        height: 90,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: color.DARK_GREEN,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.EXTRA_LIGHT_GREEN,
        marginBottom: 10,
    },
    laveHouseContainer: {
        width: 30,
        height: 30,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: color.DARK_GREEN,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.BACKGROUND_CARD_COLOR,
    },
    titleRoommate: {
        fontFamily: 'Oxygen-Bold',
        fontSize: 12,
        color: color.GRAY,
    },
    subtitleRoommate: {
        fontFamily: 'Oxygen-Regular',
        fontSize: 12,
        color: color.DARK_GREEN,
    },
});