import React, { memo } from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";

type MyPressableStyle =
  | StyleProp<ViewStyle>
  | ((state: { pressed: boolean }) => StyleProp<ViewStyle>);

type MyPressableProps = Omit<PressableProps, "style"> & {
  style?: MyPressableStyle;
};

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

const DEFAULT_CHILD = <Text>Lorem Ipsum</Text>;

function MyPressable({ style, children, ...props }: MyPressableProps) {
  return (
    <Pressable
      style={({ pressed }) => {
        const base: StyleProp<ViewStyle> = [
          s.base,
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
}
export default memo(MyPressable);
