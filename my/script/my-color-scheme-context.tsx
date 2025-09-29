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

const light = "light";
const dark = "dark";
type MyColorSchemeModes = typeof light | typeof dark;

const myLightColorSchemePalette = myTheme.color.scheme.light;
export type MyColorPaletteTypeReference = typeof myLightColorSchemePalette;
export type MyColorPaletteProp = {
  colorPalette: MyColorPaletteTypeReference;
};

const MyColorSchemeContext = createContext<{
  myColorPalette: MyColorPaletteTypeReference;
  myColorSchemeMode: MyColorSchemeModes;
  myColorSchemeToggle: () => void;
}>({
  myColorPalette: myLightColorSchemePalette,
  myColorSchemeMode: light,
  myColorSchemeToggle: () => {},
});

export const useMyColorScheme = () => useContext(MyColorSchemeContext);

export const MyThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [myColorSchemeMode, setMode] = useState<MyColorSchemeModes>(
    Appearance.getColorScheme() === dark ? dark : light
  );

  useEffect(() => {
    const sub = Appearance.addChangeListener(({ colorScheme }) =>
      setMode(colorScheme === dark ? dark : light)
    );
    return () => sub.remove();
  }, []);

  const myColorSchemeToggle = useCallback(
    () => setMode((m) => (m === light ? dark : light)),
    []
  );

  const value = useMemo(
    () => ({
      myColorSchemeMode,
      myColorPalette: myTheme.color.scheme[myColorSchemeMode],
      myColorSchemeToggle,
    }),
    [myColorSchemeMode, myColorSchemeToggle]
  );

  if (DEBUG_DARK_MODE) {
    value.myColorSchemeMode = dark;
    value.myColorPalette = myTheme.color.scheme.dark;
  }

  return (
    <MyColorSchemeContext.Provider value={value}>
      {children}
    </MyColorSchemeContext.Provider>
  );
};
