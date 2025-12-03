import { setCamera } from "@/scripts/camera";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { Vector3 } from "three";
import { Instances, Model } from "./my-3dmap-model";

const startTarget = new Vector3(-32.853, 0, 36.792);
const startPos = new Vector3(-45.155, 6.192, 42.063);

const SceneContent = () => {
  const { camera } = useThree();

  useEffect(() => {
    setCamera(camera);

    // Set up interval to log camera position every 2 seconds
    const interval = setInterval(() => {
      const { x, y, z } = camera.position;
      console.log(
        `Camera position: x=${x.toFixed(3)}, y=${y.toFixed(3)}, z=${z.toFixed(
          3
        )}`
      );
    }, 2000);

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, [camera]);

  return (
    <>
      <ambientLight color="#ffffff" />
      <directionalLight position={[200, 300, 200]} intensity={Math.PI / 2} />
      <directionalLight
        position={[-200, -300, -200]}
        intensity={Math.PI / 20}
      />
      <fog attach="fog" args={["#aaffff", 90, 120]} />
      <Suspense fallback={null}>
        <Instances>
          <Model />
        </Instances>
      </Suspense>
      <OrbitControls  target={startTarget} />
    </>
  );
};

const My3DMap = () => {
  return (
    <>
      <Canvas
        style={{ backgroundColor: "#aaffff" }}
        camera={{
          position: startPos,
          fov: 60,
          far: 120,
        }}
      >
        <SceneContent />
      </Canvas>
    </>
  );
};

export default My3DMap;
