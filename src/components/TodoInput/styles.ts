import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const TextInput = styled.TextInput`
  background-color: white;
  flex: 7;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  color: #8a8a8a;
  font-family: "Poppins_300Light";
  padding: 0 10px;
  line-height: ${RFValue(100)}px;
`;

export const InsertButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #037ee9;
  align-items: center;
  justify-content: center;
  padding: 2px 5px;
`;

export const ImageButton = styled.Image`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
`;
