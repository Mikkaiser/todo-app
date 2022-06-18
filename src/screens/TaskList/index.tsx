import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  WelcomeText,
  InsertTaskView,
  TextInput,
  InsertButton,
  ArrowText,
  TasksView,
  MyTasksTitle,
  ListView,
} from "./styles";
import GradientView from "../../components/GradientView";
import { RootParamList } from "../../routes/Stack";

type Props = NativeStackScreenProps<RootParamList, "TaskList">;

export default ({ route }: Props) => {
  const { username } = route.params;

  return (
    <GradientView>
      <WelcomeText>What's up, {username}!</WelcomeText>
      <InsertTaskView>
        <TextInput />
        <InsertButton>
          <ArrowText source={require("../../../assets/noBgArrow.png")} />
        </InsertButton>
      </InsertTaskView>
      <TasksView>
        <MyTasksTitle>My Tasks</MyTasksTitle>
        <ListView></ListView>
      </TasksView>
    </GradientView>
  );
};
