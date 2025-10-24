import { generateFullData } from "@/scripts/generate-mock-data";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Test() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
      }}
    >
      <Pressable
        onHoverIn={() => setHover1(true)}
        onHoverOut={() => setHover1(false)}
        style={{
          backgroundColor: hover1 ? "grey" : "black",
          padding: 20,
          borderRadius: 10,
        }}
        onPress={async () => {
          await generateFullData().catch(console.error);
        }}
      >
        <Text style={{ color: hover1 ? "black" : "white" }}>Code Gen</Text>
      </Pressable>

      <Pressable
        onHoverIn={() => setHover2(true)}
        onHoverOut={() => setHover2(false)}
        style={{
          backgroundColor: hover2 ? "grey" : "black",
          padding: 20,
          borderRadius: 10,
        }}
        onPress={() => {
          // Future upload logic here
        }}
      >
        <Text style={{ color: hover2 ? "black" : "white" }}>Upload</Text>
      </Pressable>
    </View>
  );
}
