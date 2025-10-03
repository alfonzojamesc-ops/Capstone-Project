import MyView from "@/my/component/generic/my-view";
import BlockList from "@/my/component/page/burial-plots/block_list";
import MyHeader from "@/my/component/page/burial-plots/header";
import { themeLight } from "@/my/const/theme";
import React from "react";
import { StyleSheet } from "react-native";

export default function BurialPlots() {
  return (
    <MyView style={layout.background}>
      <MyView style={layout.header}>
        <MyHeader/>
      </MyView>
      <MyView style={layout.listContainer}>
        <BlockList/>
      </MyView>
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

    backgroundColor: themeLight.neutral6,
  },
});
