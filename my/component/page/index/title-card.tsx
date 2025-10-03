import MyIcon from "@/my/component/generic/my-icon";
import MyView from "@/my/component/generic/my-view";
import { themeDark, themeLight } from "@/my/const/theme";
import useDark from "@/my/hook/use-theme";
import { Cross } from "lucide-react";
import { StyleSheet, Text } from "react-native";

const TitleCard = () => {
  const isDark = useDark();
  return (
    <MyView style={[style.titleCard, isDark && style.titleCardDark]}>
      <MyView>
        <MyIcon
          name={Cross}
          size={style.titleCardIcon.fontSize}
          color={
            isDark ? style.titleCardIconDark.color : style.titleCardIcon.color
          }
        />
      </MyView>
      <MyView style={style.titleCardTexts}>
        <Text style={[style.title, isDark && style.titleDark]}>
          BRS3DNAV: San Jose Cemetery Park
        </Text>
        <Text style={[style.subtitle, isDark && style.subtitleDark]}>
          Burial Reservation System with 3D Navigation
        </Text>
      </MyView>
    </MyView>
  );
};
export default TitleCard;

const style = StyleSheet.create({
  titleCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 10,

    borderRadius: 10,
    backgroundColor: themeLight.neutral6,
  },
  titleCardDark: {
    backgroundColor: themeDark.neutral6,
  },
  titleCardIcon: {
    color: themeLight.neutral1,
    fontSize: 36,
  },
  titleCardIconDark: {
    color: themeDark.neutral1,
  },
  titleCardTexts: {
    flex: 1,
    justifyContent: "center",
    gap: 4,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "500",
    color: themeLight.neutral1,
  },
  titleDark: {
    color: themeDark.neutral1,
  },
  subtitle: {
    fontSize: 16,
    color: themeLight.neutral2,
  },
  subtitleDark: {
    color: themeDark.neutral2,
  },
});
