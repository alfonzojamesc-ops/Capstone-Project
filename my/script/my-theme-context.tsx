import myTheme from "@/my/const/my-theme";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Appearance } from "react-native";

const DEBUG_DARK_MODE = 0;

type ReferenceColorTheme = typeof myTheme.colors.light;
type ReferenceThemeModes = "light" | "dark";

const MyThemeContext = createContext<{
  palette: ReferenceColorTheme;
  mode: ReferenceThemeModes;
  toggle: () => void;
}>({
  palette: myTheme.colors.light,
  mode: "light",
  toggle: () => {},
});

export const useMyTheme = () => useContext(MyThemeContext);

export const MyThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<ReferenceThemeModes>(
    Appearance.getColorScheme() === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    const sub = Appearance.addChangeListener(({ colorScheme }) =>
      setMode(colorScheme === "dark" ? "dark" : "light")
    );
    return () => sub.remove();
  }, []);

  const toggle = useCallback(
    () => setMode((m) => (m === "light" ? "dark" : "light")),
    []
  );

  const value = useMemo(
    () => ({ mode, palette: myTheme.colors[mode], toggle }),
    [mode, toggle]
  );

  if (DEBUG_DARK_MODE) {
    value.mode = "dark";
    value.palette = myTheme.colors.dark;
  }

  return (
    <MyThemeContext.Provider value={value}>{children}</MyThemeContext.Provider>
  );
};
