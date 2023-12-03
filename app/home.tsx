import { ScrollView, StyleSheet, Platform } from "react-native";
import React from "react";
import { POSTS } from "../src/data/posts";
import PostCard from "../src/components/PostCard";
import Spacing from "../src/components/Spacing";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../src/components/Header";

const Home = () => {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header showLogo />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {POSTS.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
        <Spacing vertical={50} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "pink",
    paddingTop: Platform.OS === "android" ? 20 : 0, // SafeAreaView fix for Android
  },
  scrollView: {
    alignItems: "center",
    // flex: 1,
  },
});
