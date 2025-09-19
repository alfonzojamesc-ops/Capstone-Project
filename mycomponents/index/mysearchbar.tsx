import { SearchIcon } from "@/components/ui/icon";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";

function MySearchBar() {
  return (
    <Input variant="rounded" className="bg-secondary-0">
      <InputField placeholder="Search slots..." />
      <InputSlot className="pr-3">
        <InputIcon as={SearchIcon} className="text-typography-950"/>
      </InputSlot>
    </Input>
  );
}
export default MySearchBar;
