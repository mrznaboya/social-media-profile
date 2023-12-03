import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppSelector } from "../src/store";
import Header from "../src/components/Header";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import UserInfo from "../src/components/UserInfo";

const UserDetailPage = () => {
  const currentUser = useAppSelector((state) => state.currentUser);

  const goBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header leftButton={{ onPress: goBack }} showLogo />
      <View style={styles.main}>
        {/* User Info */}
        <UserInfo user={currentUser} />

        {/* Tabs */}
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
    flex: 1,
    padding: 10,
  },
  userInfo: {},
});
