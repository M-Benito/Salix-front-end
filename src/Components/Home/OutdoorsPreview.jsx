import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OutdoorsHomePreview() {

    return (
        <View style={styles.container}>
            <Text>Outdoors Home Preview chunck</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9AEBA3',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 21,
        width: '100%',
        marginTop:22,
    },
});
