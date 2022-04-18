import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Authnavigator from "./app/navigation/AuthNavigator";
import User_Homescreen from "./app/screens/User_Homescreen";
import User_buy from "./app/screens/User_buy";
import trialpage from "./app/screens/trialpage";




export default function App() {
  return (
        <trialpage/>
  );
}

/*
export default function App() {
  return (
    <User_Homescreen/>
  );
}

<NavigationContainer>
<Authnavigator />
</NavigationContainer>
*/