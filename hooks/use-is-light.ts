import { DEBUG_THEME } from "@/constants/theme";
import { useColorScheme } from "react-native";

const useIsLight = (): boolean => {
  const scheme = useColorScheme();
  return DEBUG_THEME ? scheme !== "light" : scheme === "light";
};
export default useIsLight;
