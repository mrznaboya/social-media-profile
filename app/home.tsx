import auth from "@react-native-firebase/auth";
import { router } from "expo-router";
import React, { useMemo } from "react";
import {
  ScrollView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ButtonText from "../src/components/ButtonText";
import Header from "../src/components/Header";
import PostCard from "../src/components/PostCard";
import Spacing from "../src/components/Spacing";
import { ROUTES } from "../src/routes";
import { useAppDispatch, useAppSelector } from "../src/store";
import { CurrentPostActions } from "../src/store/features/currentPost";
import { PostBuilderActions } from "../src/store/features/postBuilder";
import { PRIMARY } from "../src/utils/colors";

const Home = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts);
  // console.log("🚀 ~ file: home.tsx:21 ~ Home ~ posts:", posts);

  const postsToShow = useMemo(() => {
    console.log("🚀 ~ file: home.tsx:32 ~ postsToShow ~ posts:", posts);
    return Object.values(posts).sort((a, b) => b.createdDate - a.createdDate);
  }, [posts]);

  const createPost = () => {
    dispatch(CurrentPostActions.reset());
    dispatch(PostBuilderActions.setIsPostModalOpen(true));
  };

  const signOut = () => {
    auth().signOut();

    setTimeout(() => {
      router.replace(ROUTES.SIGN_UP);
    }, 1000);
  };

  const goToProfile = () => router.push(ROUTES.MY_PROFILE);

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header
        leftButton={{
          child: <Text>Profile</Text>,
          onPress: goToProfile,
        }}
        showLogo
        rightButton={{
          child: <Text>Sign Out</Text>,
          onPress: signOut,
        }}
      />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {postsToShow.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
        <Spacing vertical={50} />
      </ScrollView>

      <TouchableOpacity style={styles.createPostButton} onPress={createPost}>
        <ButtonText text="+" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "pink",
    paddingTop: Platform.OS === "android" ? 20 : 0, // SafeAreaView fix for Android
  },
  scrollView: {
    alignItems: "center",
    // flex: 1,
  },
  createPostButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: PRIMARY,
    justifyContent: "center",
    alignItems: "center",
  },
});
