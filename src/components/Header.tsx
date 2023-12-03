import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type HeaderButton = {
  child?: JSX.Element;
  onPress: () => void;
};

type Props = {
  leftButton?: HeaderButton;
  rightButton?: HeaderButton;
  showLogo?: boolean;
};

const Header = (props: Props) => {
  const { leftButton, showLogo, rightButton } = props;

  const leftButtonPress = () => {
    leftButton?.onPress();
  };

  const rightButtonPress = () => {
    rightButton?.onPress();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.leftButtonContainer}
        onPress={leftButtonPress}
      >
        {leftButton?.child ||
          (leftButton?.onPress && (
            <Ionicons name="chevron-back" size={24} color="black" />
          )) ||
          null}
      </TouchableOpacity>

      <View>{showLogo ? <View style={styles.logo} /> : null}</View>

      <TouchableOpacity
        style={styles.rightButtonContainer}
        onPress={rightButtonPress}
      >
        {rightButton?.child || null}
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    width: "100%",
    borderBottomWidth: 0.5,
    borderBottomColor: "#EEEEEE",
    // backgroundColor: "pink",
    paddingHorizontal: 5,
  },
  leftButtonContainer: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "orange",
  },
  logo: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: "blue",
  },
  rightButtonContainer: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "orange",
  },
});
