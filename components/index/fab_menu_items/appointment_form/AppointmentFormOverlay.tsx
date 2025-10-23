// src/components/AppointmentFormOverlay.tsx
import { TaskAppointment } from "@/types/firestore-types";
import { Timestamp } from "firebase/firestore";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { DatePickerField } from "./datepickerfield";
import { FormFields, TextFieldsInput } from "./input_fields/TextfieldInput";
import {
  MIN_DATE,
  validateAppointmentForm,
} from "./input_fields/validateAppointmentForm";

type AppointmentFormOverlayProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: TaskAppointment) => void;
};

// ---------- Defaults ----------
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

const defaultTouched = Object.keys(defaultForm).reduce(
  (acc, key) => ({ ...acc, [key]: false }),
  {} as Record<keyof FormFields, boolean>
);

// ---------- Component ----------
export const AppointmentFormOverlay: React.FC<AppointmentFormOverlayProps> = ({
  visible,
  onClose,
  onSubmit,
}) => {
  const [form, setForm] = useState<FormFields>(defaultForm);
  const [touched, setTouched] = useState(defaultTouched);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const slideAnim = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : 300,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  // ---------- Handlers ----------
  const setField = useCallback(
    <K extends keyof FormFields>(key: K, value: FormFields[K]) => {
      setForm((prev) => ({ ...prev, [key]: value }));
      setTouched((prev) => ({ ...prev, [key]: true }));
    },
    []
  );

  const handleReset = useCallback(() => {
    setForm(defaultForm);
    setTouched(defaultTouched);
    setErrorMessage(null);
    onClose();
  }, [onClose]);

  const handleSubmit = useCallback(async () => {
    const error = validateAppointmentForm(form);
    if (error) {
      setErrorMessage(error);
      return;
    }

    setSubmitting(true);
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
    setSubmitting(false);
    handleReset();
  }, [form, onSubmit, handleReset]);

  if (!visible) return null;

  // ---------- UI ----------
  return (
    <Modal visible transparent animationType="none" onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose} />
      <View style={styles.center} pointerEvents="box-none">
        <Animated.View
          style={[styles.card, { transform: [{ translateY: slideAnim }] }]}
        >
          <Text style={styles.title}>Write an Appointment</Text>

          {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}

          <TextFieldsInput form={form} touched={touched} setField={setField} />

          <DatePickerField
            date={form.date_specified}
            onDateChange={(date) => setField("date_specified", date)}
            error={touched.date_specified && form.date_specified < MIN_DATE}
            minDate={MIN_DATE}
          />

          <Pressable
            onPress={handleSubmit}
            disabled={submitting}
            style={[styles.submitButton, submitting && styles.disabledButton]}
          >
            <Text style={styles.submitButtonText}>
              {submitting ? "Submitting..." : "Submit"}
            </Text>
          </Pressable>

          <Pressable onPress={handleReset} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Cancel</Text>
          </Pressable>
        </Animated.View>
      </View>
    </Modal>
  );
};

// ---------- Styles ----------
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
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 8,
  },
  disabledButton: {
    opacity: 0.6,
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
export { FormFields };
