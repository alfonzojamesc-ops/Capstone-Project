import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <View style={[styles.sidebar, { justifyContent: "space-between" }]}>
        <View>
          <Text style={styles.logo}>My Dashboard</Text>
          <View style={styles.nav}>
            <Text style={styles.navItem}>Analytics</Text>
            <Text style={styles.navItem}>Tasks</Text>
          </View>
        </View>
        <View>
          <Text style={styles.navItem}>Account Settings</Text>
          <Text style={styles.navItem}>Logout</Text>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.main}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Dashboard Header</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Placeholder for Notifications</Text>
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Notifications Area</Text>
          </View>
        </View>

        {/* Content Sections */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Placeholder for Charts</Text>
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Chart Area</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  sidebar: {
    width: 250,
    backgroundColor: "#2c3e50",
    padding: 20,
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ecf0f1",
    marginBottom: 30,
  },
  nav: {
    flexDirection: "column",
  },
  navItem: {
    color: "#ecf0f1",
    fontSize: 16,
    marginBottom: 15,
  },
  main: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  header: {
    padding: 20,
    backgroundColor: "#bdc3c7",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  section: {
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  placeholder: {
    height: 200,
    backgroundColor: "#95a5a6",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 16,
    color: "#2c3e50",
  },
});
