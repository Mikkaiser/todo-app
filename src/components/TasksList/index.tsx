import React from "react";
import { ITask } from "../../interfaces/task.interface";
import Task from "../Task";
import { List } from "./style";

type Props = {
  tasks: ITask[];
  toggleTaskDone: (id: number) => void;
};

export default ({ tasks, toggleTaskDone }: Props) => {
  return (
    <List
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => {
        return (
          <Task toggleTaskDone={toggleTaskDone} taskItem={item as ITask} />
        );
      }}
    />
  );
};
