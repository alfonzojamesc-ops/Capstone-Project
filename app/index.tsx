import MyFabMenu from "@/components/index/fab_menu/fab-menu";
import My3DMap from "@/components/index/my-3dmap-view";
import MySearchFeature from "@/components/index/search/search-feature";
import TitleCard from "@/components/index/title-card";
import { SafeArea } from "@/components/safe-area";
import { useCamera } from "@/hooks/camera-context";
import React, { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { demandedCameraPosition, demandedCameraTarget } = useCamera();
  useEffect(() => {
    console.log(demandedCameraTarget);
  }, [demandedCameraTarget]);
  return (
    <SafeArea>
      <View style={styles.mapWrapper}>
        <My3DMap />
        <Pressable
          style={{ position: "absolute", top: "50%", left: "50%" }}
          onPress={() => {
            console.log(demandedCameraTarget);
          }}
        >
          <Text>Log Camera Pos</Text>
        </Pressable>
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
