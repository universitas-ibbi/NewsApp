import {
View,
Text,
ScrollView,
Image,
StyleSheet
} from 'react-native'


export default function App() {

	const berita = [
		{
			id: 1,
			judul: "Judul Berita 1",
			isi: "Berita 1",
			gambar: require("./images/berita.jpg")
		},
		{
			id: 2,
			judul: "Judul Berita 2",
			isi: "berita 2",
			gambar: require("./images/berita.jpg")
		},
		{
			id: 3,
			judul: "Judul Berita 3",
			isi: "berita 3",
			gambar: require("./images/berita.jpg")
		},
		{
			id: 4,
			judul: "Medan Banjir",
			isi: "Hujan terus, medan jadi banjir 1 meter",
			gambar: require("./images/berita.jpg")
		}
	];

	
return (
	<ScrollView>
		<Text style={styles.judulAplikasi}>NewsApp</Text>
		<ScrollView horizontal
			style={styles.containerGambar}
		>
			<Image source={
					require("./images/berita.jpg")
			} style={styles.gambarHightlight} />
			<Image source={
				require("./images/berita.jpg")
			} style={styles.gambarHightlight} />
			<Image source={
				require("./images/berita.jpg")
			} style={styles.gambarHightlight} />
		</ScrollView>

		<View style={styles.navigasi}>
			<Text style={styles.tombol}>Previous</Text>
			<Text style={styles.tombol}>Next</Text>
		</View>

		{/* View container berita */}
		<View style={styles.containerBerita}>
			{/* View Berita */}
			{
					berita.map((item, index) => {
						return (
							<View style={styles.artikelBerita}> 
								<Image
										resizeMode='cover'
										style={styles.gambarBerita}
										source={item.gambar} />
								<Text style={styles.judulBerita}>{item.judul}</Text>
								<Text
										style={styles.teksBerita}
								>{item.isi}</Text>
						</View>
						)
					})
			}
		</View>
	</ScrollView>
)
}


const styles = StyleSheet.create({
	judulAplikasi: { 
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 10,
		textAlign: "center"
	},
	gambarHightlight:{
		width: 300,
		height: 250,
		marginRight: 10,
		borderRadius: 10
	},
	containerGambar: { 
		marginBottom: 10,
		marginLeft: 10,
		height: 250
	},
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
	containerBerita: { 
		paddingHorizontal: 10
	},
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