import { TaskAppointment } from "@/types/firestore-types";
import { Timestamp } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type AppointmentFormOverlayProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: TaskAppointment) => void;
};

export const AppointmentFormOverlay: React.FC<AppointmentFormOverlayProps> = ({
  visible,
  onClose,
  onSubmit,
}) => {
  const [form, setForm] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    address: "",
    phone: "",
    email: "",
    message: "",
    date_specified: new Date(),
  });

  const [isChanged, setChanged] = useState({
    first_name: false,
    middle_name: false,
    last_name: false,
    address: false,
    phone: false,
    email: false,
    message: false,
    date_specified: false,
  });

  const slideAnim = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : 300,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  if (!visible) return null;

  const handleChange = (key: string, value: any) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = () => {
    const required = [
      "first_name",
      "last_name",
      "message",
      "address",
      "phone",
      "email",
    ];
    // @ts-expect-error
    const empty = required.filter((f) => !form[f as keyof typeof form].trim());

    if (empty.length > 0) {
      alert(`Please fill out: ${empty.join(", ").replaceAll("_", " ")}`);
      return;
    }

    const minDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
    if (form.date_specified < minDate) {
      alert("Date must be at least 2 days from now.");
      setChanged((f) => ({ ...f, date_specified: true }));
      return;
    }

    const payload: TaskAppointment = {
      date_sent: Timestamp.now(),
      author: {
        first_name: form.first_name,
        middle_name: form.middle_name || undefined,
        last_name: form.last_name,
        address: form.address || undefined,
        phone: form.phone || undefined,
        email: form.email || undefined,
      },
      date_specified: Timestamp.fromDate(new Date(form.date_specified)),
      message: form.message,
    };
    onSubmit(payload);
    onClose();
  };

  return (
    <Modal visible transparent animationType="none" onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose} />

      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          justifyContent: "center",
          alignItems: "center",
        }}
        pointerEvents="box-none"
      >
        <Animated.View
          style={[styles.card, { transform: [{ translateY: slideAnim }] }]}
        >
          <Text style={styles.title}>Write Appointment</Text>

          {[
            "first_name",
            "middle_name",
            "last_name",
            "address",
            "phone",
            "email",
          ].map((field) => (
            <TextInput
              key={field}
              placeholder={field.replace("_", " ")}
              placeholderTextColor="gray"
              style={[
                styles.input,
                isChanged[field] &&
                  form[field] === "" && { borderColor: "red" },
              ]}
              value={form[field as keyof typeof form] as string}
              onChangeText={(v) => {
                handleChange(field, v);
                setChanged((fields) => ({
                  ...fields,
                  [field]: true,
                }));
              }}
            />
          ))}

          <input
            type="date"
            value={form.date_specified.toISOString().split("T")[0]}
            onChange={(e) =>
              handleChange("date_specified", new Date(e.target.value))
            }
            style={{
              ...StyleSheet.flatten(styles.input),
              color: "#000",
              ...(isChanged.date_specified &&
                form.date_specified <
                  new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) && {
                  borderColor: "red",
                }),
            }}
          />
          <TextInput
            placeholder="Message"
            multiline
            placeholderTextColor="gray"
            style={[
              styles.input,
              { height: 80 },
              isChanged.message &&
                form.message === "" && { borderColor: "red" },
            ]}
            value={form.message}
            onChangeText={(v) => {
              handleChange("message", v);
              setChanged((fields) => ({ ...fields, message: true }));
            }}
          />

          <Pressable
            onPress={() => {
              handleSubmit();
              setChanged(
                (fields) =>
                  Object.fromEntries(
                    Object.entries(fields).map(([key]) => [key, true])
                  ) as typeof fields
              );
            }}
            style={styles.submitButton}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              onClose();
              setForm({
                first_name: "",
                middle_name: "",
                last_name: "",
                address: "",
                phone: "",
                email: "",
                message: "",
                date_specified: new Date(),
              });
              setChanged({
                first_name: false,
                middle_name: false,
                last_name: false,
                address: false,
                phone: false,
                email: false,
                message: false,
                date_specified: false,
              });
            }}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>Cancel</Text>
          </Pressable>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "flex-end",
    padding: 20,
    cursor: "pointer",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    elevation: 5,
    width: "70%",
    minWidth: 260,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  submitButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 8,
  },
  submitButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: "#ccc",
    paddingVertical: 10,
    borderRadius: 8,
  },
  closeButtonText: {
    textAlign: "center",
    color: "#333",
  },
});
