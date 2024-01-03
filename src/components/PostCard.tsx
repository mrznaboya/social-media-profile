import { router } from "expo-router";
import React, { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Post } from "../model/post";
import { ROUTES } from "../routes";
import { useAppDispatch, useAppSelector } from "../store";
import { CurrentPostActions } from "../store/features/currentPost";
import { CARD_SHADOW } from "../utils/styles";

type Props = {
  post: Post;
};

const PostCard = (props: Props) => {
  const post = props.post;
  const dispatch = useAppDispatch();

  const users = useAppSelector((state) => state.users);
  const currentUser = useMemo(() => users[post.user], [users, post.user]);

  const goToPostDetailPage = () => {
    dispatch(CurrentPostActions.setCurrentPost(post));

    router.push(ROUTES.POST);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={goToPostDetailPage}>
      <View style={styles.photoContainer}>
        <View style={styles.photo} />
      </View>

      <View style={styles.content}>
        <Text>
          {currentUser?.name} @{currentUser?.username}
        </Text>
        <Text>{post.text}</Text>
      </View>
    </TouchableOpacity>
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
    ...CARD_SHADOW,
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
