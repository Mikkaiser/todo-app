import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskManagement from "../../screens/TaskManagement";
import Welcome from "../../screens/Welcome";

export type RootParamList = {
  Home: undefined;
  TaskManagement: { username: string };
};

const Stack = createNativeStackNavigator<RootParamList>();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Welcome} />
      <Stack.Screen name="TaskManagement" component={TaskManagement} />
    </Stack.Navigator>
  );
};
