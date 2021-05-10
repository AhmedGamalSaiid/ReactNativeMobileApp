import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import { Text } from "react-native";
import Profile from "../Screens/Profile";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import HomeStack from "./HomeStack";

const { Navigator, Screen } = createBottomTabNavigator();
export default function BottomNav() {
  return (
    <Navigator
      tabBarOptions={{
        style: { backgroundColor: "#094456" },
      }}
    >
      <Screen
        component={HomeStack}
        name="home"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={
                focused
                  ? { color: "#6fda44", fontSize: 20, fontWeight: "600" }
                  : { color: "white", fontSize: 15, fontWeight: "400" }
              }
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              style={
                focused
                  ? { color: "#6fda44", fontSize: 20, fontWeight: "600" }
                  : { color: "white", fontSize: 15, fontWeight: "400" }
              }
            />
          ),
          
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={
                focused
                  ? { color: "#6fda44", fontSize: 20, fontWeight: "600" }
                  : { color: "white", fontSize: 15, fontWeight: "400" }
              }
            >
              Profile
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user"
              style={
                focused
                  ? { color: "#6fda44", fontSize: 20, fontWeight: "600" }
                  : { color: "white", fontSize: 15, fontWeight: "400" }
              }
            />
          ),
        }}
      />
    </Navigator>
  );
}
