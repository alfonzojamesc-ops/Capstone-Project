// import { Image } from "expo-image";

// const My3DMap = () => {
//   // placeholder
//   return (
//     <Image
//       source={require("@/my/asset/image/my-placeholder.jpg")}
//       style={{ flex: 1 }}
//     />
//   );
// };
// export default My3DMap;

import modelPath from "@/my/asset/model/parkrealsize.glb";
import { useGLTF } from "@react-three/drei/native";
import { Canvas } from "@react-three/fiber/native";
import { Suspense } from "react";

// TODO: type props
function Model(props: any) {
  const gltf = useGLTF(modelPath);
  return <primitive {...props} object={gltf.scene} />;
}

export default function My3DMap() {
  return (
    <Canvas>
      <ambientLight />
      <Suspense>
        <Model />
      </Suspense>
    </Canvas>
  );
}
