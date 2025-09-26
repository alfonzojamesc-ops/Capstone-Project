import cs from "@/my/constants/my-const-styles";
import { useMyTheme } from "@/my/scripts/my-theme-context";
import React, { useMemo } from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";

type MyPressableProps = {
  label?: string;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
} & Omit<PressableProps, "style">;

const MyPressable = ({
  label,
  style,
  children,
  ...props
}: MyPressableProps) => {
  const { palette } = useMyTheme();

  const baseStyle = useMemo(
    () =>
      StyleSheet.create({
        container: {
          ...cs.rounded,
          ...cs.hvcenter,
          paddingHorizontal: 10,
          paddingVertical: 10,
          overflow: "hidden",
        },
      }).container,
    []
  );

  return (
    <Pressable
      style={({ pressed, hovered }) => [
        baseStyle,
        {
          backgroundColor: pressed
            ? palette.primary1
            : hovered
            ? palette.primary2
            : palette.primary1,
        },
        style,
      ]}
      {...props}
    >
      {children ?? (
        <Text style={{ color: palette.neutral1 }}>{label ?? "Button"}</Text>
      )}
    </Pressable>
  );
};

MyPressable.displayName = "MyPressable";
export default MyPressable;
