import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Home from "../pages/Home"

const Stack = createStackNavigator()

export default function Routes() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			{/* <Stack.Screen name='Home' component={Home} /> */}
		</Stack.Navigator>
	)
}


// import * as React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';


// const Drawer = createDrawerNavigator();

// export default function routes() {
//   return (
//     <Drawer.Navigator initialRouteName="Inicio">
//       <Drawer.Screen name="Inicio" component={Home} />
//     </Drawer.Navigator>
//   );
// }