import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useAppDispatch, useAppSelector } from "../src/store";
import { router } from "expo-router";
import { USERS } from "../src/data/users";
import { CurrentUserActions } from "../src/store/features/currentUser";
import { ROUTES } from "../src/routes";
import Header from "../src/components/Header";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header
        leftButton={{
          child: <Ionicons name="chevron-back" size={24} color="black" />,
          onPress: goBack,
        }}
        // rightButton={{
        //   child: <Ionicons name="chevron-forward" size={24} color="black" />,
        //   onPress: goBack,
        // }}
        showLogo
      />

      <View style={styles.main}>
        <TouchableOpacity onPress={goToUserDetailPage}>
          <Text>User A</Text>
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
  },
});
