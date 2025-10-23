import { sampleData } from "@/constants/sample-data";
import { Image } from "expo-image";
import { router } from "expo-router";
import React, { memo, useMemo } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  useWindowDimensions,
} from "react-native";

const BlockList = () => {
  const { width } = useWindowDimensions();

  const itemWidth = 450 + 20;
  const numColumns = Math.max(1, Math.floor(width / itemWidth));

  return (
    <FlatList
      key={numColumns}
      data={sampleData.blocks}
      keyExtractor={(block) => block.id}
      renderItem={({ item }) => <ListItem item={item} />}
      numColumns={numColumns}
      contentContainerStyle={styles.listContainer}
      style={[StyleSheet.absoluteFill]}
    />
  );
};

export default BlockList;

type Block = (typeof sampleData.blocks)[number];
const ListItem = memo(({ item }: { item: Block }) => {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => {
        router.push({ pathname: "./slots", params: { block: item.id } });
      }}
    >
      <View style={styles.cardContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <View style={styles.cardTitleAndStatusContainer}>
            <Text style={styles.cardTitleText}>
              Block {item.id.toUpperCase()}
            </Text>
            <StatusRenderer
              slotsOccupied={item.slots.length}
              maxSlots={item.maxSlots}
            />
          </View>
          <Text style={styles.cardSubText}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

type StatusProp = { slotsOccupied: number; maxSlots };
const StatusRenderer = memo(({ slotsOccupied, maxSlots }: StatusProp) => {
  const ratio = useMemo(() => slotsOccupied / maxSlots, [slotsOccupied]);
  const barLength = useMemo(
    () => ({ width: (ratio * 100).toFixed(0) + "%" } as ViewStyle),
    [ratio]
  );

  const barColor = useMemo(() => {
    if (ratio >= 1) return styles.barRed;
    if (ratio >= 0.6) return styles.barYellow;
    return styles.barGreen;
  }, [ratio]);

  return (
    <View style={styles.statusRendererContainer}>
      <View style={[styles.statusBar, barLength, barColor]}></View>
    </View>
  );
});

const styles = StyleSheet.create({
  listContainer: {
    alignItems: "center",
    paddingVertical: 10,
  },
  listItem: {
    maxHeight: 500,
    maxWidth: 450,
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 12,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 6,
  },
  cardContainer: { flex: 1 },
  image: {
    height: 250,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: { margin: 20 },
  cardTitleAndStatusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  cardTitleText: { fontSize: 24, fontWeight: "500" },
  statusRendererContainer: {
    flex: 1,
    maxWidth: 60,
    height: 20,
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "grey",
  },
  statusBar: {
    maxWidth: "85%",
    minWidth: "20%",
    height: "65%",
    margin: 4,
    borderRadius: 10,
  },
  barGreen: { backgroundColor: "limegreen" },
  barYellow: { backgroundColor: "orange" },
  barRed: { backgroundColor: "crimson" },
  cardSubText: { fontSize: 18 },
});
