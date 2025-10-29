import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function TasksPage() {
  const [tasks, setTasks] = useState([
    { id: "1", title: "Complete project report", completed: false },
    { id: "2", title: "Attend team meeting", completed: false },
    { id: "3", title: "Review code PRs", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      const newId = (tasks.length + 1).toString();
      setTasks([...tasks, { id: newId, title: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const renderTask = ({ item }) => (
    <TouchableOpacity
      style={[styles.taskItem, item.completed && styles.taskCompleted]}
      onPress={() => toggleTask(item.id)}
    >
      <Text style={styles.taskText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tasks</Text>
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
        contentContainerStyle={styles.list}
      />

      {/* Add New Task */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new task..."
          value={newTask}
          onChangeText={setNewTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
  },
  header: {
    padding: 20,
    backgroundColor: "#2ecc71",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  list: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  taskItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  taskCompleted: {
    backgroundColor: "#d3f9d8",
  },
  taskText: {
    fontSize: 16,
    color: "#34495e",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 40,
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: "#27ae60",
    borderRadius: 8,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
