import { useThemeStore } from "@/my-scripts/my-stores/my-store-theme";
import React, { memo, useMemo } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

type MyTextProps = {
  children?: React.ReactNode;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
};

const MyText = memo(
  ({ children = "Lorem Ipsum", numberOfLines, style }: MyTextProps) => {
    const { colors } = useThemeStore();

    const combinedStyles = useMemo(
      () => StyleSheet.flatten([{ color: colors.neutral1 }, style]),
      [colors.neutral1, style]
    );

    return (
      <Text style={combinedStyles} numberOfLines={numberOfLines}>
        {children}
      </Text>
    );
  }
);

MyText.displayName = "MyText";
export default MyText;
