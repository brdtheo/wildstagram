import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { contentHorizontalSpacing, isIOS } from "../../../App";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";

interface IPostCardFooter {
  accountName: string;
  description?: string;
  likes: number;
  comments: number;
  date: number;
}

const PostCardFooter = ({
  description,
  accountName,
  likes,
  comments,
  date,
}: IPostCardFooter) => {
  const containerStyle = {
    paddingHorizontal: contentHorizontalSpacing * 1.8,
    paddingVertical: contentHorizontalSpacing / 2,
  };

  const buttonsBarStyle = {
    ...style.buttonsBar,
    paddingTop: contentHorizontalSpacing / 2,
    paddingBottom: contentHorizontalSpacing / 2,
  };

  const buttonContainerStyle = {
    ...style.buttonContainer,
    paddingTop: contentHorizontalSpacing / 2,
    paddingBottom: contentHorizontalSpacing,
  };

  const likeCountStyle = {
    ...style.likeCount,
    fontWeight: isIOS ? "bold" : "normal",
  };

  const accountNameStyle = {
    ...style.accountName,
    fontSize: isIOS ? 13 : 12,
    fontWeight: isIOS ? "bold" : "normal",
  };

  const descriptionStyle = {
    ...style.description,
    fontSize: isIOS ? 13 : 12,
  };

  const commentsTextStyle = {
    ...style.greyText,
    fontSize: 12,
  };

  const dateTextStyle = {
    ...style.greyText,
    fontSize: 11,
  };

  return (
    <View style={containerStyle}>
      <View style={buttonsBarStyle}>
        <View style={buttonContainerStyle}>
          <TouchableOpacity>
            <Feather
              name="heart"
              size={isIOS ? 26 : 24}
              color="#fff"
              style={style.button}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="chatbubble-outline"
              size={24}
              color="#fff"
              style={style.button}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="send" size={isIOS ? 26 : 24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={buttonContainerStyle}>
          <TouchableOpacity>
            <FontAwesome name="bookmark-o" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={likeCountStyle}>
          {likes} likes
        </Text>

        {description && (
          <View style={style.rowContainer}>
            <Text style={accountNameStyle}>
              {`${accountName} `}
              <Text style={descriptionStyle}>{description}</Text>
            </Text>
          </View>
        )}

        <TouchableOpacity style={style.rowContainer}>
          <Text style={commentsTextStyle}>
            View all {comments} comments
          </Text>
        </TouchableOpacity>

        <Text style={dateTextStyle}>
          {date} hours ago
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  buttonsBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  rowContainer: {
    marginBottom: 6,
  },

  button: {
    marginRight: 16,
  },

  likeCount: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 6,
    fontFamily: "Inter_600SemiBold",
  },

  accountName: { color: "#fff", fontFamily: "Inter_600SemiBold" },

  description: {
    color: "#fff",
    fontWeight: "normal",
    lineHeight: 17,
    fontFamily: "Inter_400Regular",
  },

  greyText: {
    color: "#909090",
    fontFamily: "Inter_400Regular",
  },
});

export default PostCardFooter;
