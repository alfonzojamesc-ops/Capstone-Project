import { MyColorPaletteProp } from "@/my/script/my-color-scheme-context";
import { Search, X } from "lucide-react";
import { memo, useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import MyIcon from "../generic/my-icon";
import MyView from "../generic/my-view";

function MySearchBar({ colorPalette }: MyColorPaletteProp) {
  const [searchBarValue, setSearchBarValue] = useState("");
  const style = StyleSheet.create({
    searchBar: {
      width: "100%",

      flexDirection: "row",
      gap: 5,

      borderRadius: 200,
      backgroundColor: colorPalette.absneutral4,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    searchBarPlaceholder: {
      color: colorPalette.absneutral2,
    },
    searchBarTextInput: {
      width: "100%",

      color: colorPalette.absneutral1,
    },
  });
  return (
    <MyView id="search-bar" style={style.searchBar}>
      <View>
        <MyIcon name={Search} />
      </View>
      <TextInput
        style={style.searchBarTextInput}
        placeholder="Search location"
        placeholderTextColor={style.searchBarPlaceholder.color}
        value={searchBarValue}
        onChangeText={setSearchBarValue}
      />
      <Pressable
        onPress={() => {
          setSearchBarValue("");
        }}
        hitSlop={8}
        style={{ opacity: searchBarValue ? 1.0 : 0 }}
      >
        <MyIcon name={X} />
      </Pressable>
    </MyView>
  );
}
export default memo(MySearchBar);
