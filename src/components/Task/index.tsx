import React, { useState } from "react";
import { IconCheck, TaskText } from "./styles";
import { TaskView } from "./styles";
import { RadioCheck } from "./styles";

interface Props {
  taskTitle: string;
}

export default ({ taskTitle }: Props) => {
  const [showCheckIcon, setShowCheckIcon] = useState<boolean>(false);

  const handleShowIcon = () => {
    setShowCheckIcon(!showCheckIcon);
  };
  return (
    <TaskView onPress={handleShowIcon}>
      {showCheckIcon ? (
        <IconCheck name="checkcircle" size={24} color="lightgreen" />
      ) : (
        <RadioCheck onPress={handleShowIcon}></RadioCheck>
      )}
      <TaskText>{taskTitle}</TaskText>
    </TaskView>
  );
};
