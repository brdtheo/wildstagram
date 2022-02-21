import { FlatList, View } from "react-native";
import React from "react";
import { contentHorizontalSpacing, IFakeAccount, isIOS } from "../../../App";
import AccountAvatar from "../AccountAvatar";

const StoriesList = ({ fakeData }: { fakeData: IFakeAccount[] }) => {
  const wildStoryItem = ({ item }: { item: IFakeAccount }) => (
    <AccountAvatar
      accountPicture={item.picture}
      name={item.name}
      disableGradient={item.seen}
      size={isIOS ? 66 : 62}
    />
  );

  return (
    <View
      style={{
        borderBottomWidth: isIOS ? 1 : 0.5,
        borderBottomColor: "#202020",
      }}
    >
      <FlatList
        data={fakeData}
        renderItem={wildStoryItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          padding: contentHorizontalSpacing,
        }}
        overScrollMode="never"
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default StoriesList;
