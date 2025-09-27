import MyIcon from "@/my/component/generic/my-icon";
import MyTouchableOpacity from "@/my/component/generic/my-touchableopacity";
import MyView from "@/my/component/generic/my-view";
import My3DMap from "@/my/component/home/my-3d-map";
import MySafeArea from "@/my/component/util/my-safeareaview";
import myTheme from "@/my/const/my-theme";
import { useMyTheme } from "@/my/script/my-theme-context";
import { Cross, Plus, Search, X } from "lucide-react";
import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const { palette } = useMyTheme();
  const rs = useMemo(() => myStyleFactory(palette), [palette]);
  const iconColor = useMemo(() => iconColorFactory(palette), [palette]);
  const fabIconColor = useMemo(() => fabIconColorFactory(palette), [palette]);
  const searchBarPlaceholderColor = useMemo(
    () => searchBarPlaceholderColorFactory(palette),
    [palette]
  );

  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const [searchBarValue, setSearchBarValue] = useState("");

  return (
    <MySafeArea>
      <My3DMap />
      <MyView style={rs.titleCardContainer}>
        <MyView id="title-card" style={rs.titleCard}>
          <View>
            <MyIcon name={Cross} size={titleCardIconSize} color={iconColor} />
          </View>
          <MyView style={rs.titleCardTexts}>
            <Text style={rs.title}>BRS3DNAV: San Jose Cemetery Park</Text>
            <Text style={rs.subtitle}>
              Burial Reservation System with 3D Navigation
            </Text>
          </MyView>
        </MyView>
      </MyView>
      <MyView style={rs.fabContainer}>
        <Pressable id="fab" style={rs.fab} onPress={toggleMenu}>
          <MyIcon name={Plus} size={fabIconSize} color={fabIconColor} />
        </Pressable>
        {menuVisible && (
          <MyView id="menu" style={rs.menu}>
            <MyTouchableOpacity
              style={rs.menuItem}
              onPress={() => alert("Item 1 clicked")}
            >
              <Text
                style={rs.menuItemText}
                numberOfLines={menuItemNumberOfLines}
              >
                Reserve a Slot
              </Text>
            </MyTouchableOpacity>
            <MyTouchableOpacity
              style={rs.menuItem}
              onPress={() => alert("Item 2 clicked")}
            >
              <Text
                style={rs.menuItemText}
                numberOfLines={menuItemNumberOfLines}
              >
                Book an Appointment
              </Text>
            </MyTouchableOpacity>
            <MyTouchableOpacity
              style={rs.menuItem}
              onPress={() => alert("Item 3 clicked")}
            >
              <Text
                style={rs.menuItemText}
                numberOfLines={menuItemNumberOfLines}
              >
                Contact Us
              </Text>
            </MyTouchableOpacity>
          </MyView>
        )}
      </MyView>
      <MyView style={rs.searchBarContainer}>
        <MyView id="search-bar" style={rs.searchBar}>
          <View>
            <MyIcon name={Search} />
          </View>
          <TextInput
            style={rs.searchBarTextInput}
            placeholder="Search location"
            placeholderTextColor={searchBarPlaceholderColor}
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
      </MyView>
    </MySafeArea>
  );
}

// Styles /////////////////////////////
const titleCardIconSize = 36;
const iconColorFactory = (palette: typeof myTheme.colors.light) =>
  palette.neutral1;

const fabIconSize = 36;
const fabIconColorFactory = (palette: typeof myTheme.colors.light) =>
  palette.absneutral4;

const menuItemNumberOfLines = 1;

const searchBarPlaceholderColorFactory = (
  palette: typeof myTheme.colors.light
) => palette.absneutral2;

const myStyleFactory = (palette: typeof myTheme.colors.light) =>
  StyleSheet.create({
    titleCardContainer: {
      alignSelf: "center",
      position: "absolute",
      margin: 20,
      top: 0,
    },
    titleCard: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 20,
      gap: 10,

      borderRadius: 10,
      backgroundColor: palette.neutral4,
    },
    titleCardTexts: {
      flex: 1,
      justifyContent: "center",
      gap: 4,
    },
    title: {
      flex: 1,
      fontSize: 20,
      fontWeight: "500",
      color: palette.neutral1,
    },
    subtitle: {
      fontSize: 16,
      color: palette.neutral2,
    },
    fabContainer: {
      position: "absolute",
      margin: 20,
      bottom: 75,
      right: 0,
    },
    fab: {
      width: 56,
      height: 56,

      justifyContent: "center",
      alignItems: "center",

      borderRadius: 56 / 2,
      backgroundColor: palette.primary1LtoNeutral4D,
    },
    menu: {
      position: "absolute",
      bottom: 56 + 10,
      right: 0,

      gap: 5,
    },
    menuItem: {
      alignSelf: "flex-end",

      paddingHorizontal: 15,

      backgroundColor: palette.neutral4,
    },
    menuItemText: {
      color: palette.neutral1,
    },
    searchBarContainer: {
      width: "70%",
      minWidth: 150,
      maxWidth: 350,

      position: "absolute",
      margin: 20,
      bottom: 0,
      right: 0,
    },
    searchBar: {
      width: "100%",

      flexDirection: "row",
      gap: 5,

      borderRadius: 200,
      backgroundColor: palette.absneutral4,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    searchBarTextInput: {
      width: "100%",

      color: palette.absneutral1,
    },
  });
