import { MyPaletteProp } from "@/my/script/my-theme-context";
import { useRouter } from "expo-router";
import { CalendarClock, MapPinCheckInside, Phone, Plus } from "lucide-react";
import { memo, useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import MyIcon from "../generic/my-icon";
import MyTouchableOpacity from "../generic/my-touchableopacity";
import MyView from "../generic/my-view";

function MyFabMenu({ palette }: MyPaletteProp) {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const router = useRouter();
  const style = StyleSheet.create({
    fab: {
      width: 56,
      height: 56,

      justifyContent: "center",
      alignItems: "center",

      borderRadius: 56 / 2,
      backgroundColor: palette.primary1LtoNeutral4D,
    },
    fabIcon: {
      color: palette.absneutral4,
      fontSize: 36,
    },
    menu: {
      position: "absolute",
      bottom: 56 + 10,
      right: 0,

      gap: 5,
    },
    menuItem: {
      alignSelf: "flex-end",

      flexDirection: "row",
      gap: 10,

      paddingHorizontal: 15,

      backgroundColor: palette.neutral4,
    },
    menuItemLines: {
      height: 1,
    },
    menuItemIcon: {
      color: palette.neutral1,
    },
    menuItemText: {
      color: palette.neutral1,

      fontSize: 18,
    },
  });
  return (
    <>
      <Pressable id="fab" style={style.fab} onPress={toggleMenu}>
        <MyIcon
          name={Plus}
          size={style.fabIcon.fontSize}
          color={style.fabIcon.color}
        />
      </Pressable>
      {menuVisible && (
        <MyView id="menu" style={style.menu}>
          <MyTouchableOpacity
            style={style.menuItem}
            onPress={() => router.push("/burial-plots")}
          >
            <MyIcon name={MapPinCheckInside} color={style.menuItemIcon.color} />
            <Text
              style={style.menuItemText}
              numberOfLines={style.menuItemLines.height}
            >
              Reserve a Slot
            </Text>
          </MyTouchableOpacity>
          <MyTouchableOpacity
            style={style.menuItem}
            onPress={() => alert("Item 2 clicked")}
          >
            <MyIcon name={CalendarClock} color={style.menuItemIcon.color} />
            <Text
              style={style.menuItemText}
              numberOfLines={style.menuItemLines.height}
            >
              Book an Appointment
            </Text>
          </MyTouchableOpacity>
          <MyTouchableOpacity
            style={style.menuItem}
            onPress={() => alert("Item 3 clicked")}
          >
            <MyIcon name={Phone} color={style.menuItemIcon.color} />
            <Text
              style={style.menuItemText}
              numberOfLines={style.menuItemLines.height}
            >
              Contact Us
            </Text>
          </MyTouchableOpacity>
        </MyView>
      )}
    </>
  );
}
export default memo(MyFabMenu);
