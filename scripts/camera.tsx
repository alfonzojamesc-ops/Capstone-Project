import { getLerpedWaypoints, waypoints } from "@/constants/map3d/waypoints";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

let cameraRef: THREE.Camera | null = null;
let controlsRef: typeof OrbitControls | null = null;

export function setCamera(cam: THREE.Camera) {
  cameraRef = cam;
}

export function setControls(controls) {
  controlsRef = controls;
}

let moving = false;

export async function moveCamera(to, speed = 1) {
  if (!cameraRef || moving) return Promise.resolve(false);

  const start = cameraRef.position.clone();
  const end = Array.isArray(to) ? new THREE.Vector3(...to) : to.clone();
  const dist = start.distanceTo(end);
  const duration = (dist / (speed * 25)) * 1000;
  const startTime = performance.now();
  moving = true;

  return new Promise((resolve) => {
    (function animate() {
      const elapsed = performance.now() - startTime;
      const alpha = Math.min(elapsed / duration, 1);
      cameraRef!.position.lerpVectors(start, end, alpha);

      if (alpha < 1) {
        requestAnimationFrame(animate);
      } else {
        cameraRef!.position.copy(end);
        moving = false;

        // check if camera is close enough to target
        const epsilon = 1e-4; // tolerance
        const reached = cameraRef!.position.distanceTo(end) <= epsilon;
        resolve(reached);
      }
    })();
  });
}

export function parsePath(target: THREE.Vector3): THREE.Vector3[] {
  // squared dist
  const distanceSquared = (a: THREE.Vector3, b: THREE.Vector3): number => {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const dz = a.z - b.z;
    return dx * dx + dy * dy + dz * dz;
  };
  // sort waypoints
  const sorted = [...waypoints].sort(
    (a, b) => distanceSquared(a, target) - distanceSquared(b, target)
  );

  const closest = sorted[0];

  // slice original path up to that closest waypoint
  const index = waypoints.indexOf(closest);
  const slice = index >= 0 ? waypoints.slice(0, index) : [];

  const parsedPath = getLerpedWaypoints([...slice, target], 240);

  return [...parsedPath];
}

export async function pathCamera(target: THREE.Vector3 | number[], speed = 1) {
  // convert to Vector3
  const normalizedTarget = Array.isArray(target)
    ? new THREE.Vector3(...target)
    : target;

  const path = parsePath(normalizedTarget);

  for (let i = 0; i < path.length; i++) {
    const point = path[i + 1]
      ? path[i].clone()
      : new THREE.Vector3().lerpVectors(path[i - 48], path[i], 0.75).clone();
    const forward = path[i + 1] ? path[i + 1] : path[i];
    const success =
      i != 0 ? await moveCamera(point, speed) : cameraRef!.position.copy(point);

    if (controlsRef) {
      if (!controlsRef.target.equals(forward)) {
        controlsRef.target.copy(forward);
        controlsRef.update();
      }
    }

    if (!success) {
      console.warn("Camera failed to reach point:", point);
      break;
    }
  }
}
