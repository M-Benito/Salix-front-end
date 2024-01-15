import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import SugestionCard from '../Components/Common/SugestionCard';
import CardHeader from '../Components/Common/CardHeader';
import * as color from '../../constants/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import PageHeader from '../Components/Common/PageHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressBar from 'react-native-progress/Bar';

export default function Points() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.svContainer}>
                    <PageHeader title={"Puntos"} />
                    <View style={[styles.cardsContainer, { alignItems: 'center', borderBottomStartRadius: 0, borderBottomEndRadius: 0 }]}>
                        <View style={styles.inLine}>
                            <Image style={styles.vanilosImage} source={require('../../assets/vanilos.png')} />
                            <Text style={styles.titleBold}>120</Text>
                        </View>
                        <Text style={styles.subtitle}>Vilanos acumulados</Text>
                        <Text style={[styles.titleBold, { marginTop: 20 }]}>Arbusto</Text>
                        <Text style={styles.subtitle}>Nivel de tu Salix</Text>
                        <Text style={styles.levelSubtitle}>Consigue 80 vilanos más para pasar al siguiente nivel</Text>
                        <View style={{ width: '100%', alignItems: 'center', marginTop: 16, marginBottom: 6 }}>
                            <ProgressBar progress={0.75} color={color.LIGHT_GREEN} borderColor={color.GRAY} width={280} height={10} borderRadius={50} />
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingStart: 18, paddingEnd: 21 }}>
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={styles.titleLevel}>Nivel 2</Text>
                                <Text style={styles.subtitleLevel}>Arbusto</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={styles.titleLevel}>Nivel 3</Text>
                                <Text style={styles.subtitleLevel}>Sauce joven</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.salixForestContainer}>
                        <Text style={styles.salixForestTitle}>Bosque de Salix</Text>
                        <Text style={styles.salixForestSubtitle}>Todavía no hay ningún salix en tu bisque. Alcanza el nivel 5 para poder plantar uno.</Text>
                    </View>

                    <Text style={styles.sectionTitle}>Puntos diarios</Text>
                    <Text style={styles.sectionTitle}>Puntos semanales</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
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
    cardsContainer: {
        backgroundColor: color.BACKGROUND_CARD_COLOR,
        justifyContent: 'center',
        borderRadius: 21,
        marginTop: 22,
        padding: 20
    },
    inLine: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleBold: {
        fontFamily: 'Oxygen-Bold',
        fontSize: 48,
        color: color.DARK_GREEN,
    },
    subtitle: {
        fontFamily: 'Oxygen-Regular',
        fontSize: 20,
        color: color.DARK_GREEN,
        marginTop: 3
    },
    vanilosImage: {
        width: 40,
        height: 40,
        marginEnd: 6,
    },
    levelSubtitle: {
        fontFamily: 'Oxygen-Regular',
        fontSize: 14,
        color: color.GRAY,
        textAlign: 'center',
        marginStart: 30,
        marginTop: 14,
        marginEnd: 30,
    },
    titleLevel: {
        fontFamily: 'Oxygen-Bold',
        fontSize: 12,
        color: color.DARK_GREEN
    },
    subtitleLevel: {
        fontFamily: 'Oxygen-Regular',
        fontSize: 12,
        color: color.GRAY
    },
    salixForestContainer: {
        backgroundColor: color.DARK_GREEN,
        borderBottomStartRadius: 21,
        borderBottomEndRadius: 21,
        padding: 25,
    },
    salixForestTitle: {
        color: 'white',
        fontFamily: 'Oxygen-Bold',
        fontSize: 25,
        textAlign: 'center',
    },
    salixForestSubtitle: {
        color: 'white',
        fontFamily: 'Oxygen-Regular',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 12,
    },
    sectionTitle:{
        color: color.DARK_GREEN,
        fontFamily: 'Oxygen-Bold',
        fontSize: 18,
        marginTop: 30,
        marginBottom: 20,
    },
});