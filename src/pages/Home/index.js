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
			name: "Muito ruim. A qualidade da sua água não está nada boa :/ Você precisa de uma visita técnica com urgência!!",
			labelColor: "#ff2900",
			activeBarColor: "#ff2900",
		},
		{
			name: "Ruim. Sua água está quase no limite. Isso é um grande perigo!",
			labelColor: "#f4ab44",
			activeBarColor: "#f4ab44",
		},
		{
			name: "Médio. Não tem muito do que se preocupar, mas não deixe de estar atento a sua água.",
			labelColor: "#f2cf1f",
			activeBarColor: "#f2cf1f",
		},
		{
			name: "Bom. Sua água está em ótimas condições, mas nada tanto assim que não possa melhorar ;)",
			labelColor: "#14eb6e",
			activeBarColor: "#14eb6e",
		},
		{
			name: "Excelente. Parabéns!! Sua água está pronta para consumo e não há do que se preocupar =D",
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
		marginTop: hp("15%"),
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
	},
	Medidor: {
		marginTop: hp("10%"),
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
