import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const WelcomeText = styled.Text`
  font-size: ${RFValue(23)}px;
  font-family: "Poppins_700Bold";
  color: white;
`;
export const InsertTaskView = styled.View`
  flex-direction: row;
  width: 100%;
  border: 1px solid red;
`;
export const TextInput = styled.TextInput`
  background-color: white;
  flex: 7;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  padding: 6px 15px;
  color: #8a8a8a;
`;
export const InsertButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #037ee9;
  align-items: center;
  justify-content: center;
`;
export const ImageButton = styled.Image`
  width: ${RFValue(40)}px;
`;
export const TasksView = styled.View``;
export const MyTasksTitle = styled.Text``;
export const ListView = styled.View``;
