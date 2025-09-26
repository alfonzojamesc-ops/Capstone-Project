import { useMyTheme } from "@/my/scripts/my-theme-context";
import { LucideIcon } from "lucide-react";
import { memo, useMemo } from "react";

type MyIconProps = {
  name?: LucideIcon;
  color?: string;
  size?: number;
  stroke?: number;
};

const MyIcon = memo(({ name: Icon, size = 24, color, stroke }: MyIconProps) => {
  const { palette } = useMyTheme();

  const resolvedColor = color ?? palette.neutral1;
  const iconProps = useMemo(
    () => ({
      size,
      color: resolvedColor,
      strokeWidth: stroke,
    }),
    [size, resolvedColor, stroke]
  );

  if (!Icon) return null;

  return <Icon {...iconProps} />;
});

MyIcon.displayName = "MyIcon";
export default MyIcon;
