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


<instances.Tomb
        name="Tomb"
        position={[106.07989502, -0.92499995, -58.37224197]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb001"
        position={[107.99667358, -0.92499995, -54.8614006]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb002"
        position={[103.44676208, -0.92499995, -56.93467331]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb003"
        position={[105.36354065, -0.92499995, -53.42383194]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb004"
        position={[107.28030396, -0.92499995, -49.91298676]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb005"
        position={[109.19706726, -0.92499995, -46.40214539]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb006"
        position={[100.81362915, -0.92499995, -55.49709702]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb007"
        position={[102.73040771, -0.92499995, -51.98625565]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb008"
        position={[104.64717102, -0.92499995, -48.47541046]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb009"
        position={[106.56393433, -0.92499995, -44.96456909]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb010"
        position={[108.48069763, -0.92499995, -41.45372772]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb011"
        position={[110.39746094, -0.92499995, -37.94288635]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb012"
        position={[112.31422424, -0.92499995, -34.43204498]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb013"
        position={[98.18051147, -0.92499995, -54.05952072]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb014"
        position={[100.09727478, -0.92499995, -50.54867935]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb015"
        position={[102.01403809, -0.92499995, -47.03783798]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb016"
        position={[103.93080139, -0.92499995, -43.52699661]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb017"
        position={[105.84757996, -0.92499995, -40.01615524]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb018"
        position={[107.76434326, -0.92499995, -36.50531387]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb019"
        position={[109.68110657, -0.92499995, -32.9944725]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb020"
        position={[111.59786987, -0.92499995, -29.48363113]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb021"
        position={[113.51463318, -0.92499995, -25.97279739]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb022"
        position={[115.43139648, -0.92499995, -22.46195412]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb023"
        position={[95.54737854, -0.92499995, -52.62194443]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb024"
        position={[97.46414185, -0.92499995, -49.11110306]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb025"
        position={[99.38090515, -0.92499995, -45.60026169]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb026"
        position={[101.29766846, -0.92499995, -42.08942032]}
        rotation={[0, 0.49973326, 0]}
      />