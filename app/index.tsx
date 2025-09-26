import MyHomeTitleCard from "@/my/components/home/my-title-card";
import MyLayout from "@/my/components/my-layouter";
import { MySafeArea } from "@/my/components/my-safeareaview";
import cs from "@/my/constants/my-const-styles";
import { Image } from "expo-image";
import { StyleSheet, Text } from "react-native";

const backgroundPlaceholder = (
  <Image
    source={require("@/my/assets/images/placeholder.jpg")}
    style={cs.whfit}
  />
);
const titlePlaceholder = <MyHomeTitleCard />;
const dropdownPlaceholder = <Text>Dropdown Menu</Text>;
const searchbarPlaceholder = <Text>SearchBar</Text>;

export default function Index() {
  return (
    <MySafeArea>
      <MyLayout style={s.rootContainer}>
        <MyLayout c="0" style={s.backgroundContainer}>
          {backgroundPlaceholder}
        </MyLayout>
        <MyLayout c="0" style={s.foregroundContainer}>
          <MyLayout c="1" style={s.titleContainer}>
            <MyLayout c="2">{titlePlaceholder}</MyLayout>
          </MyLayout>
          <MyLayout c="1" style={s.dropDownAndSearchBarContainer}>
            <MyLayout c="2">{dropdownPlaceholder}</MyLayout>
            <MyLayout c="2">{searchbarPlaceholder}</MyLayout>
          </MyLayout>
        </MyLayout>
      </MyLayout>
    </MySafeArea>
  );
}

const s = StyleSheet.create({
  rootContainer: {
    ...cs.flex1,
  },
  backgroundContainer: {
    ...cs.flex1,
    ...cs.whfit,
  },
  foregroundContainer: {
    ...cs.flex1,
    ...cs.whfit,
    zIndex: 1,
    position: "absolute",
    justifyContent: "space-between",
    padding: "3%",
  },
  titleContainer: { width: "100%" },
  dropDownAndSearchBarContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
