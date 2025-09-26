import React, { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import cs from "../constants/my-const-styles";

type MySafeAreaProps = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  edges?: ("top" | "bottom" | "left" | "right")[];
};

export const MySafeArea = ({
  children,
  style,
  edges = ["top", "bottom"],
}: MySafeAreaProps) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={edges} style={[cs.flex1, style]}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
