import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { Input, Image, Button } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import list from "../assets/List";

const ContactForm = (props) => {
  if (props.route.params) var { user } = props.route.params;
  else var user = { firstName: "", lastName: "", phone: "", email: "" };
  const [firstName, setfirstName] = React.useState(user.firstName);
  const [lastName, setlastName] = React.useState(user.lastName);
  const [phone, setPhone] = React.useState(user.phone);
  const [email, setEmail] = React.useState(user.email);
  const handleAdd = () => {
    if (firstName.length == 0)
      return Alert.alert("Error", "Please fill First Name");
    if (lastName.length == 0)
      return Alert.alert("Error", "Please fill Last Name");
    if (phone.length == 0 || phone.length < 10 || phone.length > 10)
      return Alert.alert("Error", "Please fill Contact Properly");
    if (email.length == 0) return Alert.alert("Error", "Please Fill Email ID");
    const contact = {
      name: firstName + lastName,
      firstName,
      lastName,
      phone: phone,
      email: email,
    };

    if (props.route.params) {
      list.forEach((contact) => {
        if (contact.id === user.id) {
          contact.firstName = firstName;
          contact.lastName = lastName;
          contact.email = email;
          contact.phone = phone;
        }
        props.navigation.navigate("User");
      });
    } else {
      list.push({ ...contact, id: list.length + 1 });
    props.navigation.navigate("Contacts");
    }
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image
          source={require("../assets/dwayne-the-rock-.jpg")}
          style={styles.image}
        />
        <Input
          labelStyle={styles.label}
          label="First Name"
          placeholder="Enter First Name"
          value={firstName}
          onChangeText={(text) => setfirstName(text)}
        />
        <Input
          labelStyle={styles.label}
          label="Last Name"
          placeholder="Enter Last Name"
          value={lastName}
          onChangeText={(text) => setlastName(text)}
        />
        <Input
          labelStyle={styles.label}
          keyboardType="number-pad"
          label="Mobile Number"
          placeholder="Enter Phone Number"
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
        <Input
          labelStyle={styles.label}
          label="E-mail"
          placeholder="Enter E-mail Address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Button
          buttonStyle={{ backgroundColor: "#fcacbc", width: 100 }}
          title="Done"
          onPress={handleAdd}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    padding: 50,
    paddingTop: 10,
  },
  inputContainer: {
    width: 300,
    height: 40,
    margin: 15,
    padding: 10,
  },
  image: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  label: { color: "black" },
});
export default ContactForm;
