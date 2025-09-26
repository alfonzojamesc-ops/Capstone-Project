import layoutMode from "@/my/constants/my-layout-mode";
import React, { memo } from "react";
import { StyleProp, Text, View, ViewProps, ViewStyle } from "react-native";
import cs from "../constants/my-const-styles";

// bail out before release
const COLOR_MAP: Record<string, string> = {
  "0": "indigo",
  "1": "blue",
  "2": "cyan",
  "3": "green",
  "4": "chartreuse",
  "5": "gold",
  "6": "darkorange",
  "7": "darkred",
  "8": "fuchsia",
  "9": "mediumslateblue",
};
const getColor = (n: string): string => COLOR_MAP[n];

const DEFAULT_CHILD = <Text>Lorem Ipsum</Text>;

type MyLayouterProps = {
  c?: string;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
} & ViewProps;

const MyLayout = memo(
  ({ c = "", style, children = DEFAULT_CHILD, ...props }: MyLayouterProps) => {
    if (!layoutMode)
      return <View style={[cs.hvcenter, style]}>{children}</View>;

    const borderColor = getColor(c[0]) ?? "black";
    const bgColor = getColor(c[1]) ?? "transparent";
    const overrideBorder = borderColor === bgColor;

    return (
      <View
        style={[
          {
            ...cs.hvcenter,
            borderWidth: overrideBorder ? 0 : 3,
            borderColor: borderColor,
            backgroundColor: bgColor,
          },
          style,
        ]}
        {...props}
      >
        {children}
      </View>
    );
  }
);

MyLayout.displayName = "MyLayouter";
export default MyLayout;
