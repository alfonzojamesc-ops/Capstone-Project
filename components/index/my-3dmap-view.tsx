import { setCamera, setControls } from "@/scripts/camera";
import { OrbitControls } from "@react-three/drei";
import type { OrbitControls as OrbitControlsType } from "three-stdlib";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { Vector3 } from "three";
import { Instances, Model } from "./my-3dmap-model";

const startTarget = new Vector3(-32.853, 0, 36.792);
const startPos = new Vector3(-45.155, 6.192, 42.063);

const SceneContent = () => {
  const { camera } = useThree();
  const controls = useRef<OrbitControlsType>(null);

  useEffect(() => {
    setCamera(camera);
    if (controls.current) setControls(controls.current);

    // Set up interval to log camera position every 2 seconds
    const interval = setInterval(() => {
      const { x, y, z } = camera.position;
      console.log(
        `Camera position: ${x.toFixed(8)}, ${y.toFixed(8)}, ${z.toFixed(8)}`
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
       <OrbitControls
        target={startTarget}
        ref={controls}
      />
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
