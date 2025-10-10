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
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function Model(props: any) {
  const { scene } = useGLTF(modelPath);

  scene.traverse((child: any) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;

      if (child.material) {
        child.material.needsUpdate = true;
        child.material.metalness = child.material.metalness ?? 0.1;
        child.material.roughness = child.material.roughness ?? 0.8;
      }
    }
  });

  return <primitive {...props} object={scene} />;
}

export default function My3DMap() {
  return (
    <Canvas dpr={[1, 2]} shadows camera={{ position: [5, 5, 5], fov: 45 }} style={{ background: "#c4f7ffff" }}>
      <ambientLight intensity={0.6} color="#ffffff" />
      <directionalLight
        position={[200, 300, 200]} 
        target-position={[0, 0, 0]} 
        intensity={1.2}
        castShadow
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-near={1}
        shadow-camera-far={1000}
        shadow-camera-left={-180} 
        shadow-camera-right={180}
        shadow-camera-top={150} 
        shadow-camera-bottom={-150}
      />

      <hemisphereLight intensity={0.5} groundColor="#888888ff" />

      <Suspense>
        <Model />
      </Suspense>

      <OrbitControls
        enableDamping
        enableZoom
        minDistance={10}
        maxDistance={125}
        zoomSpeed={0.5}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.2}
        onChange={(e) => {
          const controls = e?.target;
          if (!controls) return;

          const cam = controls.object;
          const t = controls.target;

          const halfW = 130;
          const halfL = 95;
          const topY = 5;

          const clamp = (v: number, min: number, max: number) =>
            Math.max(min, Math.min(max, v));

          t.x = clamp(t.x, -halfW, halfW);
          t.z = clamp(t.z, -halfL, halfL);
          t.y = clamp(t.y, 0, topY);

          cam.position.x = clamp(cam.position.x, -halfW, halfW);
          cam.position.z = clamp(cam.position.z, -halfL, halfL);
          cam.position.y = clamp(cam.position.y, 0, topY + 50);
        }}
      />
    </Canvas>
  );
}
