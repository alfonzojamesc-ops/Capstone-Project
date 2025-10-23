import React from "react";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

export function SafeArea({ ...props }: SafeAreaViewProps) {
  return (
    <SafeAreaView
      edges={["top", "bottom", "left", "right"]}
      style={{ flex: 1 }}
      {...props}
    />
  );
}
