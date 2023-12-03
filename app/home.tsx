import { ScrollView, StyleSheet, SafeAreaView, Platform } from "react-native";
import React from "react";
import { POSTS } from "../src/data/posts";
import PostCard from "../src/components/PostCard";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {POSTS.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "pink",
    paddingTop: Platform.OS === "android" ? 60 : 0, // SafeAreaView fix for Android
  },
  scrollView: {
    alignItems: "center",
    flex: 1,
  },
});
