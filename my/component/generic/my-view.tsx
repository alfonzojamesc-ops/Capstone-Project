import React, { memo, useRef } from "react";
import { Text, View, ViewProps, ViewStyle } from "react-native";

const DEBUG_LAYOUT = true;

const COLORS = [
  "black",
  "blue",
  "cyan",
  "green",
  "chartreuse",
  "gold",
  "darkorange",
  "darkred",
  "fuchsia",
  "mediumslateblue",
];

const DEFAULT_CHILD = <Text>Lorem Ipsum</Text>;

function MyView({ style, children, ...props }: ViewProps) {
  if (!DEBUG_LAYOUT) {
    return <View style={style} children={children} {...props} />;
  }
  return <DebugView style={style} children={children} {...props} />;
}
export default memo(MyView);

function DebugView({ style, children, ...props }: ViewProps) {
  const instanceColor = useRef<ViewStyle>({
    borderColor: COLORS[Math.floor(Math.random() * COLORS.length)],
    borderWidth: 3,
  });

  return (
    <View style={[instanceColor.current, style]} {...props}>
      {children ?? DEFAULT_CHILD}
    </View>
  );
}
