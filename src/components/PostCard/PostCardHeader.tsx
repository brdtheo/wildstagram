import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { contentHorizontalSpacing, isIOS } from "../../../App";
import AccountAvatar from "../AccountAvatar";
import { Feather } from "@expo/vector-icons";

interface IPostCardHeader {
  accountName: string;
  accountPicture: string;
  sponsored?: boolean;
  seen?: boolean;
}

const PostCardHeader = ({
  accountName,
  accountPicture,
  sponsored,
  seen,
}: IPostCardHeader) => {
  const containerStyle = {
    ...style.container,
    padding: contentHorizontalSpacing,
  };

  const accountNameStyle = {
    ...style.accountName,
    fontSize: isIOS ? 14 : 12,
  };

  const sponsoredStyle = {
    ...style.sponsored,
    fontSize: isIOS ? 12 : 11,
    marginTop: isIOS ? 1 : 0,
  };

  return (
    <View style={containerStyle}>
      <View style={style.accountContainer}>
        <AccountAvatar
          size={30}
          accountPicture={accountPicture}
          inPostHeader={true}
          disableGradient={seen}
        />

        <TouchableOpacity style={style.accountButton}>
          <Text style={accountNameStyle}>{accountName}</Text>
          {sponsored && <Text style={sponsoredStyle}>Sponsored</Text>}
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={style.buttonContainer}>
        <Feather name="more-horizontal" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  accountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  accountButton: {
    justifyContent: "center",
    marginLeft: 6,
  },

  accountName: {
    color: "#fff",
    fontFamily: "Inter_600SemiBold",
  },

  sponsored: {
    color: "#fff",
    fontFamily: "Inter_400Regular",
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default PostCardHeader;
