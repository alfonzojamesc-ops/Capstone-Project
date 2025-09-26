import { StyleSheet } from "react-native";

// constant(reusable) styles
const cs = StyleSheet.create({
  flex1: { flex: 1 },
  hvcenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  whfit: {
    width: "100%",
    height: "100%",
  },
  rounded: {
    borderRadius: 9999,
  },
  layout: {
    borderColor: "fuchsia",
    borderWidth: 3,
  },
  layoutbg: {
    backgroundColor: "fuchsia",
  },
});
export default cs;
