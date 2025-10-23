import {SafeArea} from "@/components/safe-area";
import SlotList from "@/components/slots/slot-list";
import { sampleData } from "@/constants/sample-data";
import { useLocalSearchParams } from "expo-router";

export default function Slot() {
  const { block } = useLocalSearchParams(); // "block" comes from the URL param
  const blockData = sampleData.blocks.find((b) => b.id === block);
  return (
    <SafeArea>
      <SlotList block={blockData} />
    </SafeArea>
  );
}
