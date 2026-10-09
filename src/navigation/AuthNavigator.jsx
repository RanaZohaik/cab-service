import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import SignUp from "../screens/Signup";
import Login from "../screens/login";
import ForgetPassword from "../screens/ForgetPassword";
import Otpscreen from "../screens/otpscreen";
import SetPassword from "../screens/SetPassword";

import MainDrawerNavigator from "./MainDrawerNavigator";

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
        <Stack.Screen name="login" component={Login} />

        <Stack.Screen name="Home" component={MainDrawerNavigator} />

        <Stack.Screen name="ForgotPassword" component={ForgetPassword} />

        <Stack.Screen name="otpscreen" component={Otpscreen} />
        <Stack.Screen name="SetPassword" component={SetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
