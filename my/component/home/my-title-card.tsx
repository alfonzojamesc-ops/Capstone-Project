import { MyColorPaletteProp } from "@/my/script/my-color-scheme-context";
import { Cross } from "lucide-react";
import { memo, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import MyIcon from "../generic/my-icon";
import MyView from "../generic/my-view";

function MyTitleCard({ colorPalette }: MyColorPaletteProp) {
  const style = useMemo(
    () =>
      StyleSheet.create({
        titleCard: {
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 10,
          paddingHorizontal: 20,
          gap: 10,

          borderRadius: 10,
          backgroundColor: colorPalette.neutral4,
        },
        titleCardIcon: {
          color: colorPalette.neutral1,
          fontSize: 36,
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
          color: colorPalette.neutral1,
        },
        subtitle: {
          fontSize: 16,
          color: colorPalette.neutral2,
        },
      }),
    [colorPalette]
  );
  return (
    <MyView id="title-card" style={style.titleCard}>
      <View>
        <MyIcon
          name={Cross}
          size={style.titleCardIcon.fontSize}
          color={style.titleCardIcon.color}
        />
      </View>
      <MyView style={style.titleCardTexts}>
        <Text style={style.title}>BRS3DNAV: San Jose Cemetery Park</Text>
        <Text style={style.subtitle}>
          Burial Reservation System with 3D Navigation
        </Text>
      </MyView>
    </MyView>
  );
}
export default memo(MyTitleCard);
