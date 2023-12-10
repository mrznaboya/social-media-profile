import React, { useMemo } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { FRIENDSHIP_STATUS } from "../model/friendship";
import { User } from "../model/user";
import { useAppDispatch, useAppSelector } from "../store";
import { createFriendshipThunk } from "../store/thunks/friendships-thunk";
import { PRIMARY } from "../utils/colors";

type Props = {
  otherUser: User;
};

const ManageFriendshipButton = (props: Props) => {
  const { otherUser } = props;
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector((state) => state.user);
  const friendships = useAppSelector((state) => state.friendships);

  const existingFriendship = useMemo(() => {
    return Object.values(friendships).find(
      (a) => a.users.includes(otherUser.id) && a.users.includes(currentUser.id)
    );
  }, [friendships]);

  const textToShow = useMemo(() => {
    if (existingFriendship) {
      if (existingFriendship.status === FRIENDSHIP_STATUS.ACCEPTED) {
        return "Friends";
      }

      if (
        [FRIENDSHIP_STATUS.PENDING, FRIENDSHIP_STATUS.DECLINED].includes(
          existingFriendship.status
        )
      ) {
        return "Pending";
      }
    } else {
      return "Add Friend";
    }
  }, []);

  const addFriend = () => {
    const onSuccess = () => {
      Alert.alert("Friend request sent!");
    };
    const onError = () => {
      Alert.alert(
        "Could not send friend request",
        "Please close the app and try again."
      );
    };
    dispatch(createFriendshipThunk(otherUser.id, onSuccess, onError));
  };
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={addFriend}>
        <Text style={styles.text}>{textToShow}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ManageFriendshipButton;

const styles = StyleSheet.create({
  button: {
    height: 30,
    width: 100,
    backgroundColor: PRIMARY,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "500",
  },
});
