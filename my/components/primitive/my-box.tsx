import { useMyTheme } from "@/my/scripts/my-theme-context";
import React, { useMemo } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type MyBoxProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const MyBox = ({ style, children }: MyBoxProps) => {
  const { palette } = useMyTheme();

  const baseStyle = useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: palette.neutral4,
          justifyContent: "center",
          alignItems: "center",
        },
      }).container,
    [palette.neutral4]
  );

  return <View style={[baseStyle, style]}>{children}</View>;
};

MyBox.displayName = "MyBox";
export default MyBox;
