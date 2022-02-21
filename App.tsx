import Homescreen from "./src/screens/Homescreen";
import { Dimensions } from "react-native";
import { osName } from "expo-device";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_600SemiBold } from "@expo-google-fonts/inter";
import { GrandHotel_400Regular } from "@expo-google-fonts/grand-hotel";
import AppLoading from "expo-app-loading";
const { faker } = require("@faker-js/faker");

export const backgroundColor = "#000000";
export const contentHorizontalSpacing = 8;
export const wcsColor = "#f76c6c";
export const isIOS = osName === "iOS";
export const deviceWidth = Dimensions.get("window").width;

export type IFakeAccount = {
  picture: string;
  name: string;
  seen: boolean;
  post: {
    sponsored: boolean;
    mediaUrl: string;
    likes: number;
    description: string;
    comments: number;
    date: number;
  };
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    GrandHotel_400Regular,
  });

  const fakeData: IFakeAccount[] = [];
  const fakeDataCount = 10;
  for (let i = 0; i < fakeDataCount; i++) {
    const randomBoolean = faker.datatype.boolean();
    let newAccountItem: IFakeAccount = {
      picture: faker.internet.avatar(),
      name: faker.internet.userName(),
      seen: randomBoolean,
      post: {
        sponsored: randomBoolean,
        mediaUrl: faker.image.image(500, 500, true),
        likes: faker.mersenne.rand(100, 500),
        description: faker.lorem.sentences(3),
        comments: faker.mersenne.rand(5, 100),
        date: faker.mersenne.rand(1, 23),
      },
    };
    fakeData.push(newAccountItem);
  }

  if (
    !fontsLoaded ||
    !backgroundColor ||
    typeof isIOS === undefined ||
    !Dimensions ||
    !(fakeData && fakeData.length === 10)
  ) {
    return <AppLoading />;
  }

  return <Homescreen fakeData={fakeData} />;
}
