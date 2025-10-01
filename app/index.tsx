import MyView from "@/my/component/generic/my-view";
import My3DMap from "@/my/component/home/my-3d-map";
import MyFabMenu from "@/my/component/home/my-fab-menu";
import MySearchBar from "@/my/component/home/my-search-bar";
import MyTitleCard from "@/my/component/home/my-title-card";
import MySafeArea from "@/my/component/util/my-safearea";
import { useMyTheme } from "@/my/script/my-theme-context";
import React from "react";
import { StyleSheet } from "react-native";

export default function Index() {
  const { palette } = useMyTheme();
  return (
    <MySafeArea>
      <MyView style={myLayoutStyle.backgroundContainer}>
        <My3DMap />
      </MyView>
      <MyView style={myLayoutStyle.titleCardContainer}>
        <MyTitleCard palette={palette} />
      </MyView>
      <MyView style={myLayoutStyle.fabContainer}>
        <MyFabMenu palette={palette} />
      </MyView>
      <MyView style={myLayoutStyle.searchBarContainer}>
        <MySearchBar palette={palette} />
      </MyView>
    </MySafeArea>
  );
}
const myLayoutStyle = StyleSheet.create({
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
