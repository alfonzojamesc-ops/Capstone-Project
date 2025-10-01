import MyIcon from "@/my/component/generic/my-icon";
import MyView from "@/my/component/generic/my-view";
import { MyPaletteProp } from "@/my/script/my-theme-context";
import { Search, X } from "lucide-react";
import { memo, useState } from "react";
import { Pressable, StyleSheet, TextInput } from "react-native";

function MySearchBar({ palette }: MyPaletteProp) {
  const [searchBarValue, setSearchBarValue] = useState("");
  const style = StyleSheet.create({
    searchBar: {
      width: "100%",

      flexDirection: "row",
      gap: 5,

      borderRadius: 200,
      backgroundColor: palette.absneutral4,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    searchBarPlaceholder: {
      color: palette.absneutral2,
    },
    searchBarTextInput: {
      width: "100%",

      color: palette.absneutral1,
    },
  });
  return (
    <MyView id="search-bar" style={style.searchBar}>
      <MyView>
        <MyIcon name={Search} />
      </MyView>
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
