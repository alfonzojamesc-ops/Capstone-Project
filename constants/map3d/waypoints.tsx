// @/constants/waypoints
import { Vector3 } from "three";

export const waypoints = [
  new Vector3(-97.43622760, 3.14, 64.68728537),
  new Vector3(-56.71305451, 13.14, 47.02548982), // chapel
  new Vector3(9.01175385, 3.14, 17.66966296),
  new Vector3(21.53909037, 3.14, -14.76261872),
  new Vector3(98.11740528, 3.14, 9.84566634),
];

export function getLerpedWaypoints(
  waypoints: Vector3[],
  stepsPerSegment: number
): Vector3[] {
  if (!waypoints || waypoints.length === 0) return [];
  if (waypoints.length === 1 || stepsPerSegment <= 0) return waypoints.map(p => p.clone());

  const out: Vector3[] = [];
  for (let i = 0; i < waypoints.length - 1; i++) {
    const a = waypoints[i];
    const b = waypoints[i + 1];
    out.push(a.clone()); // keep start of segment

    // create intermediate points
    for (let s = 1; s <= stepsPerSegment; s++) {
      const t = s / (stepsPerSegment + 1); // evenly spaced between a and b
      const v = new Vector3().lerpVectors(a, b, t);
      out.push(v);
    }
  }
  out.push(waypoints[waypoints.length - 1].clone()); // keep final endpoint
  return out;
}