import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

const MySearchBar = () => {
  const [value, setValue] = useState("");

  return (
    <View style={[styles.bar, { backgroundColor: "white" }]}>
      <Feather name="search" color={"black"} size={20} />
      <TextInput
        style={[styles.input, { color: "black" }]}
        placeholder="Search location"
        placeholderTextColor={"grey"}
        value={value}
        onChangeText={setValue}
      />
      {value ? (
        <Pressable onPress={() => setValue("")} hitSlop={8}>
          <Feather name="x" color={"black"} size={20} />
        </Pressable>
      ) : null}
    </View>
  );
};

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
