import My3DMap from "@/components/index/my-3dmap-view";
import MyFabMenu from "@/components/index/fab-menu";
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
  }, []);

  return (
    <SafeArea>
      <View style={layout.backgroundContainer}>
        <My3DMap />
      </View>

      <View style={layout.titleCardContainer}>
        <TitleCard />
      </View>

      <Animated.View
        style={[
          layout.fabContainer,
          { bottom: Animated.add(85, keyboardOffset) },
        ]}
      >
        <MyFabMenu />
      </Animated.View>

      <Animated.View
        style={[
          layout.searchBarContainer,
          { bottom: Animated.add(25, keyboardOffset) },
        ]}
      >
        <MySearchBar />
      </Animated.View>
    </SafeArea>
  );
}

const layout = StyleSheet.create({
  backgroundContainer: {
    // ...debugBorders(),
    flex: 1,
  },
  titleCardContainer: {
    position: "absolute",
    top: 4,

    width: "100%",
    pointerEvents: "box-none",

    paddingHorizontal: 15,
    alignItems: "center",

    ...debugBorders(),
  },
  fabContainer: {
    position: "absolute",
    right: 15,
  },
  searchBarContainer: {
    position: "absolute",
    right: 15,
    width: "70%",
    maxWidth: 350,
  },
});
