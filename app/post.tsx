import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useAppDispatch, useAppSelector } from "../src/store";
import { router } from "expo-router";
import { USERS } from "../src/data/users";
import { CurrentUserActions } from "../src/store/features/currentUser";
import { ROUTES } from "../src/routes";

const PostDetailPage = () => {
  const dispatch = useAppDispatch();

  const currentPost = useAppSelector((state) => state.currentPost);
  const userInfo = USERS.find((user) => user.id === currentPost.user);

  const goBack = () => {
    router.back();
  };

  const goToUserDetailPage = () => {
    dispatch(CurrentUserActions.setCurrentUser(userInfo));
    router.push(ROUTES.USER);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Text>Go back</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToUserDetailPage}>
        <Text>User A</Text>
      </TouchableOpacity>

      <Text>{currentPost.text}</Text>
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
