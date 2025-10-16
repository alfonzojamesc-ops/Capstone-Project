import debugBorders from "@/constants/styles";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const SafeArea = ({ ...props }) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      edges={["top", "bottom", "left", "right"]}
      style={{
        flex: 1,
        marginTop: insets.top,
        marginBottom: insets.bottom,
        marginLeft: insets.left,
        marginRight: insets.right,
        ...debugBorders(),
      }}
      {...props}
    />
  );
};

SafeArea.displayName = "SafeArea";

export default SafeArea;
