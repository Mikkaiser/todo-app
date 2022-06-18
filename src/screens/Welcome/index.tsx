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
import { useNavigation } from "@react-navigation/native";
import GradientView from "../../components/GradientView";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "../../routes/Stack";

export default () => {
  const [name, setName] = useState("");
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();

  return (
    <GradientView>
      <Container>
        <IntroImage
          source={require("./../../../assets/introImage.png")}
          resizeMode="contain"
        />
        <TextContainer>
          <InitialText>What's your name?</InitialText>
          <InputText
            value={name}
            onChangeText={setName}
            placeholder="Type here..."
            maxLength={15}
          />
        </TextContainer>
        <Button
          onPress={() => navigation.navigate("TaskList", { username: name })}
        >
          <ButtonText>Continue</ButtonText>
        </Button>
      </Container>
    </GradientView>
  );
};
