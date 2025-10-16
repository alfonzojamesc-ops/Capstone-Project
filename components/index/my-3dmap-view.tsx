import { useIsFocused } from "@react-navigation/native";
import { OrbitControls } from "@react-three/drei/native";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { AppState } from "react-native";
import { Instances, Model } from "./my-3dmap-model";

const cameraMemory = {
  position: [5, 5, 5] as [number, number, number],
  target: [0, 0, 0] as [number, number, number],
};

function ControlsWithMemoryAndClamp() {
  const controlsRef = useRef<any>(null);
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(...cameraMemory.position);
    if (controlsRef.current) {
      controlsRef.current.target.set(...cameraMemory.target);
      controlsRef.current.update();
    }
  }, []);

  const handleChange = (e: any) => {
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

    cameraMemory.position = [cam.position.x, cam.position.y, cam.position.z];
    cameraMemory.target = [t.x, t.y, t.z];
  };

  return (
    <OrbitControls
      ref={controlsRef}
      enableDamping
      enableZoom
      minDistance={10}
      maxDistance={125}
      zoomSpeed={0.5}
      minPolarAngle={0}
      maxPolarAngle={Math.PI / 2.2}
      onChange={handleChange}
    />
  );
}

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
      dpr={[1, 2]}
      camera={{ far: 95, fov: 45, position: cameraMemory.position }}
      style={{ backgroundColor: "#aaffff" }}
    >
      <ambientLight color="#ffffff" />
      <directionalLight position={[200, 300, 200]} intensity={2} />
      <directionalLight position={[-200, -300, -200]} intensity={0.2} />
      <fog attach="fog" args={["#aaffff", 40, 100]} />
      <Suspense>
        <Instances>
          <Model />
        </Instances>
      </Suspense>
      <ControlsWithMemoryAndClamp />
    </Canvas>
  );
};

export default My3DMap;
