import { StyleSheet, TouchableOpacity, View } from "react-native";
import { isIOS } from "../../App";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

const BottomNavigation = () => {
  const containerStyle = {
    ...style.container,
    borderTopWidth: isIOS ? 1 : 0.5,
  };

  return (
    <View style={containerStyle}>
      <TouchableOpacity style={style.button}>
        <MaterialCommunityIcons
          name="home-variant"
          size={isIOS ? 28 : 26}
          color="#fff"
        />
      </TouchableOpacity>

      <TouchableOpacity style={style.button}>
        <Feather name="search" size={isIOS ? 26 : 24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={style.button}>
        <Feather name="video" size={isIOS ? 26 : 24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={style.button}>
        <MaterialCommunityIcons
          name="shopping-outline"
          size={isIOS ? 26 : 24}
          color="#fff"
        />
      </TouchableOpacity>

      <TouchableOpacity style={style.button}>
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={isIOS ? 28 : 26}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 45,
    width: "100%",
    flexDirection: "row",
    borderTopColor: "#202020",
  },

  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
  },
});

export default BottomNavigation;
