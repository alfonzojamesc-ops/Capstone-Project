import * as THREE from "three";

let cameraRef: THREE.Camera | null = null;

export function setCamera(cam: THREE.Camera) {
  cameraRef = cam;
}

let moving = false;

export function moveCamera(to, speed = 1) {
  if (!cameraRef || moving) return;
  const start = cameraRef.position.clone();
  const end = Array.isArray(to) ? new THREE.Vector3(...to) : to;
  const dist = start.distanceTo(end);
  const duration = (dist / (speed * 25)) * 1000;
  const startTime = performance.now();
  moving = true;

  (function animate() {
    const elapsed = performance.now() - startTime;
    const alpha = Math.min(elapsed / duration, 1);
    cameraRef.position.lerpVectors(start, end, alpha);
    if (alpha < 1) requestAnimationFrame(animate);
    else {
      cameraRef.position.copy(end);
      moving = false;
    }
  })();
}

export function sortByDistance(
  vectors: THREE.Vector3[],
  target: THREE.Vector3
): THREE.Vector3[] {
  const distanceSquared = (a: THREE.Vector3, b: THREE.Vector3): number => {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const dz = a.z - b.z;
    return dx * dx + dy * dy + dz * dz;
  };

  return [...vectors].sort((a, b) => {
    return distanceSquared(a, target) - distanceSquared(b, target);
  });
}

export function parsePath(
  waypoints: THREE.Vector3[],
  target: THREE.Vector3
): THREE.Vector3[] {
  let parsedPath: THREE.Vector3[] = [];

  for (let i = 0; i < waypoints.length; i++) {
    if (waypoints[i] === sortByDistance(waypoints, target)[0])
      parsedPath = waypoints.slice(0, i);
  }

  return parsedPath;
}
