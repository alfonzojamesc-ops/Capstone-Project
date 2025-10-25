import Feather from "@expo/vector-icons/Feather";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

interface MySearchBarProps {
  value: string;
  onChangeText: (val: string) => void;
}

const MySearchBar = ({ value, onChangeText }: MySearchBarProps) => {
  return (
    <View style={[styles.bar, { backgroundColor: "white" }]}>
      <Feather name="search" color={"black"} size={20} />
      <TextInput
        style={[styles.input, { color: "black" }]}
        placeholder="Search deceased"
        placeholderTextColor={"grey"}
        value={value}
        onChangeText={onChangeText}
      />
      {value ? (
        <Pressable onPress={() => onChangeText("")} hitSlop={8}>
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
