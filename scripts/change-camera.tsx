import { Vector3 } from "three";

export const parseCoords = (
  settar: Vector3 | number[],
  setpos?: Vector3 | number[],
  distance: number = 1
) => {
  const target = Array.isArray(settar) ? new Vector3(...settar) : settar;

  const position = setpos
    ? Array.isArray(setpos)
      ? new Vector3(...setpos)
      : setpos
    : new Vector3(target.x, target.y + distance, target.z + distance * 2);

  return { target, position };
};
