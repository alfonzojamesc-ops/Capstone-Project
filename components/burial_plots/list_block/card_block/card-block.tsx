import { sampleData } from "@/constants/sample-data";
import { Image } from "expo-image";
import { router } from "expo-router";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "./status-bar";

type Block = (typeof sampleData.blocks)[number];

export const CardBlock = memo(({ item }: { item: Block }) => {
  const ratio = item.slots.length / item.maxSlots;
  const percent = Math.min(ratio * 100, 100);

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        router.push({ pathname: "./slots", params: { block: item.id } })
      }
    >
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Block {item.id.toUpperCase()}</Text>
            <StatusBar percent={percent} />
          </View>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    maxWidth: 450,
    margin: 10,
    borderRadius: 12,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 6,
  },
  card: { flex: 1 },
  image: {
    height: 250,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: { margin: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  title: { fontSize: 24, fontWeight: "500" },
  description: { fontSize: 18 },
});
