import React, { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type MySafeAreaProps = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  edges?: ("top" | "bottom" | "left" | "right")[];
};

const MySafeArea = ({
  children,
  style,
  edges = ["top", "bottom"],
}: MySafeAreaProps) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={edges} style={[{ flex: 1 }, style]}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default MySafeArea;
