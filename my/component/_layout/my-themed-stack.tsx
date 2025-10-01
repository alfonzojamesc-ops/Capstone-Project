import { useMyTheme } from "@/my/script/my-theme-context";
import { Stack } from "expo-router";
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import MyView from "../generic/my-view";

const WITH_HEADER = false;

type MyStackProps = React.ComponentProps<typeof Stack>;

export default function MyStack(props: MyStackProps) {
  if (!WITH_HEADER) {
    return <Stack screenOptions={{ headerShown: false }} {...props} />;
  }
  return <WithHeader {...props} />;
}

function WithHeader(props: MyStackProps) {
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
    [palette]
  );

  return (
    <Stack
      screenOptions={{
        headerStyle: styles.header,
        headerBackground: () => <MyView style={styles.headerBox} />,
        headerTintColor: palette.neutral1,
        headerShadowVisible: false,
      }}
      {...props}
    />
  );
}
