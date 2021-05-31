import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ContactsScreen from "./ContactsScreen";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ContactForm from '../components/ContactForm';

const AddConact = (props) => {
  return (
    <View>
      <Text>Add the contact</Text>
    </View>
  );
};
const Stack = createStackNavigator();
const ContactsTab = (props) => {
  return (
      <Stack.Navigator headerMode="screen">
        <Stack.Screen
          name="Contacts"
          component={ContactsScreen}
          options={{ headerTitle: "Contacts App", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Add Contact"
          component={ContactForm}
          options={{ headerTitle: "Contact", headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
  );
};

export default ContactsTab;
