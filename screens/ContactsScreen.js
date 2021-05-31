import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import ContactsList from "../components/ContactsList";
import list from "../assets/List";
import Ionicons from 'react-native-vector-icons/Ionicons'
const ContactsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Button
        icon={<Ionicons name="ios-person-add" size={15} color="white" />}
        buttonStyle={styles.button}
        title=" ADD CONTACT"
        onPress={() => props.navigation.navigate("Add Contact", { list })}
      />
      <View></View>
      <ContactsList />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonContainer: {
    width: 200,
    height: 50,
    padding: 10,
  },
  button: {
    width: 200,
    height: 50,
    padding: 10,
    borderRadius: 50,
  },
});

export default ContactsScreen;
