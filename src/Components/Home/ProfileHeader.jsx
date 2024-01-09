import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileHeader() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.inLine}>
                <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                    <View style={styles.userProgress}>
                        <Image style={styles.profileImage} source={require('../../../assets/icon.png')} />
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={styles.title}>Hola, <Text style={styles.titleBold}>Nacho!</Text> 👋</Text>
                    <Text style={styles.subTitle}>Nivel 2 completado al 75%</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.inLine} onPress={() => navigation.navigate("Points")}>
                <Image style={styles.vanilosImage} source={require('../../../assets/icon.png')} />
                <Text style={styles.vanilosPoints}>120</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    inLine: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userProgress: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#9AEBA3',
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: 14,
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
        backgroundColor: '#0553',
    },
    title: {
        color: '#0B1D12',
        fontSize: 20,
        fontFamily: 'Oxygen-Regular',
    },
    titleBold: {
        fontFamily: 'Oxygen-Bold',
    },
    subTitle: {
        fontFamily: 'Oxygen-Regular',
        color: '#9AEBA3',
        fontSize: 10,
    },
    vanilosImage: {
        width: 25,
        height: 25,
        marginEnd: 4,
    },
    vanilosPoints: {
        fontFamily: 'Oxygen-Bold',
        color: '#0B1D12',
        fontSize: 20,
    },
});
