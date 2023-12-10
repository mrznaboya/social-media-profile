import { router } from "expo-router";
import React, { useMemo } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../src/components/Header";
import { ROUTES } from "../src/routes";
import { useAppDispatch, useAppSelector } from "../src/store";
import { CurrentUserActions } from "../src/store/features/currentUser";

const PostDetailPage = () => {
  const dispatch = useAppDispatch();

  const currentPost = useAppSelector((state) => state.currentPost);
  const users = useAppSelector((state) => state.users);

  const currentUser = useMemo(
    () => users[currentPost.user],
    [users, currentPost.user]
  );

  const goBack = () => {
    router.back();
  };

  const goToUserDetailPage = () => {
    dispatch(CurrentUserActions.setCurrentUser(currentUser));

    router.push(ROUTES.USER);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header
        leftButton={{
          onPress: goBack,
        }}
        showLogo
      />

      <View style={styles.main}>
        <TouchableOpacity onPress={goToUserDetailPage}>
          <Text>{currentUser?.name}</Text>
        </TouchableOpacity>

        <Text>{currentPost.text}</Text>
      </View>
    </SafeAreaView>
  );
};

export default PostDetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
    // backgroundColor: "red",
  },
  main: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
});
