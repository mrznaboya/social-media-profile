import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Post } from "../model/post";
import { USERS } from "../data/users";

type Props = {
  post: Post;
};

const PostCard = (props: Props) => {
  const post = props.post;

  const userInfo = USERS.find((user) => user.id === post.user);
  //   console.log("🚀 ~ file: PostCard.tsx:14 ~ PostCard ~ userInfo:", userInfo);

  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <View style={styles.photo} />
      </View>

      <View style={styles.content}>
        <Text>
          {userInfo?.firstName} {userInfo?.lastName} @{userInfo?.userName}
        </Text>
        <Text>{post.text}</Text>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "90%",
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "row",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // For Android
  },
  photo: {
    height: 40,
    width: 40,
    backgroundColor: "blue",
    borderRadius: 20,
  },
  photoContainer: {
    height: "100%",
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    // backgroundColor: "red",
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 5,
  },
});