import React, { useMemo } from "react";
import { ScrollView, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../src/components/Header";
import PostCard from "../src/components/PostCard";
import Spacing from "../src/components/Spacing";
import { useAppSelector } from "../src/store";

const Home = () => {
  const posts = useAppSelector((state) => state.posts);
  // console.log("🚀 ~ file: home.tsx:12 ~ Home ~ posts:", Object.keys(posts));

  const postsToShow = useMemo(() => {
    return Object.values(posts).sort((a, b) => b.createdDate - a.createdDate);
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header showLogo />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {postsToShow.map((post) => (
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
