import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';

export function IndexTitleCard() {
  return (
    <Card size="md" variant="elevated" className="m-3">
      <Heading size="xl" className="mb-1">
        BRS3DVNAV: San Jose Cemetery Park
      </Heading>
      <Text size="lg">Burial Reservation System with 3D Navigation</Text>
    </Card>
  );
}
