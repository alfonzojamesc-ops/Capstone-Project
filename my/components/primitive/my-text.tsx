import { useMyTheme } from "@/my/scripts/my-theme-context";
import React, { useMemo } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

type MyTextProps = {
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
};

const MyText = ({ style, children }: MyTextProps) => {
  const { palette } = useMyTheme();

  const baseStyle = useMemo(
    () =>
      StyleSheet.create({
        text: {
          color: palette.neutral1,
        },
      }).text,
    [palette.neutral1]
  );

  return <Text style={[baseStyle, style]}>{children}</Text>;
};

MyText.displayName = "MyText";
export default MyText;
