import { themeDark, themeLight } from "@/constants/theme";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
} from "react-native";

const MySearchBar = () => {
  const [value, setValue] = useState("");
  const theme = useColorScheme() === "dark" ? themeDark : themeLight;

  return (
    <View style={[styles.bar, { backgroundColor: theme.neutral6 }]}>
      <Feather name="search" color={theme.neutral1} size={20} />
      <TextInput
        style={[styles.input, { color: theme.neutral1 }]}
        placeholder="Search location"
        placeholderTextColor={theme.neutral3}
        value={value}
        onChangeText={setValue}
      />
      {value ? (
        <Pressable onPress={() => setValue("")} hitSlop={8}>
          <Feather name="x" color={theme.neutral1} size={20} />
        </Pressable>
      ) : null}
    </View>
  );
};

MySearchBar.displayName = "MySearchBar";

export default MySearchBar;

const styles = StyleSheet.create({
  bar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 200,
    paddingHorizontal: 15,
    paddingVertical: 5,
    overflow: "hidden",
  },
  input: { flex: 1 },
});
