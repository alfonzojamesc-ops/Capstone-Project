import { useSnackbar } from "@/hooks/use-snack-bar";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Clipboard from "expo-clipboard";
import { router } from "expo-router";
import { memo, useCallback, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FormOverlay } from "../fab_menu_items/appointment_form/form-overlay";

type Item = {
  key: string;
  label: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  onPress: () => void;
};

const createItems = (openForm: () => void, contact: () => void): Item[] => [
  {
    key: "reserve",
    label: "Reserve a Slot",
    icon: "map-marker-star",
    onPress: () => router.push("./reservation/phases"),
  },
  {
    key: "appointment",
    label: "Book an Appointment",
    icon: "calendar-clock-outline",
    onPress: openForm,
  },
  {
    key: "contact",
    label: "Call us: +639876543210",
    icon: "phone",
    onPress: contact,
  },
];

export const ListFabMenu = memo(({ visible }: { visible: boolean }) => {
  const [openForm, setOpenForm] = useState(false);
  const { Snackbar, show } = useSnackbar();

  const handleOpenForm = useCallback(() => setOpenForm(true), []);
  const handleCloseForm = useCallback(() => setOpenForm(false), []);

  const items = createItems(handleOpenForm, async () => {
    await Clipboard.setStringAsync("09876543210");
    show("Contact number copied to clipboard!");
    window.location.href = "tel:+639123456789";
  });

  if (!visible) return null;

  return (
    <>
      <View style={styles.menu}>
        {items.map(({ key, label, icon, onPress }) => (
          <TouchableOpacity key={key} style={styles.item} onPress={onPress}>
            <MaterialCommunityIcons name={icon} color="black" size={22} />
            <Text style={styles.text} numberOfLines={1}>
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FormOverlay
        visible={openForm}
        onClose={handleCloseForm}
        onSubmit={(data) => console.log("Submitted:", data)}
      />
      {Snackbar}
    </>
  );
});

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    bottom: 66,
    right: 0,
    width: 280,
    gap: 6,
    pointerEvents: "box-none",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 50,
    gap: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  text: {
    fontSize: 17,
    color: "black",
  },
});
