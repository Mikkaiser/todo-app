import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
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
  NoTasksContainer,
  NoTasksText,
} from "./styles";
import GradientView from "../../components/GradientView";
import { RootParamList } from "../../routes/Stack";
import TasksList from "../../components/TasksList";
import { AntDesign, createMultiStyleIconSet } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootParamList, "TaskManagement">;

export default ({ route }: Props) => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [showCheckIcon, setShowCheckIcon] = useState<boolean>(false);

  const { username } = route.params;

  const handleAddTask = (task: string) => {
    setTasks((oldTasks) => [task, ...oldTasks]);
    setTask("");
  };

  const handleShowIcon = () => {
    setShowCheckIcon(true);
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
            onSubmitEditing={() => handleAddTask(task)}
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
            <NoTasksContainer>
              <NoTasksText>No tasks yet!</NoTasksText>
            </NoTasksContainer>
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
