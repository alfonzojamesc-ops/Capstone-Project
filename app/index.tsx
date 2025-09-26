import { useMyTheme } from "@/my/scripts/my-theme-context";
import { Text, View } from "react-native";

export default function Index() {
  const { palette } = useMyTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: palette.neutral4,
      }}
    >
      <Text style={{ color: palette.neutral1 }}>
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
