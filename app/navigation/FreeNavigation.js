import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import FreeScreen from "../screens/FreeScreen";
import CorpRegistration from "../screens/CorpRegistration";
import Corp_login from "../screens/Corp_login";
import FreeRegistration from "../screens/FreeRegistration";
import Free_login from "../screens/Free_login";

const Stack = createStackNavigator();

const UserNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Free"
      component={FreeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Freelog" component={Free_login}/>
    <Stack.Screen name="Freereg" component={FreeRegistration} />
    <Stack.Screen name="Corplog" component={Corp_login} />
    <Stack.Screen name="Corpreg" component={CorpRegistration} />    
  </Stack.Navigator>
);

export default UserNavigator;