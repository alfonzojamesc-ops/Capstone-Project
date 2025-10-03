import sampleData from "@/my/const/sample-data";
import { themeLight } from "@/my/const/theme";
import { Image } from "expo-image";
import { FlatList, Pressable, StyleSheet, Text } from "react-native";
import MyView from "../../generic/my-view";

const sotsPerBlock = 20;

const BlockList = () => {
  return (
    <>
      <FlatList
        data={sampleData.block}
        keyExtractor={(block) => block.id}
        renderItem={({ item }) => (
          <Pressable style={styles.listItem}>
            <MyView style={styles.cardContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <MyView style={styles.textContainer}>
                <MyView style={styles.cardTitleAndStatusContainer}>
                  <Text style={styles.cardTitleText}>
                    Block {item.id.toUpperCase()}
                  </Text>
                  <Text style={styles.cardStatusText}>
                    {getStatus(item.slot.length)}
                  </Text>
                </MyView>
                <Text style={styles.cardSubText}>{item.description}</Text>
              </MyView>
            </MyView>
          </Pressable>
        )}
      />
    </>
  );
};
export default BlockList;

function getStatus(slotsOccuped: number): "green" | "yellow" | "red" {
  if (slotsOccuped < sotsPerBlock * 0.7) {
    return "green";
  } else if (slotsOccuped == 20) {
    return "red";
  } else {
    return "yellow";
  }
}

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

    marginBottom: 20,
  },
  cardTitleText: {},
  cardStatusText: {},
  cardSubText: {},
});
