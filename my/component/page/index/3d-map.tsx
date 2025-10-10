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
import { OrbitControls, useGLTF } from "@react-three/drei/native";
import { Canvas } from "@react-three/fiber/native";
import { Suspense } from "react";

function Model(props: any) {
  const gltf = useGLTF(modelPath);
  return <primitive {...props} object={gltf.scene} />;
}

export default function My3DMap() {
  return (
    <Canvas camera={{ position: [0, 50, 200], fov: 45 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[50, 100, 50]} />
      <Suspense>
        <Model scale={0.01} />
      </Suspense>
      <OrbitControls
        enableDamping
        enableZoom
        minDistance={20}
        maxDistance={500}
        zoomSpeed={0.5}
      />
    </Canvas>
  );
}
