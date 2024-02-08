import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as color from '../../constants/colors'
import PageHeader from '../Components/Common/PageHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import TipItem from '../Components/Tips/TipItem';
//import * as tips from '../../assets/tips.json'

export default function Tips() {
    const tips = [
        { "id": "1", "title": "Ventilar la casa", "body": "Hemos detectado que hace al menos 24 horas que no ventilas tu hogar", "points": 20, "isCompleted": "true" },
        { "id": "2", "title": "Ventilar la casa", "body": "Hemos detectado que hace al menos 24 horas que no ventilas tu hogar", "points": 20, "isCompleted": "true" },
        { "id": "3", "title": "Ventilar la casa", "body": "Hemos detectado que hace al menos 24 horas que no ventilas tu hogar", "points": 20, "isCompleted": "true" },
        { "id": "4", "title": "Ventilar la casa", "body": "Hemos detectado que hace al menos 24 horas que no ventilas tu hogar", "points": 20, "isCompleted": "true" },
        { "id": "5", "title": "Ventilar la casa", "body": "Hemos detectado que hace al menos 24 horas que no ventilas tu hogar", "points": 20, "isCompleted": "true" },
        { "id": "6", "title": "Ventilar la casa", "body": "Hemos detectado que hace al menos 24 horas que no ventilas tu hogar", "points": 20, "isCompleted": "true" }
    ]

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.svContainer}>
                <PageHeader title={"Tips"} />
                <FlatList data={tips}
                    renderItem={({ item }) => (<TipItem title={item.title} body={item.body} points={item.points} isCompleted={item.isCompleted} />)} />
            </View>
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