import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const TaskView = styled.TouchableOpacity`
  background-color: ${({ assigned }) => (assigned ? "#1da965" : "#037ee9")};
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
  background-color: ${({ assigned }) => (assigned ? "#1da965" : "#FFF")};
  margin-right: 10px;
  justify-content: center;
`;
export const IconCheck = styled(AntDesign)`
  font-size: ${RFValue(16)}px;
  text-align: center;
`;

export const TaskText = styled.Text`
  color: white;
  font-size: ${RFValue(13)}px;
  font-family: "Comfortaa_700Bold";
  bottom: ${RFValue(2)}px;
  max-width: ${RFValue(260)}px;
`;
