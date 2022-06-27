import React, { useState } from "react";
import { ImageButton, InsertButton, TextInput } from "./styles";

type Props = {
  handleAddTask: (taskTitle: string) => void;
};

export default function TodoInput({ handleAddTask }: Props) {
  const [task, setTask] = useState<string>("");

  const addTask = () => {
    if (task) {
      handleAddTask(task);
      setTask("");
    }
  };

  return (
    <>
      <TextInput
        placeholder="Type a new Task"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={addTask}
      />
      <InsertButton>
        <ImageButton
          resizeMode="contain"
          source={require("../../../assets/noBgArrow.png")}
        />
      </InsertButton>
    </>
  );
}
