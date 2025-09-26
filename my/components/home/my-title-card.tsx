import MyBox from "@/my/components/primitive/my-box";
import MyText from "@/my/components/primitive/my-text";
import cs from "@/my/constants/my-const-styles";
import { useMyTheme } from "@/my/scripts/my-theme-context";
import { Cross } from "lucide-react";
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import MyLayout from "../my-layouter";
import MyIcon from "../primitive/my-icon";

export default function MyHomeTitleCard() {
  const { palette } = useMyTheme();

  const styles = useMemo(
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
        iconWrapper: {
          flex: 1,
          ...cs.hvcenter,
        },
        textContainer: {
          flex: 4,
          alignItems: "flex-start",
          gap: 5,
        },
        titleWrapper: {},
        title: {
          fontSize: 20,
          fontWeight: "bold",
          color: palette.neutral1,
        },
        subtitleWrapper: {},
        subtitle: {
          fontSize: 14,
          color: palette.neutral2,
        },
      }),
    [palette.neutral1, palette.neutral2]
  );

  return (
    <MyBox style={[styles.container]}>
      <MyLayout style={styles.row}>
        <MyLayout c="0" style={styles.iconWrapper}>
          <MyIcon name={Cross} size={56} />
        </MyLayout>
        <MyLayout c="0" style={styles.textContainer}>
          <MyLayout c="1" style={styles.titleWrapper}>
            <MyText style={styles.title}>
              BRS3DVNAV: San Jose Cemetery Park
            </MyText>
          </MyLayout>
          <MyLayout c="1" style={styles.subtitleWrapper}>
            <MyText style={styles.subtitle}>
              Burial Reservation System with 3D Navigation
            </MyText>
          </MyLayout>
        </MyLayout>
      </MyLayout>
    </MyBox>
  );
}
