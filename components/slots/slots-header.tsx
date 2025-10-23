import { back } from "@/scripts/back";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const SlotListHeader = ({ blockId }) => {
  const iconColor = styles.button.color;

  return (
    <View style={styles.header}>
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => back("./burial-plots")}>
          <Entypo size={24} name="arrow-bold-left" color={iconColor} />
        </Pressable>
      </View>

      <View>
        <Text style={styles.text}>Block {blockId.toUpperCase()} Slots</Text>
      </View>
    </View>
  );
};

export default SlotListHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "dodgerblue",
    height: 60,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginRight: 10,
  },
  text: {
    color: "black",
    fontSize: 18,
    fontWeight: "500",
  },
  button: {
    color: "black",
  },
});
