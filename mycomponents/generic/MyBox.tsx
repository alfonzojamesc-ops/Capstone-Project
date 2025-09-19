import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

const enableBackground = false;
const enableLayouting = false;

const MyBox = ({
  children = <Text>Lorem Ipsum</Text>,
  f,
  n = 0,
  style,
}: BoxProps) => {
  return enableLayouting ? (
    <View
      style={[
        s.container,
        f != null ? { flex: f } : null,
        {
          borderWidth: enableBackground ? 0 : 3,
          borderColor: getColor(n) == getColor(0) ? "black" : getColor(n),
          backgroundColor: enableBackground ? getColor(n) : getColor(0),
        },
        style,
      ]}
    >
      {children}
    </View>
  ) : (
    <View style={[s.container, style]}>{children}</View>
  );
};
export default MyBox;

type BoxProps = {
  children?: React.ReactNode;
  f?: number;
  n?: number;
  bg?: boolean;
  style?: ViewStyle | ViewStyle[];
};

function getColor(n: number): string {
  switch (n) {
    case 0:
      return "transparent";
    case 1:
      return "blue";
    case 2:
      return "cyan";
    case 3:
      return "green";
    case 4:
      return "chartreuse";
    case 5:
      return "gold";
    case 6:
      return "darkorange";
    case 7:
      return "darkred";
    case 8:
      return "fuchsia";
    case 9:
      return "mediumslateblue";
    default:
      return "gray";
  }
}

const s = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",

    overflow: "hidden",
  },
});
