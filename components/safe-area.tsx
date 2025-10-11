import React from "react";
import {
  SafeAreaProvider,
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

function SafeArea({ ...props }: SafeAreaViewProps) {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        edges={["top", "bottom", "left", "right"]}
        style={{ flex: 1 }}
        {...props}
      />
    </SafeAreaProvider>
  );
}
export default SafeArea;
