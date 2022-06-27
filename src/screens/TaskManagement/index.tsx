import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import {
  WelcomeText,
  InsertTaskView,
  TasksView,
  MyTasksTitle,
  ListView,
  Container,
  NoTasksContainer,
  NoTasksText,
} from "./styles";
import GradientView from "../../components/GradientView";
import { RootParamList } from "../../routes/Stack";
import { ITask } from "../../interfaces/task.interface";
import TodoInput from "../../components/TodoInput";
import TasksList from "../../components/TasksList";

type Props = NativeStackScreenProps<RootParamList, "TaskManagement">;

export default ({ route }: Props) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const { username } = route.params;

  const handleAddTask = async (taskTitle: string) => {
    const data: ITask = {
      id: Date.now(),
      name: taskTitle,
      done: false,
    };

    setTasks((oldTasks) => [data, ...oldTasks]);
  };

  const handleToggleTaskDone = (id: number) => {
    setTasks((oldTasks) =>
      oldTasks.map((task) => {
        task.id == id ? (task.done = !task.done) : null;
        return task;
      })
    );
  };

  return (
    <GradientView>
      <Container>
        <WelcomeText>What's up, {username}!</WelcomeText>
        <InsertTaskView>
          <TodoInput handleAddTask={handleAddTask} />
        </InsertTaskView>
        <TasksView>
          <MyTasksTitle>My Tasks</MyTasksTitle>
          {tasks.length == 0 ? (
            <NoTasksContainer>
              <NoTasksText>No tasks yet!</NoTasksText>
            </NoTasksContainer>
          ) : (
            <ListView>
              <TasksList toggleTaskDone={handleToggleTaskDone} tasks={tasks} />
            </ListView>
          )}
        </TasksView>
      </Container>
    </GradientView>
  );
};
