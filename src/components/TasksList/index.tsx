import React from "react";
import Task from "../Task";
import { List } from "./style";

type Props = {
  tasks: string[];
};

export default ({ tasks }: Props) => {
  return (
    <List
      data={tasks}
      keyExtractor={(item) => `${(item as string) + new Date()}`}
      renderItem={({ item }) => {
        return <Task taskTitle={item as string} />;
      }}
    />
  );
};
