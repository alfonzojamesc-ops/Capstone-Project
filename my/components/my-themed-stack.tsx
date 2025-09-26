import { Stack } from "expo-router";
import { useMyTheme } from "my/scripts/my-theme-context";
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import MyBox from "./primitive/my-box";

export function ThemedStack() {
  const { palette } = useMyTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        header: {
          backgroundColor: palette.neutral4,
        },
        headerBox: {
          flex: 1,
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderColor: palette.neutral3,
        },
      }),
    [palette.neutral3, palette.neutral4]
  );

  const HeaderBackground = () => <MyBox style={styles.headerBox} />;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: styles.header,
        headerBackground: HeaderBackground,
        headerTintColor: palette.neutral1,
        headerShadowVisible: false,
      }}
    />
  );
}
