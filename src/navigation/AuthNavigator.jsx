import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import SignUp from "../screens/Signup";
import login from "../screens/login";
import HomeScreen from "../screens/HomeScreen";
import ForgetPassword from "../screens/ForgetPassword";
import otpscreen from "../screens/otpscreen";
import SetPassword from "../screens/SetPassword";
import HomeNavigator from "./HomeNavigator";

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
        <Stack.Screen name="Home" component={HomeNavigator} />
        <Stack.Screen name="ForgotPassword" component={ForgetPassword} />
        <Stack.Screen name="otpscreen" component={otpscreen} />
        <Stack.Screen name="SetPassword" component={SetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
