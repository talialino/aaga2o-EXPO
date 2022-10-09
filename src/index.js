import React, { useState } from "react"
import { StyleSheet, Text, View, Image, Dimensions } from "react-native"
import api from "./services/api"
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen"
import { BotaoLogin, FundoDegrade } from "./components"
import Logo from "./assets/aaga2o.png"

const Width = Dimensions.get("window").width
const Height = Dimensions.get("window").height

export default function index() {
	const [data, setData] = useState([])

	const recebeUsuario = async () => {
		try {
			console.log("oi")
			const { data } = await api.get("/")
			console.log(data)
		} catch (error) {
			console.log(error, error.response)
		}
		// setData(data)
	}

	return (
		<>
			<FundoDegrade>
				<View style={styles.Container}>
					<Image source={Logo} style={styles.Logo}></Image>
				</View>
				<View style={styles.Modal}>
					<Text style={styles.Titulo3}>Bem vindos</Text>
					<Text style={styles.Titulo2}>
						Tenha acesso ilimitado a medição de IOF e verifique a portabilidade da água local.
					</Text>
					<BotaoLogin text='Acesse aqui' custom={styles.Button} onPress={recebeUsuario} />
				</View>
			</FundoDegrade>
		</>
	)
}

const styles = StyleSheet.create({
	Container: {
		alignItems: "center",
	},
	Button: {
		marginTop: hp("3%"),
	},
	Modal: {
		backgroundColor: "#fff",
		alignItems: "center",
		position: "absolute",
		marginTop: hp("40%"),

		height: Height,
		width: Width,
		borderRadius: hp("3%"),
	},
	Logo: {
		marginTop: hp("20%"),
	},
	Titulo2: {
		color: "#000",
		fontSize: wp("5%"),
		justifyContent: "center",

		padding: wp("5%"),
		marginHorizontal: hp("5%"),
		marginTop: hp("3%"),
		textAlign: "center",
	},
	Titulo3: {
		marginTop: hp("5%"),
		fontWeight: "bold",
		fontSize: wp("8%"),
		textAlign: "center",
	},
})

{
	/* <View style={styles.container}>
      <StatusBar style="auto" />
        <Text>é tertaaaaa é tretaaaaaa</Text>
 /* //   <Button */
}
//     onPress={recebeUsuario}
//     title="Learn More"
//     color="#841584"
//     accessibilityLabel="Learn more about this purple button"
//   />

//   <View>
//     {/* {
//       data.map((dado) => ( */
//         <View>
//           <Text>{data.login}</Text>
//         </View>
//       {/* ))
//     } */}
//   </View>
// </View> */}
