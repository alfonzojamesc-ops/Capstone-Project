import ThemedStack from "@/my/component/_layout/my-themed-stack";
import { MyThemeProvider } from "@/my/script/my-color-scheme-context";

export default function RootLayout() {
  return (
    <MyThemeProvider>
      <ThemedStack />
    </MyThemeProvider>
  );
}
