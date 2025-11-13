import { db } from "@/firebaseConfig";
import { Task } from "@/types/firestore-types";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function write(data: Task) {
  (async () => {
    await addDoc(collection(db, "tasks"), data);
  })();
}

interface Props {
  visible: boolean;
  onClose: () => void;
  targetPlotId: string;
}

export function ReservationFormOverlay({
  visible,
  onClose,
  targetPlotId,
}: Props) {
  const [form, setForm] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    const requiredFields = ["first_name", "last_name", "phone"];
    for (let field of requiredFields) {
      if (!form[field]) {
        alert(`Please fill in the ${field.replace("_", " ")} field.`);
        return;
      }
    }

    const reservation: Task = {
      title: `Reservation: ${form.first_name + " " + form.last_name}`,
      date_created: new Date().toISOString(),
      start: new Date().toISOString().split("T")[0],
      date_due: new Date().toISOString().split("T")[0],
      author: form.first_name + " " + form.middle_name + " " + form.last_name,
      description: `Address: ${form.address};\nPhone: ${form.phone};\nEmail: ${form.email};\nTarget Plot: ${targetPlotId}`,
    };

    try {
      await addDoc(collection(db, "tasks"), reservation);

      alert("Task reservation submitted successfully!");
      onClose();
    } catch (err) {
      console.error("Error saving task reservation:", err);
      alert("Failed to submit task reservation. Please try again later.");
    }
  };

  return (
    <Modal visible={visible} animationType="none" transparent>
      <Pressable style={styles.overlay} onPress={onClose}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={{ width: "100%" }}
        >
          <Pressable onPress={(e) => e.stopPropagation()}>
            <View style={styles.modal}>
              <Text style={styles.title}>Reserve Plot</Text>

              <TextInput
                style={styles.input}
                placeholder="First Name"
                value={form.first_name}
                onChangeText={(v) => handleChange("first_name", v)}
              />
              <TextInput
                style={styles.input}
                placeholder="Middle Name"
                value={form.middle_name}
                onChangeText={(v) => handleChange("middle_name", v)}
              />
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={form.last_name}
                onChangeText={(v) => handleChange("last_name", v)}
              />
              <TextInput
                style={styles.input}
                placeholder="Address"
                value={form.address}
                onChangeText={(v) => handleChange("address", v)}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone"
                keyboardType="phone-pad"
                value={form.phone}
                onChangeText={(v) => handleChange("phone", v)}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={form.email}
                onChangeText={(v) => handleChange("email", v)}
              />

              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={[styles.button, styles.cancel]}
                  onPress={onClose}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.submit]}
                  onPress={handleSubmit}
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Pressable>
        </KeyboardAvoidingView>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modal: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  cancel: {
    backgroundColor: "#ccc",
    marginRight: 10,
  },
  submit: {
    backgroundColor: "#28a745",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
