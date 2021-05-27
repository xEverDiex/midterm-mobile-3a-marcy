import React from "react";
import {
  createBottomTab,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();

import Home from "./tabs/Home";
import Feed from "./tabs/Feed";
export default function HomeScreenTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        }}
      />
 {/*      <Tab.Screen name="Feed" component={Feed}  options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="feed" size={size} color={color} />
          ),
        }} /> */}
    </Tab.Navigator>
  );
}
