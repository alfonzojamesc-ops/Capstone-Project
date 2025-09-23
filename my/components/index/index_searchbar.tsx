import { Input, InputField, InputSlot } from "@/components/ui/input";
import { Search } from "lucide-react-native";

export function IndexSearchBar() {
  return (
    <Input variant="rounded" size="xl" className="p-2 bg-secondary-0">
      <InputSlot className="pl-3">
        <Search className="color-primary-950" />
      </InputSlot>
      <InputField placeholder="Search..." />
    </Input>
  );
}
