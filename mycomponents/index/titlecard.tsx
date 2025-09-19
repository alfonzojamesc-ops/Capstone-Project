import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

function MyTitleCard() {
  return (
    <Card size="md" variant="elevated" className="m-3 bg-primary-500">
      <Heading size="md" className="mb-1 text-secondary-0">
        San Jose Cemetery Park Burial Reservation System
      </Heading>
      <Text size="sm" className="text-secondary-500">
        with 3D Map for Navigation
      </Text>
    </Card>
  );
}
export default MyTitleCard;
