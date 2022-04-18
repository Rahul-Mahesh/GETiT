import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import User_login from "../screens/User_login";
import HomeScreen from "../screens/HomeScreen";
import User_Homescreen from "../screens/User_Homescreen";


const Stack = createStackNavigator();

const UserLoginNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="userlog"
      component={User_login}
      options={{ headerShown: false }}
    />
  <Stack.Screen name="userhome" component={User_Homescreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default UserLoginNavigator;
