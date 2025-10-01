import MyIcon from "@/my/component/generic/my-icon";
import MyView from "@/my/component/generic/my-view";
import { themeDark, themeLight } from "@/my/const/theme";
import useDark from "@/my/hook/use-theme";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { Pressable, StyleSheet, TextInput } from "react-native";

const MySearchBar = () => {
  const [searchBarValue, setSearchBarValue] = useState("");
  const isDark = useDark();

  return (
    <MyView style={[style.searchBar, isDark && style.searchBarDark]}>
      <MyView>
        <MyIcon
          name={Search}
          color={
            isDark ? style.searchBarIconDark.color : style.searchBarIcon.color
          }
        />
      </MyView>
      <TextInput
        style={[
          style.searchBarTextInput,
          isDark && style.searchBarTextInputDark,
        ]}
        placeholder="Search location"
        placeholderTextColor={
          isDark
            ? style.searchBarPlaceholderDark.color
            : style.searchBarPlaceholder.color
        }
        value={searchBarValue}
        onChangeText={setSearchBarValue}
      />
      <Pressable
        onPress={() => setSearchBarValue("")}
        hitSlop={8}
        style={{ opacity: searchBarValue ? 1.0 : 0 }}
      >
        <MyIcon
          name={X}
          color={
            isDark ? style.searchBarIconDark.color : style.searchBarIcon.color
          }
        />
      </Pressable>
    </MyView>
  );
};
export default MySearchBar;

const style = StyleSheet.create({
  searchBar: {
    width: "100%",
    flexDirection: "row",
    gap: 5,
    borderRadius: 200,
    backgroundColor: themeLight.neutral4,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchBarDark: {
    backgroundColor: themeDark.neutral4,
  },
  searchBarTextInput: {
    flex: 1,
    color: themeLight.neutral1,
  },
  searchBarTextInputDark: {
    color: themeDark.neutral1,
  },
  searchBarPlaceholder: {
    color: themeLight.neutral2,
  },
  searchBarPlaceholderDark: {
    color: themeDark.neutral2,
  },
  searchBarIcon: {
    color: themeLight.neutral1,
  },
  searchBarIconDark: {
    color: themeDark.neutral1,
  },
});
