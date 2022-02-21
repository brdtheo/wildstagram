import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import Header from "../components/Header";
import { backgroundColor, IFakeAccount } from "../../App";
import PostCard from "../components/PostCard/PostCard";
import BottomNavigation from "../components/BottomNavigation";
import StoriesList from "../components/Stories/StoriesList";

const Homescreen = ({ fakeData }: { fakeData: IFakeAccount[] }) => {
  const blackBackground = {
    backgroundColor: backgroundColor,
  };

  const containerStyle = {
    ...blackBackground,
    ...style.container,
  };

  return (
    <SafeAreaView style={blackBackground}>
      <View style={containerStyle}>
        <StatusBar />

        <Header />

        <ScrollView
          style={style.content}
          showsVerticalScrollIndicator={false}
          overScrollMode={"never"}
        >
          <StoriesList fakeData={fakeData} />

          {fakeData.map((account: IFakeAccount, index: number) => (
            <PostCard
              accountName={account.name}
              accountPicture={account.picture}
              mediaUrl={account.post.mediaUrl}
              sponsored={account.post.sponsored}
              likes={account.post.likes}
              description={account.post.description}
              comments={account.post.comments}
              date={account.post.date}
              key={index}
            />
          ))}
        </ScrollView>

        <BottomNavigation />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
  },

  content: {
    flex: 1,
  },
});

export default Homescreen;
