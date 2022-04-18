import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserScreen from "../screens/UserScreen";
import UserLoginNavigator from "../navigation/UserLoginNavigator";
import UserRegistration from "../screens/UserRegistration";

const Stack = createStackNavigator();

const UserNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="User"
      component={UserScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="userlog" component={UserLoginNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="userreg" component={UserRegistration} />
  </Stack.Navigator>
);

export default UserNavigator;