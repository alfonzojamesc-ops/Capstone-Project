import { useThemeStore } from "@/my-scripts/my-stores/my-store-theme";
import React, { memo, useMemo } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type MyBoxProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const MyBox = memo(({ style, children }: MyBoxProps) => {
  const { colors } = useThemeStore();

  const combinedStyles = useMemo(
    () => StyleSheet.flatten([{ backgroundColor: colors.neutral4 }, style]),
    [colors.neutral4, style]
  );

  return <View style={combinedStyles}>{children}</View>;
});

MyBox.displayName = "MyBox";
export default MyBox;
