import React, { useMemo } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

import { useAppSelector } from "../../store";
import PostCard from "../PostCard";
import Spacing from "../Spacing";

type Props = {
  isActive: boolean;
};

const Posts = (props: Props) => {
  const { isActive } = props;

  const currentUser = useAppSelector((state) => state.currentUser);
  const posts = useAppSelector((state) => state.posts);

  const postsForUser = useMemo(() => {
    return Object.values(posts)
      .filter((post) => post.user === currentUser.id)
      .sort((a, b) => b.createdDate - a.createdDate);
  }, []);

  if (!isActive) {
    return null;
  }

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      showsVerticalScrollIndicator={false}
    >
      <Text>Posts</Text>
      {postsForUser.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
      <Spacing vertical={50} />
    </ScrollView>
  );
};

export default Posts;

const styles = StyleSheet.create({
  scrollView: {
    alignItems: "center",
    // flex: 1,
  },
});
