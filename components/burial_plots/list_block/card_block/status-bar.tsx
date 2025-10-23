import { StyleSheet, View } from "react-native";

export function StatusBar({ percent }: { percent: number }) {
  const color =
    percent >= 100 ? "firebrick" : percent >= 60 ? "orange" : "limegreen";

  return (
    <View style={styles.statusBarContainer}>
      <View
        style={[
          styles.statusBar,
          { width: `${percent * 0.87}%`, backgroundColor: color },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  statusBarContainer: {
    width: 60,
    height: 20,
    justifyContent: "center",
    backgroundColor: "grey",
    borderRadius: 10,
    overflow: "hidden",
  },
  statusBar: {
    height: "65%",
    margin: 4,
    borderRadius: 10,
  },
});
