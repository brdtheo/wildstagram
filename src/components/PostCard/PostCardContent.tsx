import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  contentHorizontalSpacing,
  deviceWidth,
  isIOS,
  wcsColor,
} from "../../../App";
import { Feather } from "@expo/vector-icons";

interface IPostCardContent {
  mediaUrl: string;
  sponsored?: boolean;
}

const PostCardContent = ({ mediaUrl, sponsored }: IPostCardContent) => {
  const containerStyle = { width: deviceWidth };

  const imageStyle = {
    width: deviceWidth,
    height: deviceWidth,
  };

  const sponsoredButtonStyle = {
    ...style.sponsoredButtonStyle,
    paddingHorizontal: contentHorizontalSpacing * 2,
    paddingVertical: contentHorizontalSpacing,
    backgroundColor: wcsColor,
  };

  const sponsoredTextStyle = {
    ...style.sponsoredTextStyle,
    fontWeight: isIOS ? "bold" : "normal",
  };

  return (
    <View style={containerStyle}>
      <ImageBackground
        resizeMode="cover"
        source={{ uri: mediaUrl }}
        style={imageStyle}
      />

      {sponsored && (
        <TouchableOpacity style={sponsoredButtonStyle}>
          <Text style={sponsoredTextStyle}>Learn More</Text>
          <Feather name="chevron-right" size={22} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  sponsoredButtonStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sponsoredTextStyle: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Inter_600SemiBold",
  },
});

export default PostCardContent;
