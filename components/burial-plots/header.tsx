import { themeDark, themeLight } from "@/constants/theme";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
import {
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

const MyHeader = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <View style={[styles.header, isDark && styles.headerDark]}>
      <View style={[styles.buttonContainer]}>
        <Pressable onPress={backButtonHandler}>
          <Entypo
            size={24}
            name="arrow-bold-left"
            color={isDark ? styles.buttonDark.color : styles.button.color}
          />
        </Pressable>
      </View>

      <View style={[styles.textContainer]}>
        <Text style={[styles.text, isDark && styles.textDark]}>
          Burial Plots
        </Text>
      </View>
    </View>
  );
};
export default MyHeader;

function backButtonHandler() {
  if (router.canGoBack()) {
    router.dismissTo("./");
  } else {
    router.replace("./");
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,

    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

    backgroundColor: themeLight.primary1,
  },
  headerDark: {
    backgroundColor: themeDark.primary2,
  },
  buttonContainer: {
    marginHorizontal: 10,
  },
  textContainer: {},
  text: {
    color: themeLight.neutral1,
    fontSize: 18,
    fontWeight: "500",
  },
  textDark: {
    color: themeDark.neutral1,
  },
  button: {
    color: themeLight.neutral1,
  },
  buttonDark: {
    color: themeDark.neutral1,
  },
});
