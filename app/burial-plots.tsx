import MyView from "@/my/component/generic/my-view";
import MyHeader from "@/my/component/page/burial-plots/header";
import React from "react";
import { StyleSheet } from "react-native";

export default function BurialPlots() {
  return (
    <MyView style={layout.background}>
      <MyView style={layout.header}>
        <MyHeader></MyHeader>
      </MyView>
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
