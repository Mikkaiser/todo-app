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
      keyExtractor={() => Math.random()}
      renderItem={({ item }) => {
        return <Task taskTitle={item as string} />;
      }}
    />
  );
};
