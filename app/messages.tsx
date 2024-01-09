import React, { useMemo } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import ButtonText from "../src/components/ButtonText";
import { MessageThread } from "../src/model/messageThread";
import { useAppDispatch, useAppSelector } from "../src/store";
import { PRIMARY } from "../src/utils/colors";

const MessageList = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector((state) => state.messages);
  const messageThreads = useAppSelector((state) => state.messageThreads);

  const allMessageThreads = useMemo(
    () => Object.values(messageThreads),
    [messageThreads]
  );

  const createMessageThread = () => {};

  return (
    <View style={styles.container}>
      {allMessageThreads.map((messageThread) => (
        <MessageRow key={messageThread.id} message={messageThread} />
      ))}

      <View>
        <TouchableOpacity
          style={styles.createThreadButton}
          onPress={createMessageThread}
        >
          <ButtonText text="+" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessageList;

type MessageRowProps = {
  message: MessageThread;
};

const MessageRow = (props: MessageRowProps) => {
  const { message } = props;

  const users = useAppSelector((state) => state.users);
  const currentUser = useAppSelector((state) => state.user);
  const messages = useAppSelector((state) => state.messages);

  const otherUser = useMemo(() => {
    const otherUserId = message.users.find((id) => id !== currentUser.id);
    return users[otherUserId!];
  }, []);

  return (
    <View>
      <Text>{otherUser.name}</Text>
      <Text>{messages[message.id].text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "pink",
    paddingTop: Platform.OS === "android" ? 20 : 0, // SafeAreaView fix for Android
  },
  createThreadButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: PRIMARY,
    justifyContent: "center",
    alignItems: "center",
  },
});
