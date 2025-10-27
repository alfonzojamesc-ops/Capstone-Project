import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { getFieldError } from "./form-validate";


export type InputFields = {
  first_name: string;
  middle_name: string;
  last_name: string;
  address: string;
  phone: string;
  email: string;
  message: string;
  date_specified: Date;
};

type InputTextsProps = {
  form: InputFields;
  touched: Record<keyof InputFields, boolean>;
  setField: (key: keyof InputFields, value: string) => void;
};

export const InputTexts: React.FC<InputTextsProps> = ({
  form,
  touched,
  setField,
}) => {
  const textFields: (keyof InputFields)[] = [
    "first_name",
    "middle_name",
    "last_name",
    "address",
    "phone",
    "email",
    "message",
  ];

  return (
    <>
      {textFields.map((field) => {
        const error = touched[field] && getFieldError(field, form[field], form);

        return (
          <View key={field} style={styles.inputWrapper}>
            <TextInput
              placeholder={field.replace("_", " ")}
              placeholderTextColor="grey"
              style={[
                styles.input,
                field === "message" && { height: 80 },
                error && { borderColor: "red" },
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
