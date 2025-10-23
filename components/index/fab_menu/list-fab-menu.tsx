import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
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

const createItems = (openForm: () => void): Item[] => [
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
    onPress: openForm,
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

export const ListFabMenu = memo(({ visible }: { visible: boolean }) => {
  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = useCallback(() => setOpenForm(true), []);
  const handleCloseForm = useCallback(() => setOpenForm(false), []);

  const items = createItems(handleOpenForm);

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
