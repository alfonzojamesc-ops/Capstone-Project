import { useColorScheme } from "react-native";

const FORCE_OPPOSITE_MODE = true;

function useDark(): boolean {
  const scheme = useColorScheme();
  return FORCE_OPPOSITE_MODE ? scheme !== "dark" : scheme === "dark";
}
export default useDark;
