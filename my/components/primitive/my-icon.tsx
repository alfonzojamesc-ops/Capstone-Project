import { useMyTheme } from "@/my/scripts/my-theme-context";
import { LucideIcon } from "lucide-react";
import { memo, useMemo } from "react";

type MyIconProps = {
  name?: LucideIcon;
  color?: string;
  size?: number;
  stroke?: number;
};

const MyIcon = memo(({ name: Icon, size = 36, color, stroke }: MyIconProps) => {
  const { palette } = useMyTheme();

  if (!Icon) return null;

  const iconProps = useMemo(
    () => ({
      size,
      color: color ?? palette.neutral1,
      strokeWidth: stroke,
    }),
    [size, color, stroke, palette.neutral1]
  );

  return <Icon {...iconProps} />;
});

MyIcon.displayName = "MyIcon";
export default MyIcon;
