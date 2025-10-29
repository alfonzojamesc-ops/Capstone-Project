import { Link } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AnalyticsPage from "./(tabs)/analytics";
import AccountSettings from "./(tabs)/settings";
import TasksPage from "./(tabs)/tasks";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Analytics");

  const renderContent = () => {
    switch (activeTab) {
      case "Analytics":
        return <AnalyticsPage />;
      case "Tasks":
        return <TasksPage />;
      case "Settings":
        return <AccountSettings />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <Text style={styles.logo}>My Dashboard</Text>
        <View style={styles.nav}>
          <View>
            <TouchableOpacity onPress={() => setActiveTab("Analytics")}>
              <View
                style={[
                  styles.navItem,
                  activeTab === "Analytics" && styles.activeNavItem,
                ]}
              >
                <Text
                  style={[
                    styles.navText,
                    activeTab === "Analytics" && styles.activeNavText,
                  ]}
                >
                  Analytics
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("Tasks")}>
              <View
                style={[
                  styles.navItem,
                  activeTab === "Tasks" && styles.activeNavItem,
                ]}
              >
                <Text
                  style={[
                    styles.navText,
                    activeTab === "Tasks" && styles.activeNavText,
                  ]}
                >
                  Tasks
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => setActiveTab("Settings")}>
              <View
                style={[
                  styles.navItem,
                  activeTab === "Settings" && styles.activeNavItem,
                ]}
              >
                <Text
                  style={[
                    styles.navText,
                    activeTab === "Settings" && styles.activeNavText,
                  ]}
                >
                  Account Settings
                </Text>
              </View>
            </TouchableOpacity>
            <Link href="/" asChild>
              <TouchableOpacity>
                <View style={styles.navItem}>
                  <Text style={styles.navText}>Logout</Text>
                </View>
              </TouchableOpacity>
            </Link>
          </View>
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
    backgroundColor: "#0068d0",
  },
  logo: {
    color: "#ecf0f1",
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
  nav: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 40,
  },
  navItem: {
    height: 30,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  activeNavItem: {
    backgroundColor: "#004080", // Darker shade for active tab
  },
  navText: {
    left: 20,
    color: "#fff", // Changed to white for contrast
    fontSize: 16,
  },
  activeNavText: {
    fontWeight: "bold",
  },
  main: {
    flex: 1,
    backgroundColor: "#f4f6f8",
  },
});
