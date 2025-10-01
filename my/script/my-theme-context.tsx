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

const DEBUG_THEME = false;

const LIGHT = "light";
const DARK = "dark";

type Mode = typeof LIGHT | typeof DARK;
type Palette = typeof myTheme.light;

export type MyPaletteProp = { palette: Palette };

const ThemeContext = createContext<{
  palette: Palette;
  mode: Mode;
  toggle: () => void;
}>({
  palette: myTheme.light,
  mode: LIGHT,
  toggle: () => {},
});

export const useMyTheme = () => useContext(ThemeContext);

function DEBUG_OVERRIDE_THEME(mode: Mode): Mode {
  if (!DEBUG_THEME) return mode;
  return mode === LIGHT ? DARK : LIGHT;
}

export const MyThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<Mode>(
    Appearance.getColorScheme() === DARK ? DARK : LIGHT
  );

  useEffect(() => {
    const sub = Appearance.addChangeListener(({ colorScheme }) =>
      setMode(colorScheme === DARK ? DARK : LIGHT)
    );
    return () => sub.remove();
  }, []);

  const toggle = useCallback(
    () => setMode((m) => (m === LIGHT ? DARK : LIGHT)),
    []
  );

  const value = useMemo(() => {
    const effectiveMode = DEBUG_OVERRIDE_THEME(mode);
    return {
      mode: effectiveMode,
      palette: myTheme[effectiveMode],
      toggle,
    };
  }, [mode, toggle]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
