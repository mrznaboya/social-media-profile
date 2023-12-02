import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { POSTS } from "../src/data/posts";
import PostCard from "../src/components/PostCard";

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {POSTS.map((post) => (
          <PostCard post={post} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "pink",
  },
  scrollView: {
    alignItems: "center",
    flex: 1,
  },
});
