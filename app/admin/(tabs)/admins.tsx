import React, { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export const AdminManagement = () => {
  const [admins, setAdmins] = useState([
    {
      id: 1,
      username: "AdminOne",
      realName: "John Doe",
      password: "pass123",
      creationDate: new Date().toLocaleString(),
    },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [username, setUsername] = useState("");
  const [realName, setRealName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // for toggle

  const handleAddAdmin = () => {
    if (!username || !password || !realName) {
      Alert.alert("Validation", "Please fill all fields.");
      return;
    }
    const newAdmin = {
      id: Date.now(),
      username,
      realName,
      password,
      creationDate: new Date().toLocaleString(),
    };
    setAdmins([...admins, newAdmin]);
    setUsername("");
    setRealName("");
    setPassword("");
  };

  const handleEditAdmin = (admin) => {
    setIsEditing(true);
    setCurrentAdmin(admin);
    setUsername(admin.username);
    setRealName(admin.realName);
    setPassword(admin.password);
    setShowPassword(false); // reset toggle when editing
  };

  const handleUpdateAdmin = () => {
    setAdmins(
      admins.map((admin) =>
        // @ts-expect-error TS(18047): 'currentAdmin' is possibly 'null'.
        admin.id === currentAdmin.id
          ? { ...admin, username, realName, password }
          : admin
      )
    );
    setIsEditing(false);
    setCurrentAdmin(null);
    setUsername("");
    setRealName("");
    setPassword("");
    setShowPassword(false);
  };

  const handleDeleteAdmin = (id) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this admin?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => setAdmins(admins.filter((admin) => admin.id !== id)),
        },
      ]
    );
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentAdmin(null);
    setUsername("");
    setRealName("");
    setPassword("");
    setShowPassword(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.infoContainer}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.realName}>Name: {item.realName}</Text>
        <Text style={styles.email}>
          Password: {"*".repeat(item.password.length)}
        </Text>
        <Text style={styles.creationDate}>Created: {item.creationDate}</Text>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleEditAdmin(item)}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteAdmin(item.id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Admin Accounts</Text>
      <FlatList
        data={admins}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        style={styles.list}
      />

      <View style={styles.formContainer}>
        <Text style={styles.formHeader}>
          {isEditing ? "Edit Admin" : "Add New Admin"}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Real Name"
          value={realName}
          onChangeText={setRealName}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text style={styles.toggleButtonText}>
              {showPassword ? "Hide" : "Show"}
            </Text>
          </TouchableOpacity>
        </View>
        {isEditing ? (
          <View style={styles.buttonsRow}>
            <View style={{ flex: 1 }}>
              <Button
                title="Update"
                color="#4CAF50"
                onPress={handleUpdateAdmin}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Button
                title="Cancel"
                color="#F44336"
                onPress={handleCancelEdit}
              />
            </View>
          </View>
        ) : (
          <Button title="Add" onPress={handleAddAdmin} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  list: {
    flexGrow: 0,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  infoContainer: {
    flex: 3,
  },
  username: {
    fontSize: 16,
    fontWeight: "600",
  },
  realName: {
    fontSize: 14,
    color: "#555",
  },
  email: {
    fontSize: 14,
    color: "#555",
  },
  creationDate: {
    fontSize: 12,
    color: "#999",
  },
  actionsContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
  },
  editButton: {
    marginRight: 10,
    padding: 5,
    backgroundColor: "dodgerblue",
    borderRadius: 4,
  },
  deleteButton: {
    padding: 5,
    backgroundColor: "#F44336",
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
  formContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  formHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "#999",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  toggleButton: {
    width: 55,
    marginLeft: 10,
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 4,
  },
  toggleButtonText: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
  },
  buttonsRow: {
    gap: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default AdminManagement;
