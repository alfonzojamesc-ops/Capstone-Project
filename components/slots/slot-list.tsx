import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

export default function SlotList({ block }) {
  return (
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
        >
          {/* Profile Image */}
          <Image
            source={{ uri: item.picture }}
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              marginRight: 12,
            }}
          />

          {/* Slot Code + Name */}
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Text style={{ width: 50, fontWeight: "600", color: "#333" }}>
              {item.slot}
            </Text>
            <Text style={{ flexShrink: 1, color: "#555" }}>{item.name}</Text>
          </View>

          {/* Right Arrow */}
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>
      )}
    />
  );
}
