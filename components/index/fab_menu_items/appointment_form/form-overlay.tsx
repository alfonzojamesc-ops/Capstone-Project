import { db } from "@/firebaseConfig";
import { Task } from "@/types/firestore-types";
import { addDoc, collection, Timestamp } from "firebase/firestore";
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
import { InputDate } from "./input-date";
import {
  formValidate,
  getFieldError,
  MIN_DATE,
} from "./input_fields/form-validate";
import { InputFields, InputTexts } from "./input_fields/input-texts";

function write(data: Task) {
  (async () => {
    await addDoc(collection(db, "tasks"), data);
  })();
}

type AppointmentFormOverlayProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: Task) => void;
};

const defaultForm: InputFields = {
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
  {} as Record<keyof InputFields, boolean>
);

export const FormOverlay: React.FC<AppointmentFormOverlayProps> = ({
  visible,
  onClose,
  onSubmit,
}) => {
  const [form, setForm] = useState<InputFields>(defaultForm);
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

  const setField = useCallback(
    <K extends keyof InputFields>(key: K, value: InputFields[K]) => {
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
    const error = formValidate(form);
    if (error) return setErrorMessage(error);

    const parsedData: Task = {
      title: `Appointment: ${form.first_name + " " + form.last_name}`,
      date_created: new Date().toISOString(),
      start: new Date().toISOString().split("T")[0],
      date_due: Timestamp.fromDate(form.date_specified)
        .toDate()
        .toISOString()
        .split("T")[0],
      author: form.first_name + " " + form.middle_name + " " + form.last_name,
      description: `Address: ${form.address};\nPhone: ${form.phone};\nEmail: ${form.email};\nMessage: ${form.message}`,
    };

    setSubmitting(true);
    onSubmit(parsedData);

    write(parsedData);

    setSubmitting(false);
    handleReset();
  }, [form, onSubmit, handleReset]);

  if (!visible) return null;

  const dateError =
    touched.date_specified &&
    getFieldError("date_specified", form.date_specified);

  return (
    <Modal visible transparent animationType="none" onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose} />
      <View style={styles.center} pointerEvents="box-none">
        <Animated.View
          style={[styles.card, { transform: [{ translateY: slideAnim }] }]}
        >
          <Text style={styles.title}>Write an Appointment</Text>

          {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}

          <InputTexts form={form} touched={touched} setField={setField} />

          <InputDate
            date={form.date_specified}
            onDateChange={(date) => setField("date_specified", date)}
            minDate={MIN_DATE}
            error={!!dateError}
            errorText={dateError ? dateError : undefined}
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
  disabledButton: { opacity: 0.6 },
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
  closeButtonText: { textAlign: "center", color: "#333" },
});

export { InputFields as FormFields };
