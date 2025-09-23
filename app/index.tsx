import { Text } from "@/components/ui/text";
import Bx from "@/my/components/generic/mybox";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top", "bottom"]}>
        {/* scope */}
        <Bx c="11">
          <Text>Hello World</Text>
        </Bx>

        {/* scope */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
