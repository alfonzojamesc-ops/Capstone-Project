import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AnalyticsPage from "./(tabs)/analytics";
import TasksPage from "./(tabs)/tasks";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Analytics");

  const renderContent = () => {
    switch (activeTab) {
      case "Analytics":
        return (
          <>
            {/* Placeholder for Analytics Content */}
            <View style={styles.section}>
              <AnalyticsPage />
            </View>
          </>
        );
      case "Tasks":
        return (
          <>
            {/* Placeholder for Tasks Content */}
            <View style={styles.section}>
              <TasksPage />
            </View>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <View style={[styles.sidebar, { justifyContent: "space-between" }]}>
        <View>
          <Text style={styles.logo}>My Dashboard</Text>
          <View style={styles.nav}>
            <TouchableOpacity onPress={() => setActiveTab("Analytics")}>
              <Text
                style={[
                  styles.navItem,
                  activeTab === "Analytics" && styles.activeNavItem,
                ]}
              >
                Analytics
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("Tasks")}>
              <Text
                style={[
                  styles.navItem,
                  activeTab === "Tasks" && styles.activeNavItem,
                ]}
              >
                Tasks
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.navItem}>Account Settings</Text>
          <Text style={styles.navItem}>Logout</Text>
        </View>
      </View>

      <ScrollView style={styles.main}>{renderContent()}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  sidebar: {
    width: 200,
    backgroundColor: "#0059b3",
    padding: 20,
  },
  logo: {
    color: "#ecf0f1",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  nav: {
    marginBottom: 40,
  },
  navItem: {
    color: "#fff", // Changed to white for contrast
    fontSize: 16,
    marginVertical: 10,
  },
  activeNavItem: {
    color: "#fff",
    fontWeight: "bold",
    textDecorationLine: "underline", // Optional: highlight active tab
  },
  main: {
    flex: 1,
    backgroundColor: "#f4f6f8",
  },
  header: {
    padding: 20,
    backgroundColor: "#0059b3", // Match theme color
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
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
