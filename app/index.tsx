import {
View,
Text,
ScrollView,
Image,
StyleSheet
} from 'react-native'

import { Link } from 'expo-router';

import MenuNavigasi from "./components/MenuNavigasi";
import CardBerita from "./components/CardBerita";

import berita from "./data.js";

export default function App() {

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
							<Link href={{ 
								pathname: "/detail/[id]",
								params: {
									id: item.id
								}
							 }}>
								<CardBerita
									gambar={item.gambar}
									judul={item.judul}
									isi={item.isi}
								/>
							</Link>
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


