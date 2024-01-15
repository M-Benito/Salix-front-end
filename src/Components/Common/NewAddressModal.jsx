import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import * as color from '../../../constants/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import CardHeader from '../Common/CardHeader';
import TextImputEnriched from '../Common/TextImputEnriched';
import MapView, { Marker } from 'react-native-maps';

export default function NewAddressModal({ isModalOpen, setModalIsOpen }) {
    return (
        <Modal visible={isModalOpen} transparent={true} animationType={'slide'}>
            <View style={styles.mapContainer}>
                <MapView
                    initialRegion={{
                        latitude: 40.41024043544208,
                        longitude: -3.7008170170573025,
                        latitudeDelta: 0.0004,
                        longitudeDelta: 0.0004
                    }}
                    style={styles.map}>
                    <Marker draggable={false} coordinate={{ latitude: 40.41024043544208, longitude: -3.7008170170573025 }} />
                </MapView>
                <View style={{ width: '100%', alignItems: 'center', position: 'absolute', marginTop: 12 }}>
                    <View style={{ width: 50, height: 6, backgroundColor: color.DARK_GREEN, borderRadius: 50, justifyContent: 'center' }} />
                </View>
                <View style={{ marginStart: 21, marginTop: 40, marginEnd: 21 }}>
                    <TextImputEnriched title={"Buscar dirección"} plaseholder={"Buscar..."} keyboardType={"numeric"} isEraseable={true} theme={"light"}/>
                </View>

                <View style={{ marginStart: 21, marginEnd: 21, marginBottom: 60, backgroundColor: color.EXTRA_LIGHT_GREEN, borderRadius: 21 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 20, marginEnd: 20, marginTop: 12, marginBottom: 12 }}>
                        <MaterialCommunityIcons name={"map-marker"} size={17} style={{ color: color.DARK_GREEN }} />
                        <Text style={styles.bottomText}>Calle de la Esperanza 1, 28012 Madrid</Text>
                    </View>
                    <TouchableOpacity onPress={() => setModalIsOpen(!isModalOpen)} style={styles.darkButton}><Text style={styles.darkButtonText}>Guardar nueva dirección</Text></TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

async function getLocationPermission() {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
        // nada
        return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const current = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
    }

    // Devolver current
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%',
    },
    container: {
        flexDirection: 'colum',
        with: '100%',
        backgroundColor: color.LIGHT_GREEN,
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        paddingTop: 15,
        paddingBottom: 21,
        paddingStart: 21,
        paddingEnd: 21,
    },
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
        color: color.DARK_GREEN,
        fontSize: 12,
        fontFamily: 'Oxygen-Bold',
        marginBottom: 2,
    },
    subtitle: {
        color: color.DARK_GREEN,
        fontSize: 12,
        fontFamily: 'Oxygen-Regular',
        marginBottom: 2,
    },
    bottomText: {
        color: color.DARK_GREEN,
        fontSize: 12,
        fontFamily: 'Oxygen-Regular',
        marginStart: 5,
    },
    darkButton: {
        backgroundColor: color.DARK_GREEN,
        borderRadius: 21,
        padding: 20,
    },
    darkButtonText: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Oxygen-Bold',
        fontSize: 17,
    },
    mapContainer: {
        flex: 1,
        position: 'relative',
        marginTop: 100,
        justifyContent: 'space-between',
        overflow: 'hidden',
        flexDirection: 'colum',
        backgroundColor: color.LIGHT_GREEN,
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderWidth: 3,
        borderBottomWidth: 0,
        borderColor: color.DARK_GREEN,
    },
    map: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
});