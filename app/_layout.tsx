import DetectTheme from "@/my-scripts/my-theme-detector";
import { Stack } from "expo-router";

export default function Layout() {
  DetectTheme();
  return <Stack screenOptions={{ headerShown: false }} />;
}
