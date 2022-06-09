import React, { useEffect } from "react";
import { View, Text } from "react-native";
import {
  Button,
  ButtonText,
  Container,
  InitialText,
  InputText,
  IntroImage,
  TextContainer,
} from "./styles";
import { useFonts, Poppins_900Black } from "@expo-google-fonts/poppins";
import SplashScreen from "expo-splash-screen";

export default () => {
  const [loaded] = useFonts({
    PoppinsBold: require("../../../assets/fonts/Poppins/Poppins-Bold.ttf"),
    PoppinsLight: require("../../../assets/fonts/Poppins/Poppins-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Container>
      <IntroImage
        source={require("./../../../assets/introImage.png")}
        resizeMode="contain"
      />
      <TextContainer>
        <InitialText style={{ fontFamily: "PoppinsBold" }}>
          What's your name?
        </InitialText>
        <InputText
          style={{ fontFamily: "PoppinsLight" }}
          value=""
          placeholder="Type here..."
          maxLength={15}
        />
      </TextContainer>
      <Button>
        <ButtonText>Continue</ButtonText>
      </Button>
    </Container>
  );
};
