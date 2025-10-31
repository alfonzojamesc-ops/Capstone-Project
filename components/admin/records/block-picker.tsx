import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text } from "react-native";

export const RenderBlockPicker = ({
  selectedBlock,
  setSelectedBlock,
  blocks,
}) => (
  <>
    <Text style={styles.label}>Block:</Text>
    <Picker
      selectedValue={selectedBlock}
      style={styles.picker}
      onValueChange={(itemValue) => setSelectedBlock(itemValue)}
    >
      <Picker.Item label="Select Block" value={null} />
      {blocks.map((block) => (
        <Picker.Item
          key={block.block}
          label={block.block}
          value={block.block}
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
