import { sampleData } from "@/constants/sample-data";
import React from "react";
import { FlatList, StyleSheet, useWindowDimensions } from "react-native";
import { CardBlock } from "./card_block/card-block";

const ListBlock = () => {
  const { width } = useWindowDimensions();
  const numColumns = Math.max(1, Math.floor(width / 470)); // 450 + margins

  return (
    <FlatList
      key={numColumns}
      data={sampleData.blocks}
      keyExtractor={(block) => block.id}
      renderItem={({ item }) => <CardBlock item={item} />}
      numColumns={numColumns}
      contentContainerStyle={styles.listContainer}
      style={styles.list}
    />
  );
};

export default ListBlock;

const styles = StyleSheet.create({
  list: { flex: 1 },
  listContainer: {
    alignItems: "center",
    paddingVertical: 10,
  },
});
