import { dbAdd } from "@/scripts/firestore";
import { Phase, Plot } from "@/types/firestore-types";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Test() {
  const [hover, setHover] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable
        onHoverIn={() => setHover(true)}
        onHoverOut={() => setHover(false)}
        style={{
          backgroundColor: hover ? "gray" : "black",
          padding: 20,
          borderRadius: 10,
        }}
        onPress={test}
      >
        <Text style={{ color: hover ? "black" : "white" }}>Hello World</Text>
      </Pressable>
    </View>
  );
}

function test() {
  dbAdd("plots", phases);
}

const phases: Phase[] = [
  {
    status: "available",
    maintenance_status: "good",
  },
  {
    status: "reserved",
    owner_id: "owner_001",
    maintenance_status: "needs_care",
  },
  {
    status: "occupied",
    owner_id: "owner_002",
    maintenance_status: "under_maintenance",
  },
  {
    status: "available",
  },
  {
    status: "reserved",
    owner_id: "owner_003",
    maintenance_status: "good",
  },
  {
    status: "occupied",
    owner_id: "owner_004",
  },
];
