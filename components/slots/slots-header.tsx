import { back } from "@/scripts/back";
import Entypo from "@expo/vector-icons/Entypo";
import {
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

const SlotListHeader = ({ blockId }) => {
  const isDark = useColorScheme() === "dark";
  return (
    <View style={[styles.header, isDark && styles.headerDark]}>
      <View style={[styles.buttonContainer]}>
        <Pressable onPress={() => back("./burial-plots")}>
          <Entypo
            size={24}
            name="arrow-bold-left"
            color={styles.button.color}
          />
        </Pressable>
      </View>

      <View style={[styles.textContainer]}>
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
  },
  headerDark: {
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
