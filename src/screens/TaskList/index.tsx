import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { RootParamList } from "../../routes/Stack";

type Props = NativeStackScreenProps<RootParamList, "TaskList">;

export default ({ route }: Props) => {
  const { username } = route.params;

  return (
    <View>
      <Text>{username}</Text>
    </View>
  );
};
