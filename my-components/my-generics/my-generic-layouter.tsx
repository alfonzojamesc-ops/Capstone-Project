import layoutMode from "@/my-constants/my-const-layout-mode";
import React, { memo, useMemo } from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import MyBox from "./my-generic-box";

type MyLayouterProps = {
  c?: string;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const COLOR_MAP: Record<string, string> = {
  "0": "black",
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

const getColor = (n: string): string => COLOR_MAP[n] ?? "transparent";

const MyLayouter = memo(({ c = "0", style, children = <Text>
      Lorem Ipsum
    </Text> }: MyLayouterProps) => {
  if (!layoutMode) return <MyBox style={style}>{children}</MyBox>;

  const [borderToken, bgToken] = useMemo(() => [c[0], c[1] ?? "0"], [c]);
  const overrideBorder = borderToken === bgToken;

  const layoutStyle = useMemo(() => {
    return StyleSheet.flatten([
      {
        borderWidth: overrideBorder ? 0 : 3,
        borderColor: getColor(borderToken),
        backgroundColor: getColor(bgToken),
      },
      style,
    ]);
  }, [overrideBorder, borderToken, bgToken, style]);

  return <View style={layoutStyle}>{children}</View>;
});

MyLayouter.displayName = "MyLayouter";
export default MyLayouter;
