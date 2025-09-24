import { useThemeStore } from "@/my-scripts/my-stores/my-store-theme";
import { useEffect } from "react";
import { Appearance } from "react-native";

export default function DetectTheme() {
  // Access the theme updater function from Zustand
  const updateThemeMode = useThemeStore((state) => state.setMode);

  useEffect(() => {
    // Listen for system theme changes (light/dark)
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      const mode = colorScheme ?? "light";
      updateThemeMode(mode);
    });

    // Clean up the listener when the component unmounts
    return () => subscription.remove();
  }, [updateThemeMode]);
}
