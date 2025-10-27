import { useCamera } from "@/hooks/camera-context";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import { Instances, Model } from "./my-3dmap-model";

const SceneContent = () => {
  const { demandedCameraPosition, demandedCameraTarget } = useCamera();
  const { camera } = useThree();

  const controlsRef = useRef();

  const currentPosition = useRef(new THREE.Vector3().copy(camera.position));
  const currentTarget = useRef(new THREE.Vector3().copy(demandedCameraTarget));

  const speed = 20;

  const damping = 0.1;

  useFrame((state, delta) => {
    const targetPosition = new THREE.Vector3(
      demandedCameraPosition.x,
      demandedCameraPosition.y,
      demandedCameraPosition.z
    );
    const targetTarget = new THREE.Vector3(
      demandedCameraTarget.x,
      demandedCameraTarget.y,
      demandedCameraTarget.z
    );

    const positionDiff = currentPosition.current.distanceTo(targetPosition);
    const targetDiff = currentTarget.current.distanceTo(targetTarget);

    if (positionDiff > 0.001) {
      // Interpolate with damping to smooth movement
      currentPosition.current.lerp(targetPosition, damping);
      camera.position.copy(currentPosition.current);
    }

    if (targetDiff > 0.001) {
      // Interpolate with damping
      currentTarget.current.lerp(targetTarget, damping);
      camera.lookAt(currentTarget.current);
    }

    if (controlsRef.current) {
      controlsRef.current.update();
    }
  });

  useEffect(() => {
    camera.fov = 60;
    camera.far = 120;
    camera.updateProjectionMatrix();
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
      <OrbitControls ref={controlsRef} />
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
