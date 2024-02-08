import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import * as color from '../../constants/colors'
import PageHeader from '../Components/Common/PageHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressBar from 'react-native-progress/Bar';
import DailyPointsItem from '../Components/Points/DailyPointsItem';
import WeeklyPointsItem from '../Components/Points/WeeklyPointsItem';
import { FlatList } from 'react-native-gesture-handler';
import TipItem from '../Components/Tips/TipItem';

export default function Tips() {
    return (
        <SafeAreaView  style={styles.container}>
             <ScrollView>
                <View style={styles.svContainer}>
                    <PageHeader title={"Tips"} />
                    
                    <TipItem title={"Ventilar la casa"} body={"Hemos detectado que hace al menos 24h que no ventilas tu hogar."} points={20} isCompleted={false}/>
                    <TipItem title={"Ventilar la casa"} body={"Hemos detectado que hace al menos 24h que no ventilas tu hogar."} points={20} isCompleted={false}/>
                    
                    <Text style={styles.sectionTitle}>Completados</Text>
                    
                    <TipItem title={"Ventilar la casa"} body={"Hemos detectado que hace al menos 24h que no ventilas tu hogar."} points={20} isCompleted={true}/>
                    <TipItem title={"Ventilar la casa"} body={"Hemos detectado que hace al menos 24h que no ventilas tu hogar."} points={20} isCompleted={true}/>

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
    sectionTitle: {
        color: color.DARK_GREEN,
        fontFamily: 'Oxygen-Bold',
        fontSize: 18,
        marginTop: 30,
    },
});