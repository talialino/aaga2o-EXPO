import React, { useEffect, useState } from "react"
import { View, Text, Button, StyleSheet, Animated } from "react-native"
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen"
import api from "../../services/api"
import { LinearGradient } from "expo-linear-gradient"
import { BotaoLogin } from "../../components"
import { ScrollView } from "react-native-gesture-handler"
import RNSpeedometer from "react-native-speedometer"

// import { Container } from './styles';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

export default function Home(props) {
	const [data, setData] = useState(props.route.params)

	const atualizaDados = async () => {
		try {
			const { data } = await api.get("/")
			setData(data)
			console.log("Atualizei os dados")
		} catch (error) {
			console.log(error, error.response)
		} //10muitoruim,20ruim,40medio,70bom,90excelente --- usar essas medidas para if de cada mensagem que vai aparecer
	}

	const label = [
		{
			name: "Muito ruim.",
			labelColor: "#ff2900",
			activeBarColor: "#ff2900",
		},
		{
			name: "Ruim.",
			labelColor: "#f4ab44",
			activeBarColor: "#f4ab44",
		},
		{
			name: "Médio.",
			labelColor: "#f2cf1f",
			activeBarColor: "#f2cf1f",
		},
		{
			name: "Bom.",
			labelColor: "#14eb6e",
			activeBarColor: "#14eb6e",
		},
		{
			name: "Excelente.",
			labelColor: "#00ff6b",
			activeBarColor: "#00ff6b",
		},
	]

	return (
		<ScrollView>
			<View style={styles.Modal} />
			<View style={styles.Container}>
				<Text style={styles.Titulo}>Resultados obtidos:</Text>
			<RNSpeedometer wrapperStyle={styles.Medidor} value={data} size={300} labels={label} />
				{data <= 19 ? (
					<Text style={styles.SubTitulo}>
						A qualidade da sua água não está nada boa :/ Você precisa de uma visita técnica com
						urgência!!
					</Text>
				) : data <= 39 ? (
					<Text style={styles.SubTitulo}>
						Sua água está quase no limite. Isso é um grande perigo!
					</Text>
				) : data <= 69 ? (
					<Text style={styles.SubTitulo}>
						Não tem muito do que se preocupar, mas não deixe de estar atento a sua água.
					</Text>
				) : data <= 89 ? (
					<Text style={styles.SubTitulo}>
						Sua água está em ótimas condições, mas nada tanto assim que não possa melhorar!
					</Text>
				) : (
					<Text style={styles.SubTitulo}>
						Parabéns!! Sua água está pronta para consumo e não há do que se preocupar =D
					</Text>
				)}
				<BotaoLogin text='Atualizar' onPress={atualizaDados} custom={styles.Button} />
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	Container: {
		alignItems: "center",
	},
	Button: {
		marginTop: hp("5%"),
	},
	Modal: {
		backgroundColor: "#021F70",
		alignItems: "center",
		height: hp("10%"),
		width: wp("100%"),
		borderBottomLeftRadius: hp("80%"),
		borderBottomRightRadius: hp("80%"),
	},
	Titulo: {
		marginTop: hp("7%"),
		fontWeight: "bold",
		fontSize: wp("8%"),
		textAlign: "center",
		color: "#021F70",
	},
	SubTitulo: {
		marginTop: hp("8%"),
		fontSize: wp("4.5%"),
		justifyContent: "center",
		color: "#A4A4A4",

		padding: wp("5%"),
		textAlign: "center",
	},
	Medidor: {
		marginTop: hp("8%"),
	},
})

// 	<View style={styles.Tabela}>
// 	<View style={styles.ColunaDir}>
// 		<Text style={styles.Titulo2}>Turbidez</Text>
// 	</View>
// 	<View style={styles.ColunaEsq}>
// 		<Text style={styles.Titulo2}>{data.turbidez}</Text>
// 	</View>
// </View>
