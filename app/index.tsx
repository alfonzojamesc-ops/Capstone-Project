import MyFabMenu from "@/components/index/fab-menu";
import My3DMap from "@/components/index/my-3dmap-view";
import MySearchBar from "@/components/index/search-bar";
import TitleCard from "@/components/index/title-card";
import SafeArea from "@/components/safe-area";
import debugBorders from "@/constants/styles";
import React, { useEffect, useState } from "react";
import { Animated, Keyboard, Platform, StyleSheet, View } from "react-native";

export default function Index() {
  const [keyboardOffset] = useState(new Animated.Value(0));

  useEffect(() => {
    const show = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      (e) => {
        Animated.timing(keyboardOffset, {
          toValue: e.endCoordinates.height,
          duration: 250,
          useNativeDriver: false,
        }).start();
      }
    );

    const hide = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => {
        Animated.timing(keyboardOffset, {
          toValue: 0,
          duration: 250,
          useNativeDriver: false,
        }).start();
      }
    );

    return () => {
      show.remove();
      hide.remove();
    };
  }, [keyboardOffset]);

  return (
    <SafeArea>
      <View style={layout.container}>
        <View style={layout.mapWrapper}>
          <My3DMap />
        </View>

        <View style={layout.overlayWrapper} pointerEvents="box-none">
          <View style={layout.titleWrapper}>
            <TitleCard />
          </View>

          <Animated.View
            style={[
              layout.bottomWrapper,
              { marginBottom: Animated.add(15, keyboardOffset) },
            ]}
            pointerEvents="box-none"
          >
            <View
              style={{ flexDirection: "column", justifyContent: "flex-end" }}
              pointerEvents="box-none"
            >
              <MyFabMenu />
              <View style={{ height: 10 }} /> <MySearchBar />
            </View>
          </Animated.View>
        </View>
      </View>
    </SafeArea>
  );
}

const layout = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  bottomWrapper: {
    margin: 15,
    alignSelf: "flex-end",
    width: "70%",
    maxWidth: 350,

    ...debugBorders(),
  },
});
