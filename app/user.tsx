import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../src/components/Header";
import Posts from "../src/components/user/Posts";
import UserInfo from "../src/components/user/UserInfo";
import { ROUTES } from "../src/routes";
import { useAppSelector } from "../src/store";

const UserDetailPage = () => {
  const currentUser = useAppSelector((state) => state.currentUser);

  const goBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header
        leftButton={{ onPress: goBack }}
        showLogo
        rightButton={{
          child: <Ionicons name="chatbubble" size={24} color="black" />,
          onPress: () => router.push(ROUTES.MESSAGE_THREAD),
        }}
      />

      <View style={styles.main}>
        {/* User Info */}
        <UserInfo user={currentUser} />

        <Posts isActive />
      </View>
    </SafeAreaView>
  );
};

export default UserDetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  main: {
    // flex: 1,
    paddingTop: 5,
    // backgroundColor: "red",
  },
});
