import MyView from "@/my/component/generic/my-view";
import { useMyTheme } from "@/my/script/my-theme-context";
import React from "react";
import { StyleSheet } from "react-native";

export default function BurialPlots() {
  const { palette } = useMyTheme();
  return (
    <MyView style={layout.background}>
      <MyView style={layout.header}></MyView>
      <MyView style={layout.listContainer}></MyView>
    </MyView>
  );
}

const layout = StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    height: 60,
  },
  listContainer: {
    flex: 1,
  },
});
