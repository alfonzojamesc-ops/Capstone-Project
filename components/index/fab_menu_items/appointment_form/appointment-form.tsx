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
import { DatePickerField } from "./datepickerfield";

type FormFields = {
  first_name: string;
  middle_name: string;
  last_name: string;
  address: string;
  phone: string;
  email: string;
  message: string;
  date_specified: Date;
};

type AppointmentFormOverlayProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: TaskAppointment) => void;
};

const REQUIRED_FIELDS: (keyof FormFields)[] = [
  "first_name",
  "last_name",
  "message",
  "address",
  "phone",
  "email",
];
const MIN_ADDRESS_LENGTH = 14;
const MIN_DATE_OFFSET_DAYS = 2;
const MIN_DATE = new Date(Date.now() + MIN_DATE_OFFSET_DAYS * 86400000);

const defaultForm: FormFields = {
  first_name: "",
  middle_name: "",
  last_name: "",
  address: "",
  phone: "",
  email: "",
  message: "",
  date_specified: MIN_DATE,
};

export const AppointmentFormOverlay: React.FC<AppointmentFormOverlayProps> = ({
  visible,
  onClose,
  onSubmit,
}) => {
  const [form, setForm] = useState<FormFields>(defaultForm);
  const [touched, setTouched] = useState<Record<keyof FormFields, boolean>>(
    Object.keys(defaultForm).reduce(
      (acc, key) => ({ ...acc, [key]: false }),
      {} as Record<keyof FormFields, boolean>
    )
  );

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

  const setField = (key: keyof FormFields, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

  const validate = () => {
    const missingFields = REQUIRED_FIELDS.filter(
      (field) => !form[field].toString().trim()
    );
    if (missingFields.length) {
      return `Please fill out: ${missingFields
        .join(", ")
        .replaceAll("_", " ")}`;
    }
    if (form.address.trim().length < MIN_ADDRESS_LENGTH) {
      return "Please enter a valid address.";
    }
    if (!/^09\d{9}$/.test(form.phone) && !/^\+639\d{9}$/.test(form.phone)) {
      return "Please enter a valid phone number (starts with 09 or +63, 11 digits).";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "Please enter a valid email address.";
    }
    if (form.date_specified < MIN_DATE) {
      return `Date must be at least ${MIN_DATE_OFFSET_DAYS} days from now.`;
    }
    return null;
  };

  const handleSubmit = () => {
    const error = validate();
    if (error) {
      alert(error);
      return;
    }

    onSubmit({
      date_sent: Timestamp.now().toDate().toDateString(),
      author: {
        first_name: form.first_name,
        middle_name: form.middle_name || undefined,
        last_name: form.last_name,
        address: form.address,
        phone: form.phone,
        email: form.email,
      },
      date_specified: Timestamp.fromDate(form.date_specified)
        .toDate()
        .toDateString(),
      message: form.message,
    });
    handleReset();
  };

  const handleReset = () => {
    setForm(defaultForm);
    setTouched(
      Object.keys(defaultForm).reduce(
        (acc, key) => ({ ...acc, [key]: false }),
        {} as Record<keyof FormFields, boolean>
      )
    );
    onClose();
  };

  const textFields: (keyof FormFields)[] = [
    "first_name",
    "middle_name",
    "last_name",
    "address",
    "phone",
    "email",
    "message",
  ];

  return (
    <Modal visible transparent animationType="none" onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose} />

      <View style={styles.center} pointerEvents="box-none">
        <Animated.View
          style={[styles.card, { transform: [{ translateY: slideAnim }] }]}
        >
          <Text style={styles.title}>Write an Appointment</Text>

          {textFields.map((field) => (
            <TextInput
              key={field}
              placeholder={field.replace("_", " ")}
              placeholderTextColor="grey"
              style={[
                styles.input,
                touched[field] &&
                  !form[field].toString().trim() && { borderColor: "red" },
                field === "message" && { height: 80 },
              ]}
              value={form[field].toString()}
              onChangeText={(v) => setField(field, v)}
              multiline={field === "message"}
            />
          ))}

          <DatePickerField
            date={form.date_specified}
            onDateChange={(date) => setField("date_specified", date)}
            error={touched.date_specified && form.date_specified < MIN_DATE}
            minDate={MIN_DATE}
          />

          <Pressable onPress={handleSubmit} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </Pressable>

          <Pressable onPress={handleReset} style={styles.closeButton}>
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
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "flex-end",
    padding: 20,
  },
  center: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
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
