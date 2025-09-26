import { useMyTheme } from "@/my/scripts/my-theme-context";
import React, { useMemo } from "react";
import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from "react-native";

type MyBoxProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
} & ViewProps;

const MyBox = ({ style, children, ...props }: MyBoxProps) => {
  const { palette } = useMyTheme();

  const baseStyle = useMemo(
    () =>
      StyleSheet.create({
        container: {
          overflow: "hidden",
          backgroundColor: palette.neutral4,
        },
      }).container,
    [palette.neutral4]
  );

  return <View style={[baseStyle, style]} {...props}>{children}</View>;
};

MyBox.displayName = "MyBox";
export default MyBox;
