import React, { memo, useMemo } from "react";
import { StyleSheet, Text, View, ViewProps, ViewStyle } from "react-native";

const DEBUG_LAYOUT = 1;

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

const s = StyleSheet.create({
  debug: {
    borderWidth: 3,
  },
});

const MyView = ({ style, children, ...etc }: ViewProps) => {
  const debugStyle: ViewStyle = useMemo(
    () => ({
      borderColor: COLORS[Math.floor(Math.random() * COLORS.length)],
    }),
    []
  );

  const combinedStyle = useMemo(
    () => (DEBUG_LAYOUT ? [debugStyle, s.debug, style] : style),
    [style, debugStyle]
  );

  return (
    <View style={combinedStyle} {...etc}>
      {children ?? DEFAULT_CHILD}
    </View>
  );
};
export default memo(MyView);
