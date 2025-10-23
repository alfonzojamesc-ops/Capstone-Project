import Feather from "@expo/vector-icons/Feather";
import { memo, useCallback, useState } from "react";
import { Pressable, StyleSheet } from "react-native";

export const ButtonFab = memo(
  ({
    color = "dodgerblue",
    size = 56,
    onToggle,
    style,
  }: {
    color?: string;
    size?: number;
    onToggle?: (isOpen: boolean) => void;
    style?: object;
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handlePress = useCallback(() => {
      setIsOpen((prev) => {
        const next = !prev;
        onToggle?.(next);
        return next;
      });
    }, [onToggle]);

    return (
      <Pressable
        onPress={handlePress}
        style={[
          styles.fab,
          {
            backgroundColor: color,
            width: size,
            height: size,
            borderRadius: size / 2,
          },
          style,
        ]}
      >
        <Feather
          name={isOpen ? "x" : "plus"}
          size={Math.min(size * 0.75, 42)}
          color="white"
        />
      </Pressable>
    );
  }
);

ButtonFab.displayName = "FabButton";

const styles = StyleSheet.create({
  fab: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
