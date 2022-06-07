import React from "react";
import { View, Text } from "react-native";
import { Button, InitialText, InputText, IntroImage } from "./styles";

export default () => {
  return (
    <View>
      <IntroImage source={require("./../../../assets/introImage.png")} />
      <View>
        <InitialText>What's your name?</InitialText>
        <InputText value="" placeholder="Type here..." />
      </View>
      <Button>
        <Text>Continue</Text>
      </Button>
    </View>
  );
};
