import { Ionicons } from "@expo/vector-icons";
import React, { useMemo } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Friendship } from "../../model/friendship";
import { useAppSelector } from "../../store";
import { CARD_SHADOW } from "../../utils/styles";
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
  const currentUser = useAppSelector((state) => state.user);

  const otherUserId = useMemo(() => {
    return friendship.users.find((a) => a !== currentUser.id)!;
  }, []);

  const otherUser = useMemo(() => {
    return users[otherUserId];
  }, []);

  const onAccept = () => {};
  const onReject = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <View style={styles.photo} />
      </View>

      <View style={styles.content}>
        <Text>
          {otherUser?.name} @{otherUser?.username}
        </Text>
        <Text>{otherUser?.bio}</Text>
      </View>

      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={[styles.iconContainer, styles.checkIconContainer]}
          onPress={onAccept}
        >
          <Ionicons
            name="checkmark"
            size={24}
            color="black"
            style={styles.checkIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, styles.closeIconContainer]}
          onPress={onReject}
        >
          <Ionicons
            name="close-outline"
            size={24}
            color="black"
            style={styles.closeIcon}
          />
        </TouchableOpacity>
      </View>
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
  container: {
    height: 60,
    width: "90%",
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "row",
    ...CARD_SHADOW,
  },
  photo: {
    height: 40,
    width: 40,
    backgroundColor: "blue",
    borderRadius: 20,
  },
  photoContainer: {
    height: "100%",
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    // backgroundColor: "red",
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 5,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "20%",
    // backgroundColor: "orange",
    alignItems: "center",
  },
  iconContainer: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  checkIconContainer: {
    height: 30,
    width: 30,
  },
  closeIconContainer: {
    height: 30,
    width: 30,
  },
  checkIcon: {
    borderRadius: 15,
    backgroundColor: "green",
  },
  closeIcon: {
    borderRadius: 15,
    backgroundColor: "red",
  },
});
