import MyBox from "@/my/components/primitive/my-box";
import MyText from "@/my/components/primitive/my-text";
import { useMyTheme } from "@/my/scripts/my-theme-context";
import { Cross } from "lucide-react";
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import MyIcon from "../primitive/my-icon";
import MyLayout from "../utils/my-layouter";

const MyTitleCard = () => {
  const { palette } = useMyTheme();

  const s = useMemo(
    () =>
      StyleSheet.create({
        container: {
          padding: 16,
          borderRadius: 12,
          width: "100%",
          maxWidth: 500,
        },
        row: {
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        },
        textContainer: {
          flex: 4,
          alignItems: "flex-start",
          gap: 5,
        },
        title: {
          fontSize: 20,
          fontWeight: "bold",
          color: palette.neutral1,
        },
        subtitle: {
          fontSize: 14,
          color: palette.neutral2,
        },
      }),
    [palette.neutral1, palette.neutral2]
  );

  return (
    <MyBox style={[s.container]}>
      <MyLayout style={s.row}>
        <MyIcon name={Cross} size={56} />
        <MyLayout c="0" style={s.textContainer}>
          <MyText style={s.title}>BRS3DVNAV: San Jose Cemetery Park</MyText>
          <MyText style={s.subtitle}>
            Burial Reservation System with 3D Navigation
          </MyText>
        </MyLayout>
      </MyLayout>
    </MyBox>
  );
}
export default MyTitleCard;