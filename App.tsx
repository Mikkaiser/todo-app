import { StatusBar } from "expo-status-bar";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./src/screens/Welcome";

export default function App() {
  return (
      <LinearGradient
        // Button Linear Gradient
        style={styles.container}
        colors={['#002E8C', '#2D668F']}
        start={{ x: 0, y: 0.2}}
        end={{ x: 0, y: 2}}
      >
        <Welcome/>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%'
  }
})
