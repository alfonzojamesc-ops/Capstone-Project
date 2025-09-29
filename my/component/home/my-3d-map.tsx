import { Image } from "expo-image";
import { memo } from "react";

const My3DMap = () => (
  // placeholder
  <Image
    source={require("@/my/asset/image/my-placeholder.jpg")}
    style={{ flex: 1 }}
  />
);
export default memo(My3DMap);
