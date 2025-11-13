import { db } from "@/firebaseConfig";
import { UserAdmin } from "@/types/firestore-types";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
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
  const [admins, setAdmins] = useState<UserAdmin[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentAdmin, setCurrentAdmin] = useState<UserAdmin | null>(null);
  const [username, setUsername] = useState("");
  const [realName, setRealName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Load admins from Firestore on mount
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const q = query(collection(db, "admins"));
        const snapshot = await getDocs(q);
        const data: UserAdmin[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as UserAdmin[];
        setAdmins(data);
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "Failed to load admins");
      }
    };
    fetchAdmins();
  }, []);

  // Add new admin
  const handleAddAdmin = async () => {
    if (!username || !password) {
      Alert.alert("Validation", "Please fill all fields.");
      return;
    }

    const newAdmin: UserAdmin = {
      level: 1,
      username,
      password_hash: password,
      last_login: "",
    };

    try {
      const docRef = await addDoc(collection(db, "admins"), newAdmin);
      setAdmins([...admins, { ...newAdmin, id: docRef.id }]);
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to add admin.");
    }
  };

  const handleEditAdmin = (admin: UserAdmin) => {
    setIsEditing(true);
    setCurrentAdmin(admin);
    setUsername(admin.username);
    setPassword(admin.password_hash);
    setShowPassword(false);
  };

  const handleUpdateAdmin = async () => {
    if (!currentAdmin || !username || !password) {
      Alert.alert("Validation", "Please fill all fields.");
      return;
    }

    const adminRef = doc(db, "admins", currentAdmin.id);
    const updatedAdmin: UserAdmin = {
      level: currentAdmin.level,
      username,
      password_hash: password,
      last_login: currentAdmin.last_login,
    };

    try {
      await updateDoc(adminRef, updatedAdmin);
      setAdmins(
        admins.map((admin) =>
          admin.id === currentAdmin.id ? { ...admin, ...updatedAdmin } : admin
        )
      );
      setIsEditing(false);
      setCurrentAdmin(null);
      setUsername("");
      setPassword("");
      setShowPassword(false);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to update admin");
    }
  };

  // Delete admin
  const handleDeleteAdmin = (id: string) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this admin?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteDoc(doc(db, "admins", id));
              setAdmins(admins.filter((admin) => admin.id !== id));
            } catch (error) {
              console.error(error);
              Alert.alert("Error", "Failed to delete admin");
            }
          },
        },
      ]
    );
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentAdmin(null);
    setUsername("");
    setPassword("");
    setShowPassword(false);
  };

  const renderItem = ({ item }: { item: UserAdmin }) => (
    <View style={styles.itemContainer}>
      <View style={styles.infoContainer}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.realName}>Level: {item.level}</Text>
        <Text style={styles.email}>
          Password: {"*".repeat(item.password_hash.length)}
        </Text>
        <Text style={styles.creationDate}>
          Last Login: {item.last_login || "Never"}
        </Text>
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
        keyExtractor={(item) => item.id}
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
