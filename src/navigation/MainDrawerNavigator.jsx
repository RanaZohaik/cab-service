import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeNavigator from "./HomeNavigator";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import CustomDrawerContent from "./CustomDrawerContent";
import Favorites from "../screens/Favorites";
import Wallet from "../screens/Wallet";

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: "front",
        drawerStyle: {
          width: 280,
          backgroundColor: "#FFFFFF",
        },
        drawerActiveTintColor: "#111827",
        drawerInactiveTintColor: "#555555",
        drawerActiveBackgroundColor: "#FFF4B8",
        drawerLabelStyle: {
          marginLeft: 0,
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="HomeTabs"
        component={HomeNavigator}
        options={{ drawerLabel: "Home" }}
      />

      <Drawer.Screen
        name="EditProfile"
        component={Profile}
        options={{ drawerLabel: "Edit Profile" }}
      />

      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Favorites" component={Favorites} />
      <Drawer.Screen name="Wallet" component={Wallet} />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigator;
