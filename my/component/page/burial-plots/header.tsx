import { themeDark, themeLight } from "@/my/const/theme";
import useDark from "@/my/hook/use-theme";
import { router } from "expo-router";
import { ArrowBigLeft } from "lucide-react";
import { Pressable, StyleSheet, Text } from "react-native";
import MyIcon from "../../generic/my-icon";
import MyView from "../../generic/my-view";

const MyHeader = () => {
  const isDark = useDark();
  return (
    <MyView style={[styles.header, isDark && styles.headerDark]}>
      <MyView style={[styles.buttonContainer]}>
        <Pressable onPress={backButtonHandler}>
          <MyIcon
            name={ArrowBigLeft}
            color={isDark ? styles.buttonDark.color : styles.button.color}
          />
        </Pressable>
      </MyView>

      <MyView style={[styles.textContainer]}>
        <Text style={[styles.text, isDark && styles.textDark]}>
          Burial Plots
        </Text>
      </MyView>
    </MyView>
  );
};
export default MyHeader;

function backButtonHandler() {
  router.back();
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
