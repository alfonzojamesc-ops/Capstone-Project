import { useMyTheme } from "@/my/scripts/my-theme-context";
import React, { useMemo } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

type MyTouchableOpacityProps = {
  label?: string;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
} & Omit<TouchableOpacityProps, "style">;

const MyTouchableOpacity = ({
  label,
  style,
  children,
  ...props
}: MyTouchableOpacityProps) => {
  const { palette } = useMyTheme();

  const baseStyle = useMemo(
    () =>
      StyleSheet.create({
        container: {
          borderRadius: 9999,
          paddingHorizontal: 10,
          paddingVertical: 10,
          overflow: "hidden",
          backgroundColor: palette.primary1,
        },
      }).container,
    [palette.primary1]
  );

  return (
    <TouchableOpacity style={[baseStyle, style]} activeOpacity={0.7} {...props}>
      {children ?? (
        <Text style={{ color: palette.neutral1 }}>{label ?? "Button"}</Text>
      )}
    </TouchableOpacity>
  );
};

MyTouchableOpacity.displayName = "MyTouchableOpacity";
export default MyTouchableOpacity;
