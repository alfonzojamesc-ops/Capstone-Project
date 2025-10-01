import { themeDark, themeLight } from "@/my/const/theme";
import useDark from "@/my/hook/use-theme";
import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import MyView from "../generic/my-view";

const WITH_HEADER = false;

const MyStack = (props: MyStackProps) => {
  if (!WITH_HEADER) {
    return <Stack screenOptions={{ headerShown: false }} {...props} />;
  }
  return <WithHeader {...props} />;
};

const WithHeader = (props: MyStackProps) => {
  const isDark = useDark();
  return (
    <Stack
      screenOptions={{
        headerStyle: styles.header,
        headerBackground: () => (
          <MyView style={[styles.headerBox, isDark && styles.headerBoxDark]} />
        ),
        headerTintColor: isDark
          ? styles.headerTintDark.color
          : styles.headerTint.color,
        headerShadowVisible: false,
      }}
      {...props}
    />
  );
};
export default MyStack;

const styles = StyleSheet.create({
  header: {
    backgroundColor: themeLight.neutral4,
  },
  headerDark: {
    backgroundColor: themeDark.neutral4,
  },
  headerTint: {
    color: themeLight.neutral1,
  },
  headerTintDark: {
    color: themeDark.neutral1,
  },
  headerBox: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: themeLight.neutral3,
  },
  headerBoxDark: { borderColor: themeDark.neutral3 },
});

type MyStackProps = React.ComponentProps<typeof Stack>;
