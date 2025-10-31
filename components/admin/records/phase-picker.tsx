import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text } from "react-native";

export const RenderPhasePicker = ({
  hierarchicalData,
  selectedPhase,
  setSelectedPhase,
  blocks,
}) => (
  <>
    <Text style={styles.label}>Phase:</Text>
    <Picker
      selectedValue={selectedPhase}
      style={styles.picker}
      onValueChange={(itemValue) => setSelectedPhase(itemValue)}
    >
      {hierarchicalData.map((phase) => (
        <Picker.Item
          key={phase.phase}
          label={phase.phase}
          value={phase.phase}
        />
      ))}
    </Picker>
  </>
);

const styles = StyleSheet.create({
  label: {
    marginRight: 5,
  },
  picker: {
    height: 40,
    width: 150,
    marginRight: 10,
  },
});
