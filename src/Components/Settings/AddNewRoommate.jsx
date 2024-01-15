import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as color from '../../../constants/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import InviteModal from './InviteModal';

export default function AddNewRoommate({ isModalOpen, setModalIsOpen }) {
    return (
        <View style={styles.profileImageContainer}>
            <TouchableOpacity onPress={() => setModalIsOpen(!isModalOpen)}>
                <View style={styles.newRoommateImage}>
                    <MaterialCommunityIcons name={"account-plus"} size={30} style={{ color: color.DARK_GREEN }} />
                </View>
            </TouchableOpacity>
            <Text style={styles.titleRoommate}>Añadir nuevo</Text>
            <Text style={styles.subtitleRoommate}>compi a la casa</Text>
            <InviteModal isModalOpen={isModalOpen} setModalIsOpen={setModalIsOpen} />
        </View>
    )
}

const styles = StyleSheet.create({
    profileImageContainer: {
        flexDirection: 'colum',
        alignItems: 'center',
        justifyContent: 'center',
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
