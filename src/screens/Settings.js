import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image, Switch } from 'react-native';
import CardHeader from '../Components/Common/CardHeader';
import * as color from '../../constants/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Settings() {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.svContainer}>
                <View style={styles.settingsGroupContainer}>
                    <CardHeader iconName={"account"} title={"Datos del usuario"} info={false} edit={true} />
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Image style={styles.profileImage} source={require('../../assets/Nacho.jpg')} />
                    </View>
                    <TextImputEnriched title={"Nombre"} plaseholder={"Nacho"} keyboardType={"numeric"} isEraseable={true} />
                    <TextImputEnriched title={"Apellidos"} plaseholder={"Moreno Mullet"} keyboardType={"numeric"} isEraseable={true} />
                    <TextImputEnriched title={"Email"} plaseholder={"100383694@alumnos.uc3m.es"} keyboardType={"numeric"} isEraseable={true} />
                    <TextImputEnriched title={"Contraseña"} plaseholder={"*********"} keyboardType={"numeric"} isEraseable={true} />
                    <View style={styles.settingsToggle}>
                        <Text style={styles.textImputTitle}>¿Tienes alergia al polen?</Text>
                        <Switch trackColor={{ false: '#767577', true: color.EXTRA_LIGHT_GREEN }} thumbColor={isEnabled ? color.LIGHT_GREEN : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled}
                        />
                    </View>
                </View>

                <View style={styles.settingsGroupContainer}>
                    <CardHeader iconName={"map-marker"} title={"Dirección de tu casa"} info={false} edit={true} />
                    <View style={styles.inLine}>
                        <View style={{ flex: 4, marginEnd: 10 }}><TextImputEnriched title={"Dirección"} plaseholder={"Calle de la esperanza"} keyboardType={"numeric"} isEraseable={false} /></View>
                        <View style={{ flex: 1 }}><TextImputEnriched title={"Núm."} plaseholder={"1"} keyboardType={"numeric"} isEraseable={false} /></View>
                    </View>
                    <View style={styles.inLine}>
                        <View style={{ flex: 1.5, marginEnd: 10 }}><TextImputEnriched title={"Ciudad"} plaseholder={"Madrid"} keyboardType={"numeric"} isEraseable={false} /></View>
                        <View style={{ flex: 1 }}><TextImputEnriched title={"Cód. postal"} plaseholder={"28012"} keyboardType={"numeric"} isEraseable={false} /></View>
                    </View>
                    <SPMap address={[40.41024043544208, -3.7008170170573025]} />
                    <TouchableOpacity style={styles.darkButton}><Text style={styles.darkButtonText}>Cambiar dirección</Text></TouchableOpacity>
                </View>

                <View style={styles.settingsGroupContainer}>
                    <CardHeader iconName={"home-heart"} title={"Datos de tu casa"} info={false} edit={true} />
                    <View style={styles.inLine}>
                        <Text>Metros cuadrados  de la casa</Text>
                        <View style={styles.inLine}>
                            <TextInput />
                            <Text>m2</Text>
                        </View>
                    </View>

                    <View style={styles.inLine}>
                        <View style={styles.inLine}>
                            <Picker selectedValue={selectedLanguage} onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
                                <Picker.Item label="Java" value="java" />
                                <Picker.Item label="JavaScript" value="js" />
                            </Picker>
                        </View>
                    </View>
                </View>

                <View style={styles.settingsGroupContainer}>
                    <CardHeader iconName={"home-account"} title={"Usuarios de la casa"} info={false} edit={false} />
                    <View style={styles.inLine}>
                        <MasterRoommate userName={'Nacho'} />
                        <NormalRoommate userName={'Lydia'} />
                        <AddNewRoommate />
                    </View>
                </View>

                <View style={styles.settingsGroupContainer}>
                    <CardHeader iconName={"bell"} title={"Notificaciones"} info={false} edit={false} />
                    <View style={styles.inLine}>
                        <View>
                            <Text style={styles.textImputTitle}>Notificaciones de ventilación</Text>
                            <Text style={styles.textImputInput}>Si hace 24 horas que no ventilas, se notifica.</Text>
                        </View>
                        <Switch trackColor={{ false: '#767577', true: color.EXTRA_LIGHT_GREEN }} thumbColor={isEnabled ? color.LIGHT_GREEN : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled} />
                    </View>
                    <View style={styles.inLine}>
                        <View>
                            <Text style={styles.textImputTitle}>Acciones diarias</Text>
                            <Text style={styles.textImputInput}>Te avisaremos si no has completado las tareas.</Text>
                        </View>
                        <Switch trackColor={{ false: '#767577', true: color.EXTRA_LIGHT_GREEN }} thumbColor={isEnabled ? color.LIGHT_GREEN : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled} />
                    </View>
                    <View style={styles.inLine}>
                        <View>
                            <Text style={styles.textImputTitle}>Acciones semanales</Text>
                            <Text style={styles.textImputInput}>Puedes ganar puntos extra, estate atento.</Text>
                        </View>
                        <Switch trackColor={{ false: '#767577', true: color.EXTRA_LIGHT_GREEN }} thumbColor={isEnabled ? color.LIGHT_GREEN : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled} />
                    </View>
                    <View style={styles.inLine}>
                        <View>
                            <Text style={styles.textImputTitle}>Información del clima</Text>
                            <Text style={styles.textImputInput}>Te enviamos un resumen del tiempo cada día.</Text>
                        </View>
                        <Switch trackColor={{ false: '#767577', true: color.EXTRA_LIGHT_GREEN }} thumbColor={isEnabled ? color.LIGHT_GREEN : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled} />
                    </View>
                    <View style={styles.inLine}>
                        <View>
                            <Text style={styles.textImputTitle}>Aviso de alto nivel de polen</Text>
                            <Text style={styles.textImputInput}>Si los niveles de polen son altos, se notifica.</Text>
                        </View>
                        <Switch trackColor={{ false: '#767577', true: color.EXTRA_LIGHT_GREEN }} thumbColor={isEnabled ? color.LIGHT_GREEN : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled} />
                    </View>
                </View>
                <Text style={[styles.textImputInput, { textAlign: 'center', marginTop: 25, marginBottom: 12 }]}>V 1.0.0</Text>
            </View>
        </ScrollView >
    )
}

function TextImputEnriched({ title, plaseholder, keyboardType, isEraseable }) {
    return (
        <View style={styles.textImputContainer}>
            <View>
                <Text style={styles.textImputTitle}>{title}</Text>
                <TextInput style={styles.textImputInput} placeholder={plaseholder} keyboardType={keyboardType} />
            </View>
            {isEraseable ? <TouchableOpacity><MaterialCommunityIcons name={"close-circle"} size={17} style={{ color: color.DARK_GREEN }} /></TouchableOpacity> : null}
        </View>
    )
}

function MasterRoommate({ userName }) {
    return (
        <View style={styles.profileImageContainer}>
            <View style={styles.profileMasterContainer}>
                <Image style={styles.profileMasterImage} source={require('../../assets/Nacho.jpg')} />
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

function NormalRoommate({ userName }) {
    return (
        <View style={styles.profileImageContainer}>
            <View style={{ position: 'relative', flexDirection: 'colum', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <Image style={styles.profileRoommateImage} source={require('../../assets/Lydia.jpg')} />
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

function AddNewRoommate() {
    return (
        <View style={styles.profileImageContainer}>
            <TouchableOpacity>
                <View style={styles.newRoommateImage}>
                    <MaterialCommunityIcons name={"account-plus"} size={30} style={{ color: color.DARK_GREEN }} />
                </View>
            </TouchableOpacity>
            <Text style={styles.titleRoommate}>Añadir nuevo</Text>
            <Text style={styles.subtitleRoommate}>compi a la casa</Text>
        </View>
    )
}

function SPMap({ address }) {
    let lat = address[0];
    let long = address[1];

    return (
        <View style={styles.mapContainer}>
            <MapView
                initialRegion={{
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: 0.0004,
                    longitudeDelta: 0.0004
                }}
                style={styles.map}>
                <Marker draggable={false} coordinate={{ latitude: lat, longitude: long }} />
            </MapView>
        </View>
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
    container: {
        flex: 1,
        backgroundColor: color.BACKGROUND_COLOR,
    },
    svContainer: {
        paddingStart: 20,
        paddingEnd: 20
    },
    settingsGroupContainer: {
        backgroundColor: color.BACKGROUND_COLOR,
        justifyContent: 'center',
        borderRadius: 21,
        marginTop: 22,
        padding: 20,
        borderColor: color.DARK_GREEN,
        borderWidth: 2,
        width: '100%'
    },
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
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: color.DARK_GREEN,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.EXTRA_LIGHT_GREEN,
        marginBottom: 10,
        marginTop: 10
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
    newRoommateImage: {
        width: 90,
        height: 90,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: color.DARK_GREEN,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.BACKGROUND_CARD_COLOR,
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
    textImputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 12,
        paddingStart: 12,
        paddingTop: 10,
        paddingEnd: 12,
        paddingBottom: 5,
        borderColor: color.DARK_GREEN,
        borderWidth: 2,
        marginTop: 12,
    },
    textImputTitle: {
        fontFamily: 'Oxygen-Bold',
        fontSize: 12,
        color: color.GRAY,
    },
    textImputInput: {
        fontFamily: 'Oxygen-Regular',
        fontSize: 12,
        color: color.DARK_GREEN,
    },
    inLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    settingsToggle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
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
    darkButton: {
        backgroundColor: color.DARK_GREEN,
        borderRadius: 21,
        padding: 20,
        marginTop: 21,
    },
    darkButtonText: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Oxygen-Bold',
        fontSize: 17,
    },
    mapContainer: {
        width: '100%',
        height: 130,
        marginTop: 21,
        borderRadius: 21,
        borderColor: color.DARK_GREEN,
        borderWidth: 2,
        overflow: 'hidden',
        pointerEvents: 'none'
    },
    map: {
        width: '100%',
        height: '100%',
    },
});