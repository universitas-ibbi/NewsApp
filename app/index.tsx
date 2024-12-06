import {
View,
Text,
ScrollView,
Image,
StyleSheet
} from 'react-native'

import MenuNavigasi from "./components/MenuNavigasi";
import CardBerita from "./components/CardBerita";

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
			<GambarBerita gambar={require("./images/berita.jpg")} />
			<GambarBerita gambar={require("./images/berita.jpg")} />
			<GambarBerita gambar={require("./images/berita.jpg")} />
			<GambarBerita gambar={require("./images/berita.jpg")} />
			<GambarBerita gambar={require("./images/berita.jpg")} />
		</ScrollView>

		<MenuNavigasi />

		{/* View container berita */}
		<View style={styles.containerBerita}>
			{/* View Berita */}
			{
					berita.map((item, index) => {
						return (
							<CardBerita
								gambar={item.gambar}
								judul={item.judul}
								isi={item.isi}
							/>
						)
					})
			}
		</View>
		<MenuNavigasi />
	</ScrollView>
)
}

function GambarBerita(props) {
	return (
		<Image source={props.gambar}
			style={styles.gambarHightlight} />
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
	containerBerita: { 
		paddingHorizontal: 10
	},
});


