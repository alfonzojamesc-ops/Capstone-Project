import MySearchBar from "@/my/components/home/my-searchbar";
import MyTitleCard from "@/my/components/home/my-title-card";
import MyLayout from "@/my/components/utils/my-layouter";
import MySafeArea from "@/my/components/utils/my-safeareaview";
import { Image } from "expo-image";
import { StyleSheet, Text } from "react-native";

const backgroundPlaceholder = (
  <Image
    source={require("@/my/assets/images/my-placeholder.jpg")}
    style={{ height: "100%", width: "100%" }}
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
        <MyLayout c="0" style={s.dropDownContainer}>
          {dropdownPlaceholder}
        </MyLayout>
        <MyLayout c="0" style={s.searchBarContainer}>
          {searchbarPlaceholder}
        </MyLayout>
      </MyLayout>
    </MySafeArea>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    position: "absolute",
    margin: 20,
    top: 0,
  },
  dropDownContainer: {
    position: "absolute",
    margin: 20,
    bottom: 75,
    right: 0,
  },
  searchBarContainer: {
    alignItems: "flex-end",
    position: "absolute",
    margin: 20,
    bottom: 0,
    right: 0,
  },
});
