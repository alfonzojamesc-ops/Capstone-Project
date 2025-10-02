import { themeDark, themeLight } from "@/my/const/theme";
import useDark from "@/my/hook/use-theme";
import { StyleSheet, Text } from "react-native";
import MyView from "../../generic/my-view";

const MyHeader = () => {
  const isDark = useDark();
  return (
    <MyView style={[styles.header, isDark && styles.headerDark]}>
      <MyView style={[styles.buttonContainer]}></MyView>

      <MyView style={[styles.textContainer]}>
        <Text style={[styles.text, isDark && styles.textDark]}>
          Burial Plots
        </Text>
      </MyView>
    </MyView>
  );
};
export default MyHeader;

const styles = StyleSheet.create({
  header: {
    flex: 1,

    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

    backgroundColor: themeLight.primary1,
  },
  headerDark: {
    backgroundColor: themeDark.neutral4,
  },
  buttonContainer: {
    marginHorizontal: 10,
  },
  textContainer: {},
  text: {
    color: themeLight.neutral4,
    fontWeight: "400",
  },
  textDark: {
    color: themeDark.neutral1,
  },
});
