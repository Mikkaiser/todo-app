import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text } from "react-native";
import {
  WelcomeText,
  InsertTaskView,
  TextInput,
  InsertButton,
  ImageButton,
  TasksView,
  MyTasksTitle,
  ListView,
  Container,
} from "./styles";
import GradientView from "../../components/GradientView";
import { RootParamList } from "../../routes/Stack";
import TasksList from "../../components/TasksList";

type Props = NativeStackScreenProps<RootParamList, "TaskManagement">;

export default ({ route }: Props) => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const { username } = route.params;

  const handleAddTask = (task: string) => {
    setTasks((oldTasks) => [...oldTasks, task]);
    setTask("");
  };

  return (
    <GradientView>
      <Container>
        <WelcomeText>What's up, {username}!</WelcomeText>
        <InsertTaskView>
          <TextInput
            placeholder="Type some task..."
            value={task}
            onChangeText={setTask}
            maxLength={50}
          />
          <InsertButton onPress={() => handleAddTask(task)}>
            <ImageButton
              resizeMode="contain"
              source={require("../../../assets/noBgArrow.png")}
            />
          </InsertButton>
        </InsertTaskView>
        <TasksView>
          <MyTasksTitle>My Tasks</MyTasksTitle>
          {tasks.length == 0 ? (
            <Text>Mikkaiser</Text>
          ) : (
            <ListView>
              <TasksList tasks={tasks} />
            </ListView>
          )}
        </TasksView>
      </Container>
    </GradientView>
  );
};
