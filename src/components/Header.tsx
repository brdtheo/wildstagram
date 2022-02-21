import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { isIOS } from "../../App";
import { Feather } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity>
        <Text style={style.heading}>Wildstagram</Text>
      </TouchableOpacity>

      <View style={style.buttonsContainer}>
        <TouchableOpacity>
          <Feather
            name="plus-square"
            size={isIOS ? 26 : 24}
            color="#fff"
            style={style.button}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather
            name="heart"
            size={isIOS ? 26 : 24}
            color="#fff"
            style={style.button}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather
            name="send"
            size={isIOS ? 26 : 24}
            color="#fff"
            style={style.button}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 4,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },

  heading: {
    color: "#fff",
    fontFamily: "GrandHotel_400Regular",
    fontSize: 34,
    lineHeight: 38,
  },

  buttonsContainer: {
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  button: {
    marginLeft: 24,
  },
});

export default Header;
