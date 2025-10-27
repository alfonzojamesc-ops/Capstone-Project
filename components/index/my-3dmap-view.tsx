import { useCamera } from "@/hooks/camera-context";
import { useIsFocused } from "@react-navigation/native";
import { OrbitControls } from "@react-three/drei/native";
import { Canvas, useFrame, Vector3 } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { AppState } from "react-native";
import * as THREE from "three";
import { Instances, Model } from "./my-3dmap-model";

const SCENE_CONFIG = {
  enableCameraMemory: true,
  canvas: {
    camera: { fov: 45, position: [-44.33, 9.71, 43.54] as Vector3, far: 120 },
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
    target: [-29.46, 3.16, 37.05] as Vector3,
    enableDamping: true,
    minDistance: 10,
    maxDistance: 125,
    autoRotate: true,
  },
  enableCameraLogging: false,
};

const My3DMap = () => {
  const isFocused = useIsFocused();
  const { cameraPosition, cameraTarget } = useCamera(); // Using the camera context
  const [isActive, setIsActive] = useState(true);
  const orbitRef = useRef<any>(null);

  useEffect(() => {
    const sub = AppState.addEventListener("change", (s) =>
      setIsActive(s === "active")
    );

    const currentOrbit = orbitRef.current;

    if (currentOrbit && cameraPosition && cameraTarget) {
      currentOrbit.object.position.copy(cameraPosition); // Directly using camera position from context
      currentOrbit.target.copy(cameraTarget); // Using camera target from context
      currentOrbit.update();
    }

    return () => {
      sub.remove();
    };
  }, [cameraPosition, cameraTarget]); // Re-run effect when camera state changes

  return (
    <Canvas {...SCENE_CONFIG.canvas}>
      {isFocused && isActive && (
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

          {SCENE_CONFIG.enableOrbitControls && (
            <OrbitControls
              ref={SCENE_CONFIG.enableCameraMemory ? orbitRef : null}
              {...SCENE_CONFIG.orbitControls}
            />
          )}

          {SCENE_CONFIG.enableCameraLogging && (
            <CameraLogger orbitRef={orbitRef} />
          )}
        </>
      )}
    </Canvas>
  );
};

My3DMap.displayName = "My3DMap";

export default My3DMap;

function CameraLogger({ orbitRef }: any) {
  useFrame(({ clock }) => {
    if (orbitRef.current && clock.elapsedTime % 2 < 0.02) {
      const cam = orbitRef.current.object.position.toArray();
      const target = orbitRef.current.target.toArray();
      console.log(
        "Camera:",
        cam.map((n: any) => n.toFixed(4)),
        "Target:",
        target.map((n: any) => n.toFixed(4))
      );
    }
  });
  return null;
}
