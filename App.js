import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import User from "./components/User";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const contacts = (props) => {
  return (
    <View>
      <Button title="ADD CONTACT" />
      <Text>Contacts Screen</Text>
    </View>
  );
};

const user = (props) => {
  return (
    <View style={styles.screen}>
      <User user="My user" />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        sceneContainerStyle={{ marginTop: 30, padding: 50 }}
        tabBarOptions={{
          activeTintColor: "black",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Contacts"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-list" size={size} color={color} />
            ),
          }}
          component={contacts}
        />
        <Tab.Screen
          name="Me"
          component={user}
          options={{
            tabBarLabel: "Me",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="ios-person" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
