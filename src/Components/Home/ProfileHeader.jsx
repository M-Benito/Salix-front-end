import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import * as color from '../../../constants/colors'

export default function ProfileHeader({ userName, userLevel, completedPercentage, points }) {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.inLine}>
                <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                    <View style={styles.userProgress}>
                    <Progress.Circle progress={completedPercentage * 0.01} size={50} direction={"counter-clockwise"} style={styles.progressPie} color={color.LIGHT_GREEN} />
                        <Image style={styles.profileImage} source={require('../../../assets/Nacho.jpg')} />
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={styles.title}>Hola, <Text style={styles.titleBold}>{userName}!</Text> 👋</Text>
                    <Text style={styles.subTitle}>Nivel {userLevel} completado al {completedPercentage}%</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.inLine} onPress={() => navigation.navigate("Puntos")}>
                <Image style={styles.vanilosImage} source={require('../../../assets/vanilos.png')} />
                <Text style={styles.vanilosPoints}>{points}</Text>
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
        borderColor: color.TRANSPARENT,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: 14,
    },
    progressPie:{
        position: 'absolute',
    },
    profileImage: {
        position: 'absolute',
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
        backgroundColor: color.EXTRA_LIGHT_GREEN,
    },
    title: {
        color: color.DARK_GREEN,
        fontSize: 20,
        fontFamily: 'Oxygen-Regular',
    },
    titleBold: {
        fontFamily: 'Oxygen-Bold',
    },
    subTitle: {
        fontFamily: 'Oxygen-Bold',
        color: color.LIGHT_GREEN,
        fontSize: 10,
    },
    vanilosImage: {
        width: 25,
        height: 25,
        marginEnd: 4,
    },
    vanilosPoints: {
        fontFamily: 'Oxygen-Bold',
        color: color.DARK_GREEN,
        fontSize: 20,
    },
});
