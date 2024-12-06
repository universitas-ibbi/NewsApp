import { View, Image, Text, StyleSheet } from "react-native";

function CardBerita(props) {
	return (
		<View style={styles.artikelBerita}> 
				<Image
						resizeMode='cover'
						style={styles.gambarBerita}
						source={props.gambar} />
				<Text style={styles.judulBerita}>{props.judul}</Text>
				<Text style={styles.teksBerita}>{props.isi}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
    artikelBerita: { 
		marginBottom: 10,
		borderRadius: 10,
		overflow: "hidden",
		backgroundColor: "#fff",
		elevation: 3
	},
	gambarBerita: { 
		width: "100%",
		height: 150
	},
	judulBerita: { 
		padding: 10,
		fontSize: 16,
		fontWeight: "bold"
	},
	teksBerita: { 
		paddingHorizontal: 10,
		paddingBottom: 10,
		fontSize: 14,
		color: "#666"
	}
});

export default CardBerita;