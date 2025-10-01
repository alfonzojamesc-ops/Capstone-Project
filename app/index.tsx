import MyView from "@/my/component/generic/my-view";
import My3DMap from "@/my/component/page/index/3d-map";
import MyFabMenu from "@/my/component/page/index/fab-menu";
import MySearchBar from "@/my/component/page/index/search-bar";
import TitleCard from "@/my/component/page/index/title-card";
import SafeArea from "@/my/component/util/safe-area";
import React from "react";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <SafeArea>
      <MyView style={layout.backgroundContainer}>
        <My3DMap />
      </MyView>
      <MyView style={layout.titleCardContainer}>
        <TitleCard />
      </MyView>
      <MyView style={layout.fabContainer}>
        <MyFabMenu />
      </MyView>
      <MyView style={layout.searchBarContainer}>
        <MySearchBar />
      </MyView>
    </SafeArea>
  );
}
const layout = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  titleCardContainer: {
    alignSelf: "center",
    position: "absolute",
    margin: 20,
    top: 0,
  },
  fabContainer: {
    position: "absolute",
    margin: 20,
    bottom: 75,
    right: 0,
  },
  searchBarContainer: {
    width: "70%",
    minWidth: 150,
    maxWidth: 350,

    position: "absolute",
    margin: 20,
    bottom: 0,
    right: 0,
  },
});
