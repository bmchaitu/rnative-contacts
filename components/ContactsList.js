import { View, FlatList, StyleSheet,Text, Image } from "react-native";
import React from "react";
import list from "../assets/List";
import { TouchableOpacity } from "react-native-gesture-handler";

const ContactsList = (props) => {
  const renders = ({ item }) => (
    <TouchableOpacity onPress={() => props.handleNavigation('User Screen')}>
      <View style={styles.listitem}>
      <Image style={styles.image} source={require('../assets/dwayne-the-rock-.jpg')} ></Image>
      <View style={styles.info}>
      <Text>{item.name}</Text>
      <Text>{item.phone}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.contactsscreen}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={list}
        renderItem={renders}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contactsscreen: {
    backgroundColor: "#fff",
    width: 370,
    marginTop: 10,
    marginBottom: 60,
  },
  listitem: {
    padding:5,
    height: 80,
    flexDirection:'row',
    borderColor:'black',
    borderBottomWidth:1
  },
  image:{
    height:70,
    width:70,
    borderRadius:35
  },
  info:{
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:50,
  }
});
export default ContactsList;
