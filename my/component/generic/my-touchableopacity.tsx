import React, { memo } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

const MyTouchableOpacity = ({
  style,
  children,
  ...props
}: TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={[styles.base, style]} activeOpacity={0.7} {...props}>
      {children ?? DEFAULT_CHILD}
    </TouchableOpacity>
  );
};
export default memo(MyTouchableOpacity);

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,

    overflow: "hidden",
    borderRadius: 200,
    backgroundColor: "dodgerblue",
  },
});

const DEFAULT_CHILD = <Text>Lorem Ipsum</Text>;
