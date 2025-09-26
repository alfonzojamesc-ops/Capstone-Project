import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top", "bottom"]}>
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
