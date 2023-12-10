import React, { useMemo } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

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
      contentContainerStyle={styles.scrollView}
      showsVerticalScrollIndicator={false}
    >
      <Text>Friends</Text>
      {friendshipsForUser.map((friendship) => {
        return (
          <View>
            <Text>{friendship.id}</Text>
          </View>
        );
      })}
      <Spacing vertical={50} />
    </ScrollView>
  );
};

export default Friends;

const styles = StyleSheet.create({
  scrollView: {
    alignItems: "center",
    // flex: 1,
  },
});
