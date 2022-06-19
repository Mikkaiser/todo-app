import React from "react";
import { TaskText } from "./styles";
import { TaskView } from "./styles";
import { RadioCheck } from "./styles";

interface Props {
  taskTitle: string;
}

export default ({ taskTitle }: Props) => {
  return (
    <TaskView>
      <RadioCheck></RadioCheck>
      <TaskText>{taskTitle}</TaskText>
    </TaskView>
  );
};
