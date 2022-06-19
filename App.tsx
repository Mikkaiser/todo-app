import * as React from "react";
import Routes from "./src/routes";
import {
  useFonts,
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Comfortaa_700Bold } from "@expo-google-fonts/comfortaa";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Comfortaa_700Bold,
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return null;

  SplashScreen.hideAsync();

  return (
    <>
      <StatusBar style="light" />
      <Routes />
    </>
  );
}
