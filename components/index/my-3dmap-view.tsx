import { useCamera } from "@/hooks/camera-context";
import { OrbitControls } from "@react-three/drei/native";
import { Canvas, Vector3 } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";
import { Instances, Model } from "./my-3dmap-model";

const SCENE_CONFIG = {
  canvas: {
    camera: { fov: 60, far: 120 },
    style: { backgroundColor: "#aaffff" },
  },
  enableFog: true,
  fog: {
    attach: "fog",
    args: ["#aaffff", 90, 120] as ConstructorParameters<typeof THREE.Fog>,
  },
  enableAmbientLight: true,
  enableBackLight: true,
  lights: {
    ambient: { color: "#ffffff" },
    directional1: {
      position: [200, 300, 200] as Vector3,
      intensity: Math.PI / 2,
    },
    directional2: {
      position: [-200, -300, -200] as Vector3,
      intensity: Math.PI / 20,
    },
  },
  enableOrbitControls: true,
  orbitControls: {
    enableDamping: true,
    minDistance: 10,
    maxDistance: 125,
    autoRotate: true,
  },
  enableCameraLogging: false,
};

const My3DMap = () => {
  const { cameraPosition, cameraTarget } = useCamera();

  return (
    <Canvas
      {...SCENE_CONFIG.canvas}
      camera={{ position: cameraPosition, near: 1, far: 120 }}
    >
      {SCENE_CONFIG.enableAmbientLight && (
        <ambientLight {...SCENE_CONFIG.lights.ambient} />
      )}

      <directionalLight {...SCENE_CONFIG.lights.directional1} />

      {SCENE_CONFIG.enableBackLight && (
        <directionalLight {...SCENE_CONFIG.lights.directional2} />
      )}

      {SCENE_CONFIG.enableFog && <fog {...SCENE_CONFIG.fog} />}

      <Suspense fallback={null}>
        <Instances>
          <Model />
        </Instances>
      </Suspense>

      {SCENE_CONFIG.enableOrbitControls && (
        <OrbitControls {...SCENE_CONFIG.orbitControls} target={cameraTarget} />
      )}
    </Canvas>
  );
};

export default My3DMap;
