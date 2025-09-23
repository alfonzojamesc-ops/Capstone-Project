import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode={useColorScheme() ?? "light"}>
      <Stack screenOptions={{ headerShown: false }} />
    </GluestackUIProvider>
  );
}
