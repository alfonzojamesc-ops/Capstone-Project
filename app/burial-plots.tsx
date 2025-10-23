import BlockList from "@/components/burial-plots/block-list";
import Header from "@/components/burial-plots/header";
import {SafeArea} from "@/components/safe-area";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function BurialPlots() {
  return (
    <SafeArea>
      <View style={layout.background}>
        <View style={layout.header}>
          <Header />
        </View>
        <View style={layout.listContainer}>
          <BlockList />
        </View>
      </View>
    </SafeArea>
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
