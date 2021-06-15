import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { useNavigation } from "@react-navigation/native";
import appContext from "../context/appContext";
function ListItem({
  email,
  phone,
  title,
  subTitle,
  lastName,
  id,
  image,
  IconComponent,
  renderRightActions,
  renderLeftActions,
}) {
  const AppContext = React.useContext(appContext);
  const handleDelete = (id) => {
    AppContext.deleteUser(id);
  };

  const navigation = useNavigation();
  const handleleftAction = () => {
    navigation.navigate("Add Contact", {
      user: {
        firstName: title,
        lastName: subTitle,
        phone,
        email,
        image,
      },
      id,
    });
  };
  return (
    <Swipeable
      renderLeftActions={() =>
        renderLeftActions({ leftNavigate: handleleftAction, id })
      }
      renderRightActions={() => renderRightActions({ handleDelete, id })}
    >
      <TouchableHighlight
        underlayColor="fafbfc"
        onPress={() =>
          navigation.navigate("User Screen", {
            user: {
              firstName: title,
              lastName: lastName,
              phone: phone,
              email: email,
              image,
            },
          })
        }
      >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={{ uri: image }} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#fff",
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: "#cacaca",
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
