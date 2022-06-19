import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  margin: ${RFValue(50)}px 0;
  flex: 1;
`;
export const WelcomeText = styled.Text`
  font-size: ${RFValue(23)}px;
  font-family: "Poppins_700Bold";
  color: white;
  margin-bottom: 15px;
`;
export const InsertTaskView = styled.View`
  flex-direction: row;
  width: 100%;
`;
export const TextInput = styled.TextInput`
  background-color: white;
  flex: 7;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  color: #8a8a8a;
  font-family: "Poppins_300Light";
  padding: 0 10px;
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
export const TasksView = styled.View`
  margin-top: ${RFValue(45)}px;
`;
export const MyTasksTitle = styled.Text`
  color: #cfcfcf;
  font-size: ${RFValue(14)}px;
  font-family: "Poppins_700Bold";
`;
export const ListView = styled.View`
  margin-top: ${RFValue(10)}px;
`;
