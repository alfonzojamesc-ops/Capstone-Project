import Header from "@/components/burial_plots/header";
import ListBlock from "@/components/burial_plots/list_block/list-block";
import { SafeArea } from "@/components/safe-area";
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
          <ListBlock />
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
