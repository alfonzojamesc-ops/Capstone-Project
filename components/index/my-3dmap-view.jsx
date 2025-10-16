import { useIsFocused } from "@react-navigation/native";
import { OrbitControls } from "@react-three/drei/native";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { AppState } from "react-native";
import { Instances, Model } from "./my-3dmap-model";

const SCENE_CONFIG = {
  enableCameraMemory: true,
  canvas: {
    camera: { position: [-44.33, 9.71, 43.54], far: 100 }, // refers to render max distance, 'near:' for min render dist
    style: { backgroundColor: "#aaffff" },
  },
  enableFog: true,
  fog: {
    attach: "fog",
    args: ["#aaffff", 40, 100],
  },
  enableAmbientLight: true,
  enableBackLight: true,
  lights: {
    ambient: { color: "#ffffff" },
    directional1: {
      position: [200, 300, 200],
      intensity: Math.PI / 2,
    },
    directional2: {
      position: [-200, -300, -200],
      intensity: Math.PI / 20,
    },
  },
  enableOrbitControls: true,
  orbitControls: {
    target: [-29.46, 3.16, 37.05],
    enableDamping: true,
    enableZoom: true,
    zoomSpeed: 0.5,
    minDistance: 10,
    maxDistance: 125,
  },
  enableCameraLogging: false,
};

let cameraPos = null;
let cameraPov = null;

const My3DMap = () => {
  const isFocused = useIsFocused();
  const [isActive, setIsActive] = useState(true);
  // @ts-ignore
  const orbitRef = useRef();

  useEffect(() => {
    const sub = AppState.addEventListener("change", (s) =>
      setIsActive(s === "active")
    );

    const currentOrbit = orbitRef.current;

    if (currentOrbit && cameraPos && cameraPov) {
      currentOrbit.object.position.fromArray(cameraPos);
      currentOrbit.target.fromArray(cameraPov);
      currentOrbit.update();
    }

    return () => {
      sub.remove();
      if (currentOrbit) {
        // 👈 use the copied ref
        cameraPos = currentOrbit.object.position.toArray();
        cameraPov = currentOrbit.target.toArray();
      }
    };
  }, []);

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

          <Suspense>
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

function CameraLogger({ orbitRef }) {
  useFrame(({ clock }) => {
    if (orbitRef.current && clock.elapsedTime % 2 < 0.02) {
      const cam = orbitRef.current.object.position.toArray();
      const target = orbitRef.current.target.toArray();
      console.log(
        "Camera:",
        cam.map((n) => n.toFixed(4)),
        "Target:",
        target.map((n) => n.toFixed(4))
      );
    }
  });
  return null;
}

CameraLogger.displayName = "CameraLogger";
