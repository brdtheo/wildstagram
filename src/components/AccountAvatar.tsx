import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { backgroundColor, isIOS } from "../../App";
import { LinearGradient } from "expo-linear-gradient";

interface IAccountAvatar {
  accountPicture: string;
  name?: string;
  size: number;
  disableGradient?: boolean;
  inPostHeader?: boolean;
}

const AccountAvatar = ({
  accountPicture,
  name,
  size,
  disableGradient,
  inPostHeader,
}: IAccountAvatar) => {
  const androidGradientStyle = {
    width: size,
    height: size,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  };

  const iosGradientStyle = {
    width: size,
    height: size,
    backgroundColor: "#fff",
    borderRadius: size / 2,
    justifyContent: "center",
    alignItems: "center",
  };

  const displayName = () => {
    if (!name) {
      return;
    }

    if (name.length <= 11) {
      return name;
    } else {
      let shortName = name.substring(0, 8);
      shortName += "...";
      return shortName;
    }
  };

  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        width: inPostHeader ? "auto" : size + 20,
      }}
    >
      {disableGradient && (
        <Image
          source={{ uri: accountPicture }}
          style={{
            borderRadius: 100,
            width: inPostHeader ? size - 3 + 3 : size - 4,
            height: inPostHeader ? size - 3 + 3 : size - 4,
          }}
        />
      )}

      {!disableGradient && (
        <LinearGradient
          colors={["#fdf497", "#fdf497", "#fd5949", "#d6249f", "#285AEB"]}
          style={isIOS ? iosGradientStyle : androidGradientStyle}
          start={{
            x: 10,
            y: 0,
          }}
          end={{
            x: -5,
            y: 8,
          }}
        >
          <Image
            source={{ uri: accountPicture }}
            style={{
              borderRadius: 100,
              width: inPostHeader ? size - 3 : size - 4,
              height: inPostHeader ? size - 3 : size - 4,
              borderWidth: size / 25,
              borderColor: backgroundColor,
            }}
          />
        </LinearGradient>
      )}

      {name && (
        <Text
          style={{
            color: "#fff",
            fontSize: 11,
            marginTop: 6,
            fontFamily: "Inter_400Regular",
          }}
        >
          {displayName()}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {},
});

export default AccountAvatar;
