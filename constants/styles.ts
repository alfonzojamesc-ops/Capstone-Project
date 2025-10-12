import { ViewStyle } from "react-native";

const DEBUG_LAYOUT = true;

const debugBorders = () => {
  if (!DEBUG_LAYOUT) return {};
  return {
    borderWidth: 2,
    borderColor: "#FF00FF",
  } as ViewStyle;
};
export default debugBorders;
