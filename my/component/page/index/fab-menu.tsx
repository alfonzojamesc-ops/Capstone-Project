import MyIcon from "@/my/component/generic/my-icon";
import MyTouchableOpacity from "@/my/component/generic/my-touchableopacity";
import MyView from "@/my/component/generic/my-view";
import { themeDark, themeLight } from "@/my/const/theme";
import useDark from "@/my/hook/use-theme";
import { router } from "expo-router";
import { CalendarClock, MapPinCheckInside, Phone, Plus } from "lucide-react";
import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const MyFabMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => setMenuVisible(!menuVisible);
  const isDark = useDark();

  return (
    <>
      <Pressable
        style={[style.fab, isDark && style.fabDark]}
        onPress={toggleMenu}
      >
        <MyIcon
          name={Plus}
          size={style.fabIcon.fontSize}
          color={isDark ? style.fabIconDark.color : style.fabIcon.color}
        />
      </Pressable>

      {menuVisible && (
        <MyView style={style.menu}>
          {menuItems.map((item) => (
            <MyTouchableOpacity
              key={item.key}
              style={[style.menuItem, isDark && style.menuItemDark]}
              onPress={item.onPress}
            >
              <MyIcon
                name={item.icon}
                color={
                  isDark
                    ? style.menuItemIconDark.color
                    : style.menuItemIcon.color
                }
              />
              <Text
                style={[style.menuItemText, isDark && style.menuItemTextDark]}
                numberOfLines={1}
              >
                {item.label}
              </Text>
            </MyTouchableOpacity>
          ))}
        </MyView>
      )}
    </>
  );
};
export default MyFabMenu;

const menuItems = [
  {
    key: "reserve",
    label: "Reserve a Slot",
    icon: MapPinCheckInside,
    onPress: () => router.push("./burial-plots"),
  },
  {
    key: "appointment",
    label: "Book an Appointment",
    icon: CalendarClock,
    onPress: () => alert("Item 2 clicked"),
  },
  {
    key: "contact",
    label: "Contact Us",
    icon: Phone,
    onPress: () => alert("Item 3 clicked"),
  },
];

const style = StyleSheet.create({
  fab: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 28, // 56 / 2
    backgroundColor: themeLight.primary1,
  },
  fabDark: {
    backgroundColor: themeDark.primary2,
  },
  fabIcon: {
    color: themeLight.neutral6,
    fontSize: 36,
  },
  fabIconDark: {
    color: themeDark.neutral1,
  },
  menu: {
    position: "absolute",
    bottom: 66, // 56 + 10
    right: 0,
    gap: 5,
  },
  menuItem: {
    alignSelf: "flex-end",
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 15,
    backgroundColor: themeLight.neutral6,
  },
  menuItemDark: {
    backgroundColor: themeDark.neutral6,
  },
  menuItemIcon: {
    color: themeLight.neutral1,
  },
  menuItemIconDark: {
    color: themeDark.neutral1,
  },
  menuItemText: {
    color: themeLight.neutral1,
    fontSize: 18,
  },
  menuItemTextDark: {
    color: themeDark.neutral1,
  },
});
