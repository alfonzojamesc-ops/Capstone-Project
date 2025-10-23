import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PersonCardOverlay } from "./person-card";
import SlotListHeader from "./slots-header";

export default function SlotList({ block }) {
  const [open, setOpen] = useState(false);
  const [personId, setPersonId] = useState("");

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        setPersonId(item.slot);
        setOpen(true);
      }}
    >
      <Image source={{ uri: item.picture }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.slot}</Text>
        <Text style={[styles.name, { flex: 1 }]}>{item.name}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#999" />
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <SlotListHeader blockId={block.id} />
      <FlatList
        data={block.slots}
        keyExtractor={(item) => item.slot}
        renderItem={renderItem}
      />
      <PersonCardOverlay
        visible={open}
        onClose={() => setOpen(false)}
        personId={personId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    width: 50,
    fontWeight: "600",
    color: "black",
  },
});
