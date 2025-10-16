import debugBorders from "@/constants/styles";
import React from "react";
import {
  SafeAreaView,
  SafeAreaViewProps,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const SafeArea = ({ ...props }: SafeAreaViewProps) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      edges={["top", "bottom", "left", "right"]}
      style={{
        flex: 1,
        marginTop: insets.top,
        marginBottom: insets.bottom,
        marginLeft: insets.left,
        marginRight: insets.right,
        ...debugBorders(),
      }}
      {...props}
    />
  );
};
export default SafeArea;
