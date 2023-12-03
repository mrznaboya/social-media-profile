import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

import Spacing from "../Spacing";

type Props = {
  isActive: boolean;
};

const Friends = (props: Props) => {
  const { isActive } = props;

  if (!isActive) {
    return null;
  }

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      showsVerticalScrollIndicator={false}
    >
      <Text>Friends</Text>
      {/* {POSTS.map((post) => (
        <PostCard post={post} key={post.id} />
      ))} */}
      <Spacing vertical={50} />
    </ScrollView>
  );
};

export default Friends;

const styles = StyleSheet.create({
  scrollView: {
    alignItems: "center",
    // flex: 1,
  },
});
