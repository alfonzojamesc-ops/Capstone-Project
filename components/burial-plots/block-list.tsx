import { sampleData, slotsPerBlock } from "@/constants/sample-data";
import { themeLight } from "@/constants/theme";
import { Image } from "expo-image";
import { memo, useMemo } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

const BlockList = () => {
  return (
    <>
      <FlatList
        data={sampleData.blocks}
        keyExtractor={(block) => block.id}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </>
  );
};
export default BlockList;

type Block = (typeof sampleData.blocks)[number];
const ListItem = memo(({ item }: { item: Block }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.cardContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <View style={styles.cardTitleAndStatusContainer}>
            <Text style={styles.cardTitleText}>
              Block {item.id.toUpperCase()}
            </Text>
            <StatusRenderer slotsOccupied={item.slots.length} />
          </View>
          <Text style={styles.cardSubText}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

type StatusProp = {
  slotsOccupied: number;
};
const StatusRenderer = memo(({ slotsOccupied }: StatusProp) => {
  const ratio = useMemo(() => slotsOccupied / slotsPerBlock, [slotsOccupied]);
  const barLength = useMemo(
    () =>
      ({
        width: (ratio * 100).toFixed(0) + "%",
      } as ViewStyle),
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
  listItem: {
    height: 500,

    marginHorizontal: 30,
    marginVertical: 20,

    borderRadius: 12,

    backgroundColor: themeLight.neutral6,

    shadowColor: "gray",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 6,
  },
  cardContainer: {
    flex: 1,
  },
  image: {
    height: 300,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    margin: 20,
  },
  cardTitleAndStatusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 15,
  },
  cardTitleText: {
    fontSize: 24,
    fontWeight: "500",
  },
  statusRendererContainer: {
    flex: 1,
    maxWidth: 60,
    height: 20,

    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "hidden",

    borderRadius: 10,

    backgroundColor: themeLight.neutral2,
  },
  statusBar: {
    maxWidth: "85%",
    minWidth: "20%",
    height: "65%",

    margin: 4,

    borderRadius: 10,
  },
  barGreen: {
    backgroundColor: themeLight.success,
  },
  barYellow: {
    backgroundColor: themeLight.warning,
  },
  barRed: {
    backgroundColor: themeLight.error,
  },
  cardSubText: {
    fontSize: 18,
  },
});
