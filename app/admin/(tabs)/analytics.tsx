import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function AnalyticsPage() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Analytics Dashboard</Text>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.sectionTitle}>Performance Chart</Text>
        <View style={styles.chartPlaceholder}>
          <Text style={styles.placeholderText}>Chart Area</Text>
        </View>
      </View>

      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Users</Text>
          <Text style={styles.cardValue}>1,234</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Active Sessions</Text>
          <Text style={styles.cardValue}>567</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Conversion Rate</Text>
          <Text style={styles.cardValue}>23%</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>User Engagement</Text>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>Engagement Chart</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
  },
  header: {
    padding: 20,
    backgroundColor: "#34495e",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ecf0f1",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  chartContainer: {
    padding: 20,
  },
  chartPlaceholder: {
    height: 200,
    backgroundColor: "#bdc3c7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    width: "30%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 14,
    color: "#7f8c8d",
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  section: {
    padding: 20,
  },
  placeholder: {
    height: 150,
    backgroundColor: "#95a5a6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  placeholderText: {
    fontSize: 16,
    color: "#2c3e50",
  },
});
