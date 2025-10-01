import React, { memo } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

const DEFAULT_CHILD = <Text>Lorem Ipsum</Text>;

const s = StyleSheet.create({
  base: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,

    overflow: "hidden",
    borderRadius: 200,
    backgroundColor: "dodgerblue",
  },
});

function MyTouchableOpacity({
  style,
  children,
  ...etc
}: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={[s.base, style]} activeOpacity={0.7} {...etc}>
      {children ?? DEFAULT_CHILD}
    </TouchableOpacity>
  );
}
export default memo(MyTouchableOpacity);
