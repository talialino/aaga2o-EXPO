import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Log from "./Logado"

import Deslog from "./Deslogado"

const Stack = createStackNavigator()

export default function Routes() {
	return (
		// <Stack.Navigator headerMode="none">
		//   {signed ? (
		//     <Stack.Screen name="comLogin" component={log} />
		//   ) : (
		//     <Stack.Screen name="semLogin" component={deslog} />
		//   )}
		// </Stack.Navigator>
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='SemLogin' component={Deslog} />
			<Stack.Screen name='ComLogin' component={Log} />
		</Stack.Navigator>
	)
}
