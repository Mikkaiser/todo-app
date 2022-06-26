import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const TaskView = styled.TouchableOpacity`
  background-color: #037ee9;
  border-radius: 10px;
  padding: 15px;
  flex-direction: row;
  align-items: center;
  margin: 7px 0;
`;

export const RadioCheck = styled.TouchableOpacity`
  width: 19px;
  height: 19px;
  border-radius: 20px;
  background-color: white;
  margin-right: 10px;
`;

export const IconCheck = styled(AntDesign)`
  border-radius: 20px;
  margin-right: 10px;
  font-size: ${RFValue(19)}px;
  background-color: white;
`;

export const TaskText = styled.Text`
  color: white;
  font-size: ${RFValue(13)}px;
  font-family: "Comfortaa_700Bold";
  bottom: ${RFValue(2)}px;
  max-width: ${RFValue(260)}px;
`;
