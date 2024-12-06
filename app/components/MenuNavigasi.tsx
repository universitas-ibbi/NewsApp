import { View, Text, StyleSheet } from 'react-native';

function MenuNavigasi() {
	return (
		<View style={styles.navigasi}>
			<Text style={styles.tombol}>Previous</Text>
			<Text style={styles.tombol}>Next</Text>
		</View>
	)
}

const styles = StyleSheet.create({
    navigasi:{ 
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 10
	},
	tombol: { 
		backgroundColor: "blue",
		padding: 10,
		width: 100,
		color: "white",
		borderRadius: 5,
		textAlign: "center"
	},
})


export default MenuNavigasi;