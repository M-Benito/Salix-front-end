import { StyleSheet } from 'react-native';
import * as color from '../../constants/colors'
import PageHeader from '../Components/Common/PageHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import TipItem from '../Components/Tips/TipItem';

export default function Tips() {

    const tips = require('../../assets/tips.json')

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={tips}
                renderItem={({ item }) => (<TipItem title={item.title} body={item.body} points={item.points} isCompleted={Boolean(item.isCompleted)} />)}
                ListHeaderComponent={() => <PageHeader title={"Tips"} />}
                style={{ paddingStart: 20, paddingEnd: 20 }}
                contentContainerStyle={{ paddingBottom: 110 }} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.BACKGROUND_COLOR,
    },
    sectionTitle: {
        color: color.DARK_GREEN,
        fontFamily: 'Oxygen-Bold',
        fontSize: 18,
        marginTop: 30,
    },
});