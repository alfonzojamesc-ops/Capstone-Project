import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { PersonCardOverlay } from "./person-card";
import SlotListHeader from "./slots-header";

export default function SlotList({ block }) {
  const [open, setOpen] = React.useState(false);
  const [personId, setPersonId] = React.useState("");

  return (
    <View style={{ flex: 1 }}>
      <SlotListHeader blockId={block.id}/>
      <FlatList
        style={{
          flex: 1,
        }}
        data={block.slots}
        keyExtractor={(item) => item.slot}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 10,
              paddingHorizontal: 16,
              borderBottomWidth: 1,
              borderColor: "#eee",
            }}
            onPress={() => {
              setPersonId(item.slot);
              setOpen(true);
            }}
          >
            <Image
              source={{ uri: item.picture }}
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                marginRight: 12,
              }}
            />

            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Text style={{ width: 50, fontWeight: "600", color: "#333" }}>
                {item.slot}
              </Text>
              <Text style={{ flexShrink: 1, color: "#555" }}>{item.name}</Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        )}
      />
      <PersonCardOverlay
        visible={open}
        onClose={() => setOpen(false)}
        personId={personId}
      />
    </View>
  );
}
