import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";

const ContactsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Button title="ADD CONTACT" />
      <Text>
          Contacts Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop:40
  },
});

export default ContactsScreen;
