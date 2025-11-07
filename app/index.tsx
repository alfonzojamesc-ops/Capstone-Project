import MyFabMenu from "@/components/index/fab_menu/fab-menu";
import My3DMap from "@/components/index/my-3dmap-view";
import MySearchFeature from "@/components/index/search/search-feature";
import TitleCard from "@/components/index/title-card";
import { SafeArea } from "@/components/safe-area";
import { moveCamera } from "@/scripts/camera";
import React from "react";
import { Button, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <SafeArea>
      <View style={styles.mapWrapper}>
        <My3DMap />
      </View>

      <View style={styles.overlayWrapper} pointerEvents="box-none">
        <View style={styles.titleWrapper}>
          <TitleCard />
        </View>

        <View style={styles.fabWrapper}>
          <MyFabMenu />
        </View>

        <View style={styles.searchBarWrapper}>
          <MySearchFeature />
        </View>
      </View>
      <View style={{ position: "absolute", top: "50%", left: "50%" }}>
        <Button
          title="test"
          onPress={() => {
            moveCamera([21, 31, 15]);
          }}
        />
      </View>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  mapWrapper: {
    ...StyleSheet.absoluteFillObject,
  },
  overlayWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "space-between",
  },
  titleWrapper: {
    margin: 15,
    alignItems: "center",
  },
  fabWrapper: {
    position: "absolute",
    bottom: 65,
    right: 15,
  },
  searchBarWrapper: {
    position: "absolute",
    bottom: 15,
    right: 15,
    width: "70%",
    maxWidth: 350,
  },
});
