import cs from "@/my/constants/my-const-styles";
import { useMyTheme } from "@/my/scripts/my-theme-context";
import { Search, X } from "lucide-react";
import { forwardRef, useImperativeHandle, useMemo, useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import MyBox from "../primitive/my-box";
import MyIcon from "../primitive/my-icon";

export type MySearchBarRef = {
  getValue: () => string;
  clear: () => void;
};

type Props = {
  id?: string;
};

const MySearchBar = forwardRef<MySearchBarRef, Props>((props, ref) => {
  const [inputValue, setValue] = useState("");
  const { palette } = useMyTheme();
  const iconSize = 24;
  useImperativeHandle(ref, () => ({
    getValue: () => inputValue,
    clear: () => setValue(""),
  }));

  const s = useMemo(
    () =>
      StyleSheet.create({
        container: {
          ...cs.rounded,
          flexDirection: "row",
          padding: 3,
          paddingHorizontal: 9,

          borderWidth: 2,
          borderColor: palette.neutral2,

          width: "50%",
          minWidth: 150,
          maxWidth: 300,
        },
        textInput: {
          width: "100%",
        },
      }),
    [palette.neutral2]
  );

  return (
    <MyBox style={s.container}>
      <View>
        <MyIcon name={Search} size={iconSize} />
      </View>
      <TextInput
        placeholder="Search burial info..."
        placeholderTextColor={palette.neutral2}
        value={inputValue}
        onChangeText={setValue}
        style={s.textInput}
      />
      <Pressable
        style={{ display: inputValue.length > 0 ? "contents" : "none" }}
        onPress={() => setValue("")}
        focusable={false}
      >
        <MyIcon name={X} size={iconSize} />
      </Pressable>
    </MyBox>
  );
});
MySearchBar.displayName = "MySearchBar";
export default MySearchBar;
