import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen"

// import { Container } from './styles';

export function BotaoLogin({ text, custom, onPress }) {
	return (
		<TouchableOpacity style={[styles.Container, custom]} onPress={onPress}>
			<Text style={styles.Text}>{text}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	Container: {
		height: hp("6.5%"),
		width: wp("65%"),
		backgroundColor: "#021F70",

		borderRadius: hp("2%"),
		alignItems: "center",
		justifyContent: "center",
	},
	Text: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: wp("5%"),
		textAlign: "center",
	},
})
