import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Home screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Outdoors")}>
                <Text>Outdoors</Text>
            </TouchableOpacity>
        </View>
    )
}