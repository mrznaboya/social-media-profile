import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  text: string;
};

const ButtonText = (props: Props) => {
  const { text } = props;
  return (
    <View>
      <Text style={styles.label}>{text}</Text>
    </View>
  );
};

export default ButtonText;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
