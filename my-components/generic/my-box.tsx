import layoutMode from "@/my-constants/my-layout-mode";
import React from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";

function getColor(n: string): string {
  switch (n) {
    case "0":
      return "black";
    case "1":
      return "blue";
    case "2":
      return "cyan";
    case "3":
      return "green";
    case "4":
      return "chartreuse";
    case "5":
      return "gold";
    case "6":
      return "darkorange";
    case "7":
      return "darkred";
    case "8":
      return "fuchsia";
    case "9":
      return "mediumslateblue";
    default:
      return "transparent";
  }
}

const Bx = ({
  c = "0", // digit 1 = bordercolor i.e "0", digit 2 = bgcolor i.e. "00"
  style,
  children = <Text>Lorem Ipsum</Text>,
}: {
  c?: string;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}) => {
  //
  const pattern = Array.from(c);
  const hasBackground = pattern[1] != null;
  const sameColor = pattern[0] == pattern[1];
  const overrideBorder = hasBackground && sameColor;

  return (
    <View
      children={children}
      style={[
        layoutMode
          ? {
              borderWidth: overrideBorder ? 0 : 3,
              borderColor: getColor(pattern[0]),
              backgroundColor: getColor(pattern[1]),
            }
          : {},
        {
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        style,
      ]}
    />
  );
};
export default Bx;