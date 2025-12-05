// @/constants/waypoints
import { Vector3 } from "three";

export const waypoints = [
  new Vector3(-97.4362276, 3.14, 64.68728537),
  new Vector3(-56.71305451, 13.14, 47.02548982), // chapel
  new Vector3(9.01175385, 3.14, 17.66966296),
  new Vector3(21.53909037, 3.14, -14.76261872),
  new Vector3(98.11740528, 3.14, 9.84566634),
];

import { CatmullRomCurve3 } from "three";

export function getLerpedWaypoints(
  waypoints: Vector3[],
  samplesPerSegment: number,
  closed = false,
  curveType: "centripetal" | "chordal" | "catmullrom" = "centripetal"
): Vector3[] {
  if (!waypoints || waypoints.length === 0) return [];
  if (waypoints.length === 1 || samplesPerSegment <= 0)
    return waypoints.map((p) => p.clone());

  const curve = new CatmullRomCurve3(
    waypoints.map((p) => p.clone()),
    closed,
    curveType
  );

  const segments = closed
    ? waypoints.length
    : Math.max(1, waypoints.length - 1);
  const totalSamples = segments * samplesPerSegment + 1;

  const out: Vector3[] = [];
  for (let i = 0; i < totalSamples; i++) {
    const u = i / (totalSamples - 1); 
    out.push(curve.getPointAt(u).clone());
  }

  return out;
}
