import { ThemedStack } from "@/my/components/my-themed-stack";
import { MyThemeProvider } from "@/my/scripts/my-theme-context";

export default function RootLayout() {
  return (
    <MyThemeProvider>
      <ThemedStack />
    </MyThemeProvider>
  );
}
