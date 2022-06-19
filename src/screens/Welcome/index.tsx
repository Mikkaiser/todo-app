import React, { useState } from "react";
import {
  AlertText,
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
  const [errorVisible, setErrorVisible] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();

  const handleNavigate = () => {
    if (!name) return setErrorVisible(true);

    navigation.navigate("TaskManagement", { username: name });
  };

  const handleNameEditing = (name: string) => {
    setName(name);
    setErrorVisible(false);
  };

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
            onChangeText={handleNameEditing}
            placeholder="Type here..."
            maxLength={15}
          />
          {errorVisible ? <AlertText>Name is required</AlertText> : null}
        </TextContainer>
        <Button onPress={handleNavigate}>
          <ButtonText>Continue</ButtonText>
        </Button>
      </Container>
    </GradientView>
  );
};
