import PostCardContent from "./PostCardContent";
import PostCardHeader from "./PostCardHeader";
import PostCardFooter from "./PostCardFooter";
import { View } from "react-native";
import { contentHorizontalSpacing } from "../../../App";

interface IPostCard {
  accountName: string;
  accountPicture: string;
  sponsored?: boolean;
  mediaUrl: string;
  description?: string;
  likes: number;
  comments: number;
  date: number;
  seen?: boolean;
}

const PostCard = ({
  accountName,
  accountPicture,
  sponsored,
  mediaUrl,
  description,
  likes,
  comments,
  date,
  seen,
}: IPostCard) => {
  const containerStyle = {
    marginBottom: contentHorizontalSpacing / 2,
  };

  return (
    <View style={containerStyle}>
      <PostCardHeader
        accountName={accountName}
        accountPicture={accountPicture}
        sponsored={sponsored}
        seen={seen}
      />
      <PostCardContent mediaUrl={mediaUrl} sponsored={sponsored} />
      <PostCardFooter
        description={description}
        accountName={accountName}
        likes={likes}
        comments={comments}
        date={date}
      />
    </View>
  );
};

export default PostCard;
