import SafeArea from "@/components/safe-area";
import debugBorders from "@/constants/styles";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <SafeArea>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          ...debugBorders(),
        }}
      >
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </SafeArea>
  );
}
