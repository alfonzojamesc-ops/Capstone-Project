import { back } from "@/scripts/back";
import Entypo from "@expo/vector-icons/Entypo";
import { Pressable, StyleSheet, Text, View } from "react-native";

const MyHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => back("./")}>
          <Entypo
            size={24}
            name="arrow-bold-left"
            color={styles.button.color}
          />
        </Pressable>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>Burial Plots</Text>
      </View>
    </View>
  );
};
export default MyHeader;

const styles = StyleSheet.create({
  header: {
    height: 60,

    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

    backgroundColor: "dodgerblue",
  },
  buttonContainer: {
    marginHorizontal: 10,
  },
  textContainer: {},
  text: {
    color: "black",
    fontSize: 18,
    fontWeight: "500",
  },
  button: {
    color: "black",
  },
});
