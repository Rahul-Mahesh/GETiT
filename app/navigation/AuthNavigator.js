import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import UserScreen from "../screens/UserScreen";
import FreeScreen from "../screens/FreeScreen";
import UserNavigator from "./UserNavigator";

const Stack = createStackNavigator();

const AuthNavigator = () => (
<Stack.Navigator>
<Stack.Screen
  name="Welcome"
  component={WelcomeScreen}
  options={{ headerShown: false }}
/>
<Stack.Screen name="User" component={UserNavigator} options={{ headerShown: false }} />
<Stack.Screen name="Free" component={FreeScreen}  options={{ headerShown: false }}/>
</Stack.Navigator>
);

export default AuthNavigator;
