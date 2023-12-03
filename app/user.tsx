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

const UserDetailPage = () => {
  const currentUser = useAppSelector((state) => state.currentUser);

  const goBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Text>Go back</Text>
      </TouchableOpacity>

      <Text>User Detail Page</Text>

      <Text>
        {currentUser.firstName} {currentUser.lastName} @{currentUser.userName}
      </Text>
    </SafeAreaView>
  );
};

export default UserDetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 60 : 0,
  },
});
