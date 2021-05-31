import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Me from '../components/Me';
import ContactForm from "../components/ContactForm";

const Stack = createStackNavigator();
const MeTab = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User"
        component={Me}
        options={{ headerTitle: "My Details", headerTitleAlign: "center" }}
      />
      <Stack.Screen
      name="Update Me"
      component={ContactForm}/>
    </Stack.Navigator>
  );
};

export default MeTab;
