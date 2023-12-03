import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useAppSelector } from "../src/store";
import { router } from "expo-router";

const PostDetailPage = () => {
  const currentPost = useAppSelector((state) => state.currentPost);

  const goBack = () => {
    router.back();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Post Detail Page</Text>
      <Text>{currentPost.text}</Text>

      <TouchableOpacity onPress={goBack}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PostDetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 60 : 0,
  },
});
