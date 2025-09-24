import {
  MyIcon,
  MyLayouter,
  MyText,
} from "@/my-components/my-generic-components";
import { useThemeStore } from "@/my-scripts/my-stores/my-store-theme";
import { AlarmClock } from "lucide-react";

export default function Home() {
  const { colors } = useThemeStore();
  return (
    <MyLayouter
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <MyLayouter c="32">
        <MyText>test</MyText>
        <MyIcon name={AlarmClock} />
      </MyLayouter>
    </MyLayouter>
  );
}
