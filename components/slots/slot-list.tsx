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

type Slot = {
  slot: string;
  picture: string;
  name: string;
};

type Block = {
  slots: Slot[];
};

type SlotListProps = {
  block: Block;
};

const SlotList: React.FC<SlotListProps> = ({ block }) => {
  const [open, setOpen] = useState(false);
  const [personId, setPersonId] = useState("");

  const renderItem = ({ item }: { item: Slot }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        setPersonId(item.slot);
        setOpen(true);
      }}
    >
      <Image source={{ uri: item.picture }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.slotText}>{item.slot}</Text>
        <Text style={styles.nameText} numberOfLines={1} ellipsizeMode="tail">
          {item.name}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#999" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
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
};

export default SlotList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  slotText: {
    width: 50,
    fontWeight: "600",
    color: "black",
    marginRight: 8,
  },
  nameText: {
    flex: 1,
    fontWeight: "600",
    color: "black",
  },
});
