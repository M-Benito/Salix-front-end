import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as color from '../../../constants/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MasterRoommate({ userName }) {
    return (
        <View style={styles.profileImageContainer}>
            <View style={styles.profileMasterContainer}>
                <Image style={styles.profileMasterImage} source={require('../../../assets/Nacho.jpg')} />
                <View style={{ position: 'absolute', height: '100%', justifyContent: 'space-between' }}>
                    <View style={styles.medalMasterContainer}>
                        <MaterialCommunityIcons name={"medal"} size={16} style={{ color: color.DARK_GREEN }} />
                    </View>
                    <TouchableOpacity>
                        <View style={styles.laveHouseContainer}>
                            <MaterialCommunityIcons name={"exit-to-app"} size={16} style={{ color: color.DARK_GREEN }} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.titleRoommate}>{userName}</Text>
            <Text style={styles.subtitleRoommate}>Dueño de la casa</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    profileImageContainer: {
        flexDirection: 'colum',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileMasterContainer: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    profileMasterImage: {
        width: 90,
        height: 90,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: color.LIGHT_GREEN,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.EXTRA_LIGHT_GREEN,
        marginBottom: 10,
    },
    medalMasterContainer: {
        width: 30,
        height: 30,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.LIGHT_GREEN,
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