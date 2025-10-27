import { useCamera } from "@/hooks/camera-context";
import { OrbitControls } from "@react-three/drei/native";
import { Canvas, useThree, Vector3 } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import * as THREE from "three";
import { Instances, Model } from "./my-3dmap-model";

const SCENE_CONFIG = {
  canvas: {
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
};

const SceneContent = () => {
  const { cameraPosition, cameraTarget } = useCamera();
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    camera.lookAt(cameraTarget.x, cameraTarget.y, cameraTarget.z);
  }, [camera, cameraPosition, cameraTarget]);

  return (
    <>
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

      <OrbitControls
        // enableZoom={false}
        // enableRotate={false}
        // enablePan={false}
        autoRotate={true}
        target={cameraTarget}
      />
    </>
  );
};

const My3DMap = () => {
  return (
    <Canvas {...SCENE_CONFIG.canvas}>
      <SceneContent />
    </Canvas>
  );
};

export default My3DMap;
