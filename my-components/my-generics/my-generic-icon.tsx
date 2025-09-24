import { useThemeStore } from "@/my-scripts/my-stores/my-store-theme";
import { LucideIcon } from "lucide-react";
import { memo, useMemo } from "react";

type MyIconProps = {
  name?: LucideIcon;
  color?: string;
  size?: number;
  stroke?: number;
};

const MyIcon = memo(({ name: Icon, size, color, stroke }: MyIconProps) => {
  const { colors } = useThemeStore();

  if (!Icon) return null;

  const iconProps = useMemo(
    () => ({
      size,
      color: color ?? colors.textPrimary,
      strokeWidth: stroke,
    }),
    [size, color, stroke, colors.textPrimary]
  );

  return <Icon {...iconProps} />;
});

MyIcon.displayName = "MyIcon";
export default MyIcon;
