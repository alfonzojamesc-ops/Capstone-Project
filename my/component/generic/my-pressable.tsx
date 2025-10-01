import React, { memo } from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";

const MyPressable = ({ style, children, ...props }: MyPressableProps) => {
  return (
    <Pressable
      style={({ pressed }) => {
        const base: StyleProp<ViewStyle> = [
          styles.base,
          { opacity: pressed ? 0.5 : 1.0 },
        ];

        if (typeof style === "function") {
          return [base, style({ pressed })];
        }
        return [base, style];
      }}
      {...props}
    >
      {children ?? DEFAULT_CHILD}
    </Pressable>
  );
};
export default memo(MyPressable);

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

type MyPressableStyle =
  | StyleProp<ViewStyle>
  | ((state: { pressed: boolean }) => StyleProp<ViewStyle>);

type MyPressableProps = Omit<PressableProps, "style"> & {
  style?: MyPressableStyle;
};

const DEFAULT_CHILD = <Text>Lorem Ipsum</Text>;
