import MyBox from "@/my/components/primitive/my-box";
import { useMyTheme } from "@/my/scripts/my-theme-context";
import { Stack } from "expo-router";
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";

type ThemedStackProps = React.ComponentProps<typeof Stack>;

const ThemedStack = (props: ThemedStackProps) => {
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
      {...props}
    />
  );
};
export default ThemedStack;
