import { mockData } from "@/constants/mock-data-structure";
import { Phase } from "@/types/firestore-types";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryStack } from "victory";

interface PlotsLyticsProps {
  data?: Record<string, Phase>;
}
const statusColors = {
  available: "green",
  reserved: "orange",
  occupied: "red",
};

const PlotsLytics: React.FC<PlotsLyticsProps> = ({ data = mockData }) => {
  if (!data) {
    return (
      <View style={{ padding: 20 }}>
        <Text>No data available</Text>
      </View>
    );
  }

  const getPhaseData = (phaseKey: string, phase: Phase) => {
    const blockNames = Object.keys(phase.blocks);
    const phaseData = blockNames.map((blockName) => {
      const block = phase.blocks[blockName];
      let availableCount = 0;
      let reservedCount = 0;
      let occupiedCount = 0;

      Object.values(block.plots).forEach((plot) => {
        switch (plot.status) {
          case "available":
            availableCount++;
            break;
          case "reserved":
            reservedCount++;
            break;
          case "occupied":
            occupiedCount++;
            break;
        }
      });

      return {
        blockName,
        available: availableCount,
        reserved: reservedCount,
        occupied: occupiedCount,
      };
    });
    return phaseData;
  };

  return (
    <ScrollView style={{ flex: 1, width: "100%" }}>
      {Object.entries(data).map(([phaseKey, phase]) => {
        const phaseData = getPhaseData(phaseKey, phase);

        return (
          <View
            key={phaseKey}
            style={{
              marginBottom: 20,
            }}
          >
            <View
              style={{
                padding: 10,
                backgroundColor: "#004080",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  fontSize: 24,
                  flex: 1,
                  textAlign: "center",
                }}
              >
                Phase {phaseKey.split("_")[1]}
              </Text>
            </View>

            <VictoryChart
              domainPadding={20}
              height={350}
              padding={{ top: 20, bottom: 50, left: 50, right: 50 }}
              horizontal
            >
              <VictoryAxis
                style={{
                  tickLabels: { fontSize: 6 },
                }}
              />

              <VictoryAxis
                dependentAxis
                style={{
                  tickLabels: { fontSize: 6 },
                }}
              />

              <VictoryBar
                data={phaseData
                  .map((block) => {
                    const match = block.blockName.match(/_(\d+)$/);
                    const blockLabel = match
                      ? `Block ${match[1]}`
                      : block.blockName;
                    return {
                      x: blockLabel,
                      y: block.available,
                    };
                  })
                  .reverse()}
                style={{
                  data: { fill: statusColors.available, width: 15 },
                }}
              />

              <VictoryBar
                data={phaseData
                  .map((block) => {
                    const match = block.blockName.match(/_(\d+)$/);
                    const blockLabel = match
                      ? `Block ${match[1]}`
                      : block.blockName;
                    return {
                      x: blockLabel,
                      y: block.reserved,
                    };
                  })
                  .reverse()}
                style={{
                  data: { fill: statusColors.reserved, width: 15 },
                }}
              />

              <VictoryBar
                data={phaseData
                  .map((block) => {
                    const match = block.blockName.match(/_(\d+)$/);
                    const blockLabel = match
                      ? `Block ${match[1]}`
                      : block.blockName;
                    return {
                      x: blockLabel,
                      y: block.occupied,
                    };
                  })
                  .reverse()}
                style={{
                  data: { fill: statusColors.occupied, width: 15 },
                }}
              />
              <VictoryStack
                colorScale={[
                  statusColors.available,
                  statusColors.reserved,
                  statusColors.occupied,
                ]}
              />
            </VictoryChart>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default PlotsLytics;
