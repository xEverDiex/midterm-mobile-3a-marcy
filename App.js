import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import HomeScreenTab from "./src/screens/HomeScreenTab";
import Settings from "./src/screens/Settings";
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreenTab"
          component={HomeScreenTab}
          options={{ headerTitle: "Nerve Gear Pre-Order", headerBackTitleVisible: false }}
        />
        <Stack.Screen name="Settings" 
        component={Settings} 
        options={{ headerTitle: "Account", headerBackTitleVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
