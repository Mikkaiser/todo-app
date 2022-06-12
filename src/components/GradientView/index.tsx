import { LinearGradientProps } from "expo-linear-gradient";
import React from "react";
import { Gradient } from "./styles";

interface Props {
  children: React.ReactNode;
}

export default function GradientView({ children }: Props) {
  return (
    <Gradient
      colors={["#002E8C", "#2D668F"]}
      start={{ x: 0, y: 0.2 }}
      end={{ x: 0, y: 2 }}
    >
      {children}
    </Gradient>
  );
}
