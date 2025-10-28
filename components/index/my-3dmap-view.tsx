import { useCamera } from "@/hooks/camera-context";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Vector3 } from "three";
import { Instances, Model } from "./my-3dmap-model";

const SceneContent = () => {
  const { demandedCameraPosition, demandedCameraTarget } = useCamera();
  const { camera } = useThree();

  const controlsRef = useRef();

  const currentPosition = useRef(new Vector3().copy(camera.position));
  const currentTarget = useRef(new Vector3().copy(demandedCameraTarget));

  const useUniformSpeed = true;
  const speed = 30;
  const damping = 0.006;

  useFrame((state, delta) => {
    const targetPosition = new Vector3().copy(demandedCameraPosition);
    const targetTarget = new Vector3().copy(demandedCameraTarget);

    const positionDiff = currentPosition.current.distanceTo(targetPosition);
    const targetDiff = currentTarget.current.distanceTo(targetTarget);

    if (positionDiff > 0.001) {
      if (useUniformSpeed) {
        const direction = new Vector3()
          .subVectors(targetPosition, currentPosition.current)
          .normalize();
        const moveDistance = Math.min(speed * delta, positionDiff);
        currentPosition.current.add(direction.multiplyScalar(moveDistance));
      } else {
        currentPosition.current.lerp(targetPosition, damping);
      }
      camera.position.copy(currentPosition.current);
    }

    if (targetDiff > 0.001) {
      if (useUniformSpeed) {
        const direction = new Vector3()
          .subVectors(targetTarget, currentTarget.current)
          .normalize();
        const moveDistance = Math.min(speed * delta, targetDiff);
        currentTarget.current.add(direction.multiplyScalar(moveDistance));
      } else {
        currentTarget.current.lerp(targetTarget, damping);
      }
      camera.lookAt(currentTarget.current);
    }

    if (controlsRef.current) {
      if (targetDiff > 0.001)
        controlsRef.current.target.copy(demandedCameraTarget);
      controlsRef.current.update();
    }
  });

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
        ref={controlsRef}
        autoRotate
        target={new Vector3(-32.853, 0, 36.792)}
      />
    </>
  );
};

const My3DMap = () => {
  return (
    <Canvas
      style={{ backgroundColor: "#aaffff" }}
      camera={{
        position: new Vector3(-45.155, 6.192, 42.063),
        fov: 60,
        far: 120,
      }}
    >
      <SceneContent />
    </Canvas>
  );
};

export default My3DMap;
