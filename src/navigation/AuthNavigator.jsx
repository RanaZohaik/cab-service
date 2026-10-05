import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import SignUp from "../screens/Signup";
import login from "../screens/login";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#FFFFFF" },
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="login" component={login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
