import { slotsPerBlock } from "@/my/const/data-related";
import sampleData from "@/my/const/sample-data";
import { themeLight } from "@/my/const/theme";
import { Image } from "expo-image";
import { FlatList, Pressable, StyleSheet, Text } from "react-native";
import MyView from "../../generic/my-view";

const BlockList = () => {
  return (
    <>
      <FlatList
        data={sampleData.block}
        keyExtractor={(block) => block.id}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </>
  );
};
export default BlockList;

type Block = (typeof sampleData.block)[number];
const ListItem = ({ item }: { item: Block }) => {
  return (
    <Pressable style={styles.listItem}>
      <MyView style={styles.cardContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <MyView style={styles.textContainer}>
          <MyView style={styles.cardTitleAndStatusContainer}>
            <Text style={styles.cardTitleText}>
              Block {item.id.toUpperCase()}
            </Text>
            <StatusRenderer slotsOccupied={item.slot.length} />
          </MyView>
          <Text style={styles.cardSubText}>{item.description}</Text>
        </MyView>
      </MyView>
    </Pressable>
  );
};

type StatusProp = {
  slotsOccupied: number;
};
const StatusRenderer = ({ slotsOccupied }: StatusProp) => {
  const ratio = slotsOccupied / slotsPerBlock;
  let barColor = styles.barGreen;
  const parseWidth = () => (ratio * 100).toFixed(0) + "%";

  if (slotsOccupied >= slotsPerBlock) {
    barColor = styles.barRed;
  } else if (slotsOccupied > slotsPerBlock * 0.7) {
    barColor = styles.barYellow;
  }
  return (
    <MyView style={styles.statusRendererContainer}>
      <MyView
      // TODO 12345
        style={[styles.statusBar, barColor, { maxWidth: "100%" }]}
      ></MyView>
    </MyView>
  );
};

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

    marginBottom: 20,
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

    backgroundColor: themeLight.neutral3,
  },
  statusBar: {
    width: "85%",
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
