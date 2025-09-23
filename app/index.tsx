import { Text } from "@/components/ui/text";
import Bx from "@/my/components/generic/mybox";
import { StyleSheet, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const backgroundPlaceholder = <Image source={require('@/my/assets/images/placeholder.jpg')} style={{height:'100%', width:'100%'}}/>;
// const backgroundPlaceholder = <Text>3D Map</Text>;
const titlePlaceholder = <Text>BRS3DVNAV: San Jose Cemetery Park</Text>;
const dropdownPlaceholder = <Text>FAB Button</Text>;
const searchbarPlaceholder = <Text>Search Bar</Text>;

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top", "bottom"]} style={s.safeAreaView}>
        {/* scope */}
        {/*1*/}
        <Bx style={s.root}>
          <Bx c="0" style={s.backgroundContainer}>
            {backgroundPlaceholder}
          </Bx>
          {/*2 foreground*/}
          <Bx c="1" style={s.main}>
            {/*3 title container*/}
            <Bx c="2" style={s.titleContainer}>
              {titlePlaceholder}
            </Bx>
            {/*3*/}
            {/*4 dropdown and searchbar container*/}
            <Bx c="3" style={s.dropDownAndSearchBarContainer}>
              {/*5 dropdown container*/}
              <Bx c="4">{dropdownPlaceholder}</Bx>
              {/*5*/}
              {/*6 searchbar container*/}
              <Bx c="5">{searchbarPlaceholder}</Bx>
              {/*6*/}
            </Bx>
            {/*4*/}
          </Bx>
          {/*2*/}
        </Bx>
        {/*1*/}
        {/* scope */}
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
    padding: "3%",
  },
  backgroundContainer: {
    height: "100%",
    width: "100%",
  },
  titleContainer: { width: "100%" },
  dropDownAndSearchBarContainer: {
    width: "100%",
    // flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "flex-end"
  },
});
