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