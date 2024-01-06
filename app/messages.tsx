import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../src/store";

const MessageList = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector((state) => state.messages);
  return (
    <View>
      <Text>MessageList</Text>
    </View>
  );
};

export default MessageList;

const styles = StyleSheet.create({});
