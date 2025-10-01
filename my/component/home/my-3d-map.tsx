import { Image } from "expo-image";
import { memo } from "react";

function My3DMap() {
  // placeholder
  return (
    <Image
      source={require("@/my/asset/image/my-placeholder.jpg")}
      style={{ flex: 1 }}
    />
  );
}
export default memo(My3DMap);
