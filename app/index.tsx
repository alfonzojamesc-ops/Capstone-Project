import MyBox from "@/mycomponents/generic/MyBox";
import MyMenu from "@/mycomponents/index/mymenu";
import MySearchBar from "@/mycomponents/index/mysearchbar";
import MyTitleCard from "@/mycomponents/index/titlecard";
import { Image, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// const backgroundPlaceholder = <Text>3D Map</Text>;
const backgroundPlaceholder = (
  <Image
    source={require("@/assets/images/placeholder.jpg")}
    style={{ height: "100%", width: "100%" }}
  />
);
// const titlePlaceholder = <Text>BRS3DVNAV: San Jose Cemetery Park</Text>;
const titlePlaceholder = <MyTitleCard/>
// const dropdownPlaceholder = <Text>Dropdown Button</Text>;
const dropdownPlaceholder = <MyMenu />;
// const searchbarPlaceholder = <Text>Search Bar</Text>; 
const searchbarPlaceholder = <MySearchBar/>;

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.safeAreaView} edges={["top", "bottom"]}>
        {/*1*/}
        <MyBox style={s.root}>
          <MyBox n={1} style={s.backgroundContainer}>
            {backgroundPlaceholder}
          </MyBox>
          {/*2 foreground*/}
          <MyBox n={1} bg={false} style={s.main}>
            {/*3 title container*/}
            <MyBox n={2} style={s.titleContainer}>
              {titlePlaceholder}
            </MyBox>
            {/*3*/}
            {/*4 dropdown and searchbar container*/}
            <MyBox n={2} style={s.dropDownAndSearchBarContainer}>
              {/*5 dropdown container*/}
              <MyBox n={3}>{dropdownPlaceholder}</MyBox>
              {/*5*/}
              {/*6 searchbar container*/}
              <MyBox n={3}>{searchbarPlaceholder}</MyBox>
              {/*6*/}
            </MyBox>
            {/*4*/}
          </MyBox>
          {/*2*/}
        </MyBox>
        {/*1*/}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const s = StyleSheet.create({
  safeAreaView: { flex: 1 },
  root: { flex: 1 },
  main: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    padding: "5%",
  },
  backgroundContainer: {
    height: "100%",
    width: "100%",
  },
  titleContainer: { width: "100%" },
  dropDownAndSearchBarContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  }
});
