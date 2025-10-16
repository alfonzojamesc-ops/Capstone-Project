import { themeDark, themeLight } from "@/constants/theme";
import useFontSize from "@/hooks/use-fontsize";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import {
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";

const TitleCard = () => {
  const theme = useColorScheme() === "dark" ? themeDark : themeLight;
  return (
    <View
      style={[
        styles.card,
        { backgroundColor: theme.neutral6 },
        useWindowDimensions().width < 260 && {
          flexWrap: "wrap",
          flexDirection: "row",
        },
      ]}
    >
      <FontAwesome5
        name="cross"
        size={useFontSize(30, 34, 2)}
        color={theme.neutral1}
      />
      <View style={styles.texts}>
        <Text
          style={[
            styles.title,
            {
              color: theme.neutral1,
              fontSize: useFontSize(16, 24, 2),
            },
          ]}
        >
          BRS3DNAV: San Jose Cemetery Park
        </Text>
        <Text
          style={[
            styles.subtitle,
            { color: theme.neutral2, fontSize: useFontSize(14, 18) },
          ]}
        >
          Burial Reservation System with 3D Navigation
        </Text>
      </View>
    </View>
  );
};

export default TitleCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 18,
    borderRadius: 10,
    justifyContent: "center",
  },
  texts: { gap: 4, flexShrink: 1 },
  title: { fontWeight: "700" },
  subtitle: { fontWeight: "500" },
});
