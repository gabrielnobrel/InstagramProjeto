import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";
import Contato from "./src/pages/Contato";

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: "ios-home",
  },
  Sobre: {
    name: "ios-people",
  },
  Contato: {
    name: "ios-call",
  },
};

export default function App() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Ionicons name={name} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#121212",
        },
        activeTintColor: "#fff",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Sobre" component={Sobre} />
      <Tab.Screen name="Contato" component={Contato} />
    </Tab.Navigator>
    // </NavigationContainer>s
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
