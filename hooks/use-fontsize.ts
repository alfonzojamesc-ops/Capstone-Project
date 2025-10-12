import { useWindowDimensions } from "react-native";

const useFontSize = (minSize?: number, maxSize?: number, multiplier = 1) => {
  const { width } = useWindowDimensions();

  let size = width * 0.03;

  if (multiplier != 1) size = size * multiplier;

  if (size < (minSize ?? 14)) return minSize ?? 14;
  if (size > (maxSize ?? 32)) return maxSize ?? 32;

  return size;
};
export default useFontSize;
