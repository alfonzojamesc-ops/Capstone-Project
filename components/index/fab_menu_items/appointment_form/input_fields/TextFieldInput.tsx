import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

// ---------- Types ----------
export type FormFields = {
  first_name: string;
  middle_name: string;
  last_name: string;
  address: string;
  phone: string;
  email: string;
  message: string;
  date_specified: Date;
};

type TextFieldsInputProps = {
  form: FormFields;
  touched: Record<keyof FormFields, boolean>;
  setField: (key: keyof FormFields, value: string) => void;
};

const MIN_ADDRESS_LENGTH = 14;

const textFields: (keyof FormFields)[] = [
  "first_name",
  "middle_name",
  "last_name",
  "address",
  "phone",
  "email",
  "message",
];

export const TextFieldsInput: React.FC<TextFieldsInputProps> = ({
  form,
  touched,
  setField,
}) => {
  // Internal validation for each field, return error message or undefined
  const getFieldError = (field: keyof FormFields): string | undefined => {
    const value = form[field].toString().trim();

    if (!touched[field]) return undefined;

    switch (field) {
      case "first_name":
        if (!value) return "First name is required.";
        break;

      case "last_name":
        if (!value) return "Last name is required.";
        break;

      case "message":
        if (!value) return "Message is required.";
        break;

      case "address":
        if (!value) return "Address is required.";
        if (value.length < MIN_ADDRESS_LENGTH)
          return "Please enter a valid address.";
        break;

      case "phone":
        if (!value) return "Phone number is required.";
        if (!/^09\d{9}$/.test(value) && !/^\+639\d{9}$/.test(value))
          return "Please enter a valid phone number (starts with 09 or +63, 11 digits).";
        break;

      case "email":
        if (!value) return "Email is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Please enter a valid email address.";
        break;

      default:
        return undefined;
    }
    return undefined;
  };

  return (
    <>
      {textFields.map((field) => {
        const error = getFieldError(field);
        return (
          <View key={field} style={styles.inputWrapper}>
            <TextInput
              placeholder={field.replace("_", " ")}
              placeholderTextColor="grey"
              style={[
                styles.input,
                error && { borderColor: "red" },
                field === "message" && { height: 80 },
              ]}
              value={form[field].toString()}
              onChangeText={(v) => setField(field, v)}
              multiline={field === "message"}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  inputWrapper: { marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
  },
  errorText: {
    color: "red",
    marginTop: 4,
    fontSize: 12,
  },
});
