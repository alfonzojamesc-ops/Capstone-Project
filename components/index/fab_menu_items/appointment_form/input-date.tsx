import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import DatePicker from "react-native-date-picker";

type Props = {
  date: Date;
  onDateChange: (date: Date) => void;
  minDate?: Date;
  error?: boolean;
  errorText?: string;
};

export const InputDate: React.FC<Props> = ({
  date,
  onDateChange,
  minDate,
  error,
  errorText,
}) => {
  const formattedDate = date.toISOString().split("T")[0];
  const formattedMinDate = minDate?.toISOString().split("T")[0];

  return (
    <View style={styles.container}>
      <Text style={[styles.label, error && styles.errorLabel]}>
        Appointment Date
      </Text>

      {Platform.OS === "web" ? (
        <input
          type="date"
          value={formattedDate}
          min={formattedMinDate}
          onChange={(e) => {
            const newDate = new Date(e.target.value);
            if (!isNaN(newDate.getTime())) onDateChange(newDate);
          }}
          style={styles.webInput as React.CSSProperties}
        />
      ) : (
        <DatePicker
          modal
          date={date}
          onDateChange={onDateChange}
          minimumDate={minDate}
          mode="date"
          style={styles.picker}
        />
      )}

      {error && errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  label: { fontWeight: "600", marginBottom: 6 },
  errorLabel: { color: "red" },
  picker: { alignSelf: "center" },
  errorText: { color: "red", marginTop: 4, fontSize: 12 },
  webInput: {
    padding: 8,
    fontSize: 16,
    borderRadius: 4,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});
