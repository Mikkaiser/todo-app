import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  height: 80%;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const IntroImage = styled.Image`
  width: 170px;
  height: 170px;
`;

export const AlertText = styled.Text`
  color: #ff7396;
  margin-top: 10px;
  font-family: "Poppins_400Regular";
`;

export const TextContainer = styled.View`
  min-height: 100px;
  align-items: center;
`;

export const InitialText = styled.Text`
  font-size: 25px;
  color: white;
  font-family: "Poppins_700Bold";
  margin-bottom: 15px;
`;

export const InputText = styled.TextInput`
  background-color: white;
  color: grey;
  border-radius: 20px;
  padding: 7px 15px;
  text-align: center;
  font-size: 15px;
  min-width: 70%;
  font-family: "Poppins_300Light";
`;

export const Button = styled.TouchableOpacity`
  background-color: #1395eb;
  width: 60%;
  padding: 8px;
  border-radius: 6px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  text-align: center;
  font-family: "Poppins_700Bold";
`;
