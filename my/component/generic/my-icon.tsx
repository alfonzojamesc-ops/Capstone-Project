// requires: npm install lucide-react
import { LucideIcon } from "lucide-react";
import { memo } from "react";

const MyIcon = ({
  name: Icon,
  size = DEFAULT_PROPS.size,
  color = DEFAULT_PROPS.color,
  strokeWidth = DEFAULT_PROPS.strokeWidth,
}: MyIconProps) => {
  if (!Icon) return null;
  return <Icon size={size} color={color} strokeWidth={strokeWidth} />;
};
export default memo(MyIcon);

const DEFAULT_PROPS = {
  size: 24,
  color: "currentColor",
  strokeWidth: 2,
};

type MyIconProps = {
  name?: LucideIcon;
  color?: string;
  size?: number;
  strokeWidth?: number;
};