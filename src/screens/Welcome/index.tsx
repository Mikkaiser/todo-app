import React, { useState } from "react";
import {
  Button,
  ButtonText,
  Container,
  InitialText,
  InputText,
  IntroImage,
  TextContainer,
} from "./styles";
import { useFonts } from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";
import GradientView from "../../components/GradientView";

export default () => {
  const [name, setName] = useState("");
  const navigation = useNavigation();

  const [loaded] = useFonts({
    PoppinsBold: require("../../../assets/fonts/Poppins/Poppins-Bold.ttf"),
    PoppinsLight: require("../../../assets/fonts/Poppins/Poppins-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <GradientView>
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
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Type here..."
            maxLength={15}
          />
        </TextContainer>
        <Button>
          <ButtonText style={{ fontFamily: "PoppinsBold" }}>
            Continue
          </ButtonText>
        </Button>
      </Container>
    </GradientView>
  );
};
