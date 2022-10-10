import React, { useState } from "react"
import { View, Text, Button, StyleSheet, Animated } from "react-native"
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen"
import api from "../../services/api"
import { LinearGradient } from "expo-linear-gradient"
import { BotaoLogin } from "../../components"
import { SafeAreaView } from "react-native-safe-area-context"
import { ScrollView } from "react-native-gesture-handler"

// import { Container } from './styles';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

export default function Home() {
	const [data, setData] = useState([])
	const [press, setPress] = useState(false)

	const recebeUsuario = async () => {
		try {
			const { data } = await api.get("/")
			setData(data)
			setPress(true)
      console.log(data)
		} catch (error) {
			console.log(error, error.response)
		}
	}

	return (
		<ScrollView>
			<AnimatedLinearGradient colors={["#021F70", "#7159c1"]} style={styles.Modal} />
			<View style={styles.Container}>
				<Text style={styles.Titulo3}>Resultados obtidos:</Text>
				{press == false ? (
					<BotaoLogin text='Confira aqui' onPress={recebeUsuario} custom={styles.Button} />
				) : (
					<View style={styles.Linhas}>
						<View style={styles.Tabela}>
							<View style={styles.ColunaDir}>
								<Text style={styles.Titulo2}>Coliformes Termotolerantes</Text>
							</View>
							<View style={styles.ColunaEsq}>
								<Text style={styles.Titulo2}>{data.coliformes_termotolerantes}</Text>
							</View>
						</View>

						<View style={styles.Tabela}>
							<View style={styles.ColunaDir}>
								<Text style={styles.Titulo2}>Data</Text>
							</View>
							<View style={styles.ColunaEsq}>
								<Text style={styles.Titulo2}>{data.data}</Text>
							</View>
						</View>

						<View style={styles.Tabela}>
							<View style={styles.ColunaDir}>
								<Text style={styles.Titulo2}>DBO</Text>
							</View>
							<View style={styles.ColunaEsq}>
								<Text style={styles.Titulo2}>{data.dbo}</Text>
							</View>
						</View>

						<View style={styles.Tabela}>
							<View style={styles.ColunaDir}>
								<Text style={styles.Titulo2}>Fosfato</Text>
							</View>
							<View style={styles.ColunaEsq}>
								<Text style={styles.Titulo2}>{data.fosfato}</Text>
							</View>
						</View>

						<View style={styles.Tabela}>
							<View style={styles.ColunaDir}>
								<Text style={styles.Titulo2}>Nitrogenio</Text>
							</View>
							<View style={styles.ColunaEsq}>
								<Text style={styles.Titulo2}>{data.nitrogenio}</Text>
							</View>
						</View>

						<View style={styles.Tabela}>
							<View style={styles.ColunaDir}>
								<Text style={styles.Titulo2}>Oxigenio_dissolvido</Text>
							</View>
							<View style={styles.ColunaEsq}>
								<Text style={styles.Titulo2}>{data.oxigenio_dissolvido}</Text>
							</View>
						</View>

						<View style={styles.Tabela}>
							<View style={styles.ColunaDir}>
								<Text style={styles.Titulo2}>Ph</Text>
							</View>
							<View style={styles.ColunaEsq}>
								<Text style={styles.Titulo2}>{data.ph}</Text>
							</View>
						</View>

						<View style={styles.Tabela}>
							<View style={styles.ColunaDir}>
								<Text style={styles.Titulo2}>Residuo_total</Text>
							</View>
							<View style={styles.ColunaEsq}>
								<Text style={styles.Titulo2}>{data.residuo_total}</Text>
							</View>
						</View>

						<View style={styles.Tabela}>
							<View style={styles.ColunaDir}>
								<Text style={styles.Titulo2}>Temperatura</Text>
							</View>
							<View style={styles.ColunaEsq}>
								<Text style={styles.Titulo2}>{data.temperatura}</Text>
							</View>
						</View>

						<View style={styles.Tabela}>
							<View style={styles.ColunaDir}>
								<Text style={styles.Titulo2}>Turbidez</Text>
							</View>
							<View style={styles.ColunaEsq}>
								<Text style={styles.Titulo2}>{data.turbidez}</Text>
							</View>
						</View>
					</View>
				)}
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	Container: {
		alignItems: "center",
	},
	Button: {
		marginTop: hp("10%"),
	},
	Modal: {
		alignItems: "center",
		height: hp("10%"),
		width: wp("100%"),
		borderBottomLeftRadius: hp("80%"),
		borderBottomRightRadius: hp("80%"),
	},
	Titulo2: {
		color: "#000",
		fontSize: wp("4%"),
		justifyContent: "center",

		padding: wp("5%"),
		textAlign: "center",
	},
	Titulo3: {
		marginTop: hp("5%"),
		fontWeight: "bold",
		fontSize: wp("8%"),
		textAlign: "center",
	},
	Tabela: {
		flexDirection: "row",
	},
	Linhas: {
		marginTop: hp("10%"),
	},
	ColunaDir: {
		borderRadius: hp("1%"),
		marginLeft: hp("5%"),
		width: wp("40%"),
		borderTopWidth: 1,
	},
	ColunaEsq: {
		borderRadius: hp("1%"),
		marginRight: hp("5%"),
		width: wp("40%"),
		borderTopWidth: 1,
	},
})
