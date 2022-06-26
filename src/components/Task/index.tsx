import React, { useState } from "react";
import { IconCheck, TaskText, TaskView, RadioCheck } from "./styles";

interface Props {
  taskTitle: string;
}

export default ({ taskTitle }: Props) => {
  const [showCheckIcon, setShowCheckIcon] = useState<boolean>(false);

  const handleShowIcon = () => {
    setShowCheckIcon(!showCheckIcon);
  };
  return (
    <TaskView assigned={showCheckIcon} onPress={handleShowIcon}>
      <RadioCheck assigned={showCheckIcon} onPress={handleShowIcon}>
        {showCheckIcon ? <IconCheck name="check" color="#FFF" /> : null}
      </RadioCheck>

      <TaskText>{taskTitle}</TaskText>
    </TaskView>
  );
};
