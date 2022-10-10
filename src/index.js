import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./Routes";

export default function index() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}