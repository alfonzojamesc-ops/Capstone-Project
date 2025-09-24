import { useThemeStore } from "@/my-scripts/my-stores/my-store-theme";
import { Plus } from "lucide-react";
import React, { memo } from "react";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import MyBox from "./my-generic-box";
import MyIcon from "./my-generic-icon";

type MyFabProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const MyFab = memo(({ style, children }: MyFabProps) => {
  const { colors } = useThemeStore();
  const fallbackIcon = <MyIcon name={Plus} />;

  const combinedStyles = StyleSheet.flatten([
    { backgroundColor: colors.primary1 },
    s.main,
    style,
  ]);

  return (
    <Pressable>
      <MyBox style={combinedStyles} children={children ?? fallbackIcon} />
    </Pressable>
  );
});

MyFab.displayName = "MyFab";
export default MyFab;

const s = StyleSheet.create({
  main: {
    width: 56,
    height: 56,

    borderRadius: 28,

    justifyContent: "center",
    alignItems: "center",
  },
});

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
