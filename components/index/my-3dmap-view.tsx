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

  const currentPositionRef = useRef(new Vector3().copy(camera.position));
  const currentTargetRef = useRef(new Vector3().copy(demandedCameraTarget));

  const useUniformSpeed = true;
  const speed = 30;
  const damping = 0.006;

  useFrame((state, delta) => {
    const targetPosition = new Vector3().copy(demandedCameraPosition);
    const targetTarget = new Vector3().copy(demandedCameraTarget);

    const positionDiff = currentPositionRef.current.distanceTo(targetPosition);
    const targetDiff = currentTargetRef.current.distanceTo(targetTarget);

    if (positionDiff > 0.001) {
      if (useUniformSpeed) {
        moveTowardsUniformSpeed(
          currentPositionRef.current,
          targetPosition,
          speed,
          delta
        );
      } else {
        moveTowardsLerp(currentPositionRef.current, targetPosition, damping);
      }
      camera.position.copy(currentPositionRef.current);
    }

    if (targetDiff > 0.001) {
      if (useUniformSpeed) {
        moveTowardsUniformSpeed(
          currentTargetRef.current,
          targetTarget,
          speed,
          delta
        );
      } else {
        moveTowardsLerp(currentTargetRef.current, targetTarget, damping);
      }
      camera.lookAt(currentTargetRef.current);
    }

    if (controlsRef.current) {
      if (targetDiff > 0.001)
        controlsRef.current.target.copy(demandedCameraTarget);
      controlsRef.current.update();
    }

    console.log(camera.position.toArray());
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

function moveTowardsUniformSpeed(current, target, speed, delta) {
  const direction = new Vector3().subVectors(target, current).normalize();
  const distance = current.distanceTo(target);
  const moveDistance = Math.min(speed * delta, distance);
  current.add(direction.multiplyScalar(moveDistance));
}

function moveTowardsLerp(current, target, damping) {
  current.lerp(target, damping);
}
