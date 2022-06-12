import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskList from "../../screens/TaskList";
import Welcome from "../../screens/Welcome";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Welcome} />
      <Stack.Screen name="TaskList" component={TaskList} />
    </Stack.Navigator>
  );
};
