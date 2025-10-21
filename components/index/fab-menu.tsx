import { themeDark, themeLight } from "@/constants/theme";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { ComponentProps, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { AppointmentFormOverlay } from "./fab/appointment-form";

type IconName = ComponentProps<typeof MaterialCommunityIcons>["name"];
type Item = {
  key: string;
  label: string;
  icon: IconName;
  onPress: () => void;
};

export const createItems = (param1: () => void): Item[] => [
  {
    key: "reserve",
    label: "Reserve a Slot",
    icon: "map-marker-star",
    onPress: () => router.push("./burial-plots"),
  },
  {
    key: "appointment",
    label: "Book an Appointment",
    icon: "calendar-clock-outline",
    onPress: param1,
  },
  {
    key: "contact",
    label: "Contact Us",
    icon: "phone",
    onPress: () => {
      window.location.href = "tel:+639123456789";
    },
  },
];

const MyFabMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const theme = useColorScheme() === "dark" ? themeDark : themeLight;
  const items = createItems(() => {
    setOpenForm(true);
  });

  return (
    <>
      <Pressable
        style={[styles.fab, { backgroundColor: theme.primary1 }]}
        onPress={() => setOpenMenu(!openMenu)}
      >
        <Feather name="plus" size={42} color={theme.absneutral6} />
      </Pressable>

      {openMenu && (
        <View style={styles.menu}>
          {items.map(({ key, label, icon, onPress }) => (
            <TouchableOpacity
              key={key}
              style={[styles.item, { backgroundColor: theme.neutral6 }]}
              onPress={onPress}
            >
              <MaterialCommunityIcons
                name={icon}
                color={theme.neutral1}
                size={24}
              />
              <Text
                style={[styles.text, { color: theme.neutral1 }]}
                numberOfLines={1}
              >
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <AppointmentFormOverlay
        visible={openForm}
        onClose={() => setOpenForm(false)}
        onSubmit={(data) => console.log("Submitted:", data)}
      />
    </>
  );
};

export default MyFabMenu;

const styles = StyleSheet.create({
  fab: {
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    width: 56,
    height: 56,
  },
  menu: {
    position: "absolute",
    width: 300,
    bottom: 66,
    right: 0,
    gap: 5,
    pointerEvents: "box-none",
  },
  item: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 50,
  },
  text: { fontSize: 18 },
});
