import { useCamera } from "@/hooks/camera-context";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree, Vector3 } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import * as THREE from "three";
import { Instances, Model } from "./my-3dmap-model";

const SceneContent = () => {
  const { cameraPosition, cameraTarget } = useCamera();
  const { camera } = useThree();

  useEffect(() => {
    camera.fov = 60;
    camera.far = 120;
    camera.updateProjectionMatrix();
  }, [camera]);

  useEffect(() => {
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    camera.lookAt(cameraTarget.x, cameraTarget.y, cameraTarget.z);
  }, [camera, cameraPosition, cameraTarget]);

  useEffect(() => {
    const logCameraData = () => {
      console.log(camera.position.toArray().toLocaleString());
    };

    const intervalId = setInterval(logCameraData, 2000);

    return () => clearInterval(intervalId);
  }, [camera]);

  return (
    <>
      <ambientLight color="#ffffff" />
      <directionalLight
        position={[200, 300, 200] as Vector3}
        intensity={Math.PI / 2}
      />
      <directionalLight
        position={[-200, -300, -200] as Vector3}
        intensity={Math.PI / 20}
      />
      <fog
        attach="fog"
        args={["#aaffff", 90, 120] as ConstructorParameters<typeof THREE.Fog>}
      />
      <Suspense fallback={null}>
        <Instances>
          <Model />
        </Instances>
      </Suspense>
      <OrbitControls target={cameraTarget} />
    </>
  );
};

const My3DMap = () => {
  return (
    <Canvas style={{ backgroundColor: "#aaffff" }}>
      <SceneContent />
    </Canvas>
  );
};

export default My3DMap;
