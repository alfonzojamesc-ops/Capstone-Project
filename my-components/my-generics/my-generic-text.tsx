import { useThemeStore } from "@/my-scripts/my-stores/my-store-theme";
import React, { memo, useMemo } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

type MyTextProps = {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

const MyText = memo(({ children = "Lorem Ipsum", style }: MyTextProps) => {
  const { colors } = useThemeStore();

  const combinedStyles = useMemo(
    () => StyleSheet.flatten([{ color: colors.textPrimary }, style]),
    [colors.textPrimary, style]
  );

  return <Text style={combinedStyles}>{children}</Text>;
});

MyText.displayName = "MyText";
export default MyText;
