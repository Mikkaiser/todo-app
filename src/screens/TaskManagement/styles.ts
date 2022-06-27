import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  margin: ${RFValue(50)}px 0;
  flex: 1;
`;
export const NoTasksContainer = styled.View`
  height: ${RFValue(450)}px;
  justify-content: center;
  align-items: center;
`;
export const NoTasksText = styled.Text`
  font-size: ${RFValue(20)}px;
  color: white;
  font-family: "Poppins_700Bold";
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
