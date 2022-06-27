import React, { useState } from "react";
import { ITask } from "../../interfaces/task.interface";
import { IconCheck, TaskText, TaskView, RadioCheck } from "./styles";

interface Props {
  taskItem: ITask;
  toggleTaskDone: (id: number) => void;
}

export default ({ taskItem, toggleTaskDone }: Props) => {
  return (
    <TaskView
      assigned={taskItem.done}
      onPress={() => toggleTaskDone(taskItem.id)}
    >
      <RadioCheck
        assigned={taskItem.done}
        onPress={() => toggleTaskDone(taskItem.id)}
      >
        {taskItem.done ? <IconCheck name="check" color="#FFF" /> : null}
      </RadioCheck>

      <TaskText>{taskItem.name}</TaskText>
    </TaskView>
  );
};
