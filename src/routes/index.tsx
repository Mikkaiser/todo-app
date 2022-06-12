import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Stack from "./Stack";

export default () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};
