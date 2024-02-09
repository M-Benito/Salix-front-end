import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import * as color from '../../../constants/colors'
import CardHeader from '../Common/CardHeader';
import TextImputEnriched from '../Common/TextImputEnriched';
import GestureRecognizer from 'react-native-swipe-gestures';

export default function InviteModal({ isModalOpen, setModalIsOpen }) {
    return (
        <GestureRecognizer style={{ flex: 1 }} onSwipeDown={() => setModalIsOpen(false)}>
            <Modal visible={isModalOpen} transparent={true} animationType={'slide'}>
                <View style={styles.modalContainer}>
                    <View style={styles.container}>
                        <View style={{ width: '100%', alignItems: 'center', marginBottom: 12 }}>
                            <View style={{ width: 50, height: 6, backgroundColor: color.DARK_GREEN, borderRadius: 50, justifyContent: 'center' }} />
                        </View>
                        <CardHeader iconName={"account-arrow-left"} title={"Solicitar a alguien que se una"} info={false} edit={false} />
                        <Text style={styles.title}>¿De qué trata?</Text>
                        <Text style={styles.subtitle}>Si vives con otra persona puedes solicitarle formar parte de la misma unidad habitacional.</Text>
                        <TextImputEnriched title={"Email del usuario"} plaseholder={"Introduce aquí el email..."} keyboardType={"email"} isEraseable={true} theme={"dark"} />
                        <TouchableOpacity onPress={() => setModalIsOpen(!isModalOpen)} style={styles.darkButton}><Text style={styles.darkButtonText}>Enviar invitación</Text></TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </GestureRecognizer>
    )
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
});