import { useKeyboard } from "@react-native-community/hooks";
import { router } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../src/components/Header";
import { useAppDispatch, useAppSelector } from "../src/store";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const MessageThread = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector((state) => state.messages);
  const messageThreads = useAppSelector((state) => state.messageThreads);
  const user = useAppSelector((state) => state.user);
  const currentUser = useAppSelector((state) => state.currentUser);

  const [message, setMessage] = useState("");
  const { keyboardHeight, keyboardShown } = useKeyboard();
  const inputY = useSharedValue(20);
  /**
   * `keyboardHeight` is 0 until the keyboard is shown for the first time.
   * It remains as a non-zero value even after it has been closed.
   */
  useEffect(() => {
    if (keyboardHeight !== 0 && keyboardHeight !== inputY.value) {
      inputY.value = keyboardHeight;
    } else if (!keyboardShown) {
      /**
       * At this point, the keyboard has been closed and the
       * inputY value is still the keyboard height.
       */
      if (inputY.value !== 20) {
        inputY.value = 20;
      }
    }
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      // transform: [{ translateY: inputY.value }],
      position: "absolute",
      bottom: inputY.value,
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

  console.log("keyboardHeight", keyboardHeight);
  const onInputFocus = () => {
    inputY.value = keyboardHeight;
    // inputY.value = withTiming(100, {
    //   duration: 200,
    //   easing: Easing.linear,
    // });
  };

  const onInputBlur = () => {
    inputY.value = 20;
    // inputY.value = withTiming(20, {
    //   duration: 200,
    //   easing: Easing.linear,
    // });
  };

  const onBackdropPressed = () => {
    Keyboard.dismiss();
    inputY.value = 20;
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header leftButton={{ onPress: goBack }} showLogo />
      {!existingThread && <Text>No messages yet</Text>}

      <TouchableWithoutFeedback
        onPress={onBackdropPressed}
        style={styles.backdrop}
      >
        <AnimatedTextInput
          value={message}
          onChangeText={(text) => setMessage(text)}
          style={[styles.input, animatedStyles]}
          onFocus={onInputFocus}
          // onBlur={onInputBlur}
        />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default MessageThread;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  backdrop: {
    flex: 1,
    height: 400,
    width: 200,
  },
  input: {
    height: 45,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
