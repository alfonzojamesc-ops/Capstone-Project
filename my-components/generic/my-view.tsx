import React from "react";
import { StyleProp, View, ViewStyle, StyleSheet } from "react-native";

type MyViewProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const MyView = ({ style, children }: MyViewProps) => {
  return <View style={style}>{children}</View>;
};

export default MyView;