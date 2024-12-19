import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import berita from '../data.js';

export default function Detail() {
    const { id } = useLocalSearchParams();

    const detail = berita.find(function(item){
        return item.id === parseInt(id)
    });

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={detail.gambar} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#f5f5f5",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        color: "#333"
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 10,
        borderRadius: 10,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: "#666"
    }
});