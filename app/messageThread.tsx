import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import { Platform, StyleSheet, Text, TextInput } from "react-native";
import { useSharedValue, useAnimatedStyle } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../src/components/Header";
import { useAppDispatch, useAppSelector } from "../src/store";

const MessageThread = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector((state) => state.messages);
  const messageThreads = useAppSelector((state) => state.messageThreads);
  const user = useAppSelector((state) => state.user);
  const currentUser = useAppSelector((state) => state.currentUser);

  const [message, setMessage] = useState("");
  const inputY = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: inputY.value }],
    };
  });

  const existingThread = useMemo(() => {
    return Object.values(messageThreads).find((thread) => {
      return (
        thread.users.includes(user.id) && thread.users.includes(currentUser.id)
      );
    });
  }, []);

  const goBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header leftButton={{ onPress: goBack }} showLogo />
      {!existingThread && <Text>No messages yet</Text>}

      <TextInput
        value={message}
        onChangeText={(text) => setMessage(text)}
        style={[styles.input, animatedStyles]}
      />
    </SafeAreaView>
  );
};

export default MessageThread;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  input: {
    height: 45,
    width: "90%",
    backgroundColor: "red",
  },
});
