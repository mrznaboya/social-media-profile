import React, { useMemo } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Friendship } from "../../model/friendship";
import { useAppSelector } from "../../store";
import Spacing from "../Spacing";

type Props = {
  isActive: boolean;
};

const Friends = (props: Props) => {
  const { isActive } = props;

  const user = useAppSelector((state) => state.user);
  const friendships = useAppSelector((state) => state.friendships);

  const friendshipsForUser = useMemo(() => {
    return Object.values(friendships).filter((a) => a.users.includes(user.id));
  }, [friendships]);

  console.log(
    "🚀 ~ file: Friends.tsx:20 ~ Friends ~ friendships:",
    friendships
  );
  console.log("friendshipsForUser", friendshipsForUser);

  if (!isActive) {
    return null;
  }

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContentContainer}
      showsVerticalScrollIndicator={false}
    >
      {friendshipsForUser.map((friendship) => {
        return <FriendshipRow friendship={friendship} key={friendship.id} />;
      })}

      <Spacing vertical={100} />
    </ScrollView>
  );
};

type FriendshipRowProps = {
  friendship: Friendship;
};

const FriendshipRow = (props: FriendshipRowProps) => {
  const { friendship } = props;
  const users = useAppSelector((state) => state.users);
  const currentUser = useAppSelector((state) => state.currentUser);

  const otherUserId = useMemo(() => {
    return friendship.users.find((a) => a !== currentUser.id)!;
  }, []);

  const otherUser = useMemo(() => {
    return users[otherUserId];
  }, []);

  return (
    <View>
      <Text>{otherUser.name}</Text>
    </View>
  );
};

export default Friends;

const styles = StyleSheet.create({
  scrollView: {},
  scrollViewContentContainer: {
    alignItems: "center",
    // flex: 1,
  },
});
