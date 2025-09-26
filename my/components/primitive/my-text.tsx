import { useMyTheme } from "@/my/scripts/my-theme-context";
import React, { useMemo } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from "react-native";

type MyTextProps = {
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
} & TextProps;

const MyText = ({ style, children, ...props }: MyTextProps) => {
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

  return (
    <Text style={[baseStyle, style]} {...props}>
      {children}
    </Text>
  );
};

MyText.displayName = "MyText";
export default MyText;
