import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "./3dmap-model";

const My3DMap = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ far: 95, position: [5, 5, 5], fov: 45 }}
      style={{ background: "#aaffff" }}
    >
      <ambientLight intensity={0.6} color="#ffffff" />
      <directionalLight
        color="#feffe6"
        position={[200, 300, 200]}
        target-position={[0, 0, 0]}
        intensity={1.6}
        castShadow
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-left={-180}
        shadow-camera-right={180}
        shadow-camera-top={150}
        shadow-camera-bottom={-150}
      />

      <directionalLight
        position={[-200, -300, -200]}
        target-position={[0, 0, 0]}
        intensity={0.6}
        color="#03fce7"
      />

      <fog attach="fog" args={["#aaffff", 40, 100]} />

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
};
export default My3DMap;
