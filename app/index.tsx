import MySearchBar from "@/my/components/home/my-searchbar";
import MyTitleCard from "@/my/components/home/my-title-card";
import MyLayout from "@/my/components/utils/my-layouter";
import MySafeArea from "@/my/components/utils/my-safeareaview";
import cs from "@/my/constants/my-const-styles";
import { Image } from "expo-image";
import { StyleProp, StyleSheet, Text, ViewStyle } from "react-native";

const backgroundPlaceholder = (
  <Image
    source={require("@/my/assets/images/placeholder.jpg")}
    style={cs.whfit}
  />
);
const titlePlaceholder = <MyTitleCard />;
const dropdownPlaceholder = <Text>Dropdown Menu</Text>;
const searchbarPlaceholder = <MySearchBar />;

export default function Index() {
  return (
    <MySafeArea>
      <MyLayout style={s.container}>
        {backgroundPlaceholder}
        <MyLayout c="0" style={s.titleContainer}>
          {titlePlaceholder}
        </MyLayout>
        <MyLayout c="0" style={s.dropDownAndSearchBarContainer}>
          {dropdownPlaceholder}
          {searchbarPlaceholder}
        </MyLayout>
      </MyLayout>
    </MySafeArea>
  );
}

const screenPadding = "2%";
const commonUIStyles: StyleProp<ViewStyle> = {
  position: "absolute",
  left: screenPadding,
  right: screenPadding,
};
const s = StyleSheet.create({
  container: {
    ...cs.flex1,
  },
  titleContainer: {
    top: screenPadding,
    ...commonUIStyles,
  },
  dropDownAndSearchBarContainer: {
    alignItems: "flex-end",
    gap: 30,
    bottom: screenPadding,
    ...commonUIStyles,
  },
});
