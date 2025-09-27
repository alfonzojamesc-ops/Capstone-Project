import React from "react";
import {
  SafeAreaProvider,
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

const MySafeArea = ({ ...props }: SafeAreaViewProps) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top", "bottom"]} style={{ flex: 1 }} {...props} />
    </SafeAreaProvider>
  );
};
export default MySafeArea;
