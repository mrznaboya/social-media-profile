import { View, Text } from "react-native";
import React from "react";

type Props = {
  vertical?: number;
  horizontal?: number;
};

const Spacing = (props: Props) => {
  const { vertical = 0, horizontal = 0 } = props;
  return (
    <View
      style={{
        marginVertical: vertical,
        marginHorizontal: horizontal,
      }}
    />
  );
};

export default Spacing;
