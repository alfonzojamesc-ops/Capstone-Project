import myTheme from "my/constants/my-theme";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Appearance } from "react-native";

type Mode = "light" | "dark";
type Palette = typeof myTheme.colors.light;

const MyThemeContext = createContext<{
  palette: Palette;
  mode: Mode;
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
  const [mode, setMode] = useState<Mode>(
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

  return (
    <MyThemeContext.Provider value={value}>{children}</MyThemeContext.Provider>
  );
};
