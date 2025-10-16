import { useIsFocused } from "@react-navigation/native";
import { OrbitControls } from "@react-three/drei/native";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { AppState } from "react-native";
import { Instances, Model } from "./my-3dmap-model";

const renderDistance = 100;
const fogStartDistance = 40;
const maxCameraZoom = 10;
const minCameraZoom = 125;
const enableZoom = true;
const zoomSpeed = 0.5;

const My3DMap = () => {
  const isFocused = useIsFocused();
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const sub = AppState.addEventListener("change", (state) => {
      setIsActive(state === "active");
    });
    return () => sub.remove();
  }, []);

  if (!isFocused || !isActive) return null;

  return (
    <Canvas
      camera={{ far: renderDistance }}
      style={{ backgroundColor: "#aaffff" }}
    >
      <ambientLight color="#ffffff" />
      <directionalLight position={[200, 300, 200]} intensity={Math.PI / 2} />
      <directionalLight
        position={[-200, -300, -200]}
        intensity={Math.PI / 20}
      />
      <fog attach="fog" args={["#aaffff", fogStartDistance, renderDistance]} />
      <Suspense>
        <Instances>
          <Model />
        </Instances>
      </Suspense>
      <OrbitControls
        enableDamping
        enableZoom={enableZoom}
        minDistance={maxCameraZoom}
        maxDistance={minCameraZoom}
        zoomSpeed={zoomSpeed}
      />
    </Canvas>
  );
};

export default My3DMap;
