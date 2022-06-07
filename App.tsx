import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Container } from "./mainStyle";
import Welcome from "./src/screens/Welcome";

export default function App() {
  return (
    <Container>
      <Welcome />
    </Container>
  );
}
