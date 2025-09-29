import { useMyColorScheme } from "@/my/script/my-color-scheme-context";
import { Stack } from "expo-router";
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import MyView from "../generic/my-view";

type ThemedStackProps = React.ComponentProps<typeof Stack>;

const ThemedStack = (props: ThemedStackProps) => {
  const { myColorPalette } = useMyColorScheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        header: {
          backgroundColor: myColorPalette.neutral4,
        },
        headerBox: {
          flex: 1,
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderColor: myColorPalette.neutral3,
        },
      }),
    [myColorPalette.neutral3, myColorPalette.neutral4]
  );

  const HeaderBackground = () => <MyView style={styles.headerBox} />;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: styles.header,
        headerBackground: HeaderBackground,
        headerTintColor: myColorPalette.neutral1,
        headerShadowVisible: false,
      }}
      {...props}
    />
  );
};
export default ThemedStack;
