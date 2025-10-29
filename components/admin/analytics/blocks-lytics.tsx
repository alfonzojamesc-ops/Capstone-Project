import { Text, View } from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
  VictoryTheme,
  VictoryTooltip,
} from "victory";

export function BlocksLytics({
  data = [
    [
      { x: "Phase 0", y: 50 },
      { x: "Phase 1", y: 150 },
      { x: "Phase 2", y: 63 },
    ],
    [
      { x: "Phase 0", y: 85 },
      { x: "Phase 1", y: 250 },
      { x: "Phase 2", y: 150 },
    ],
    [
      { x: "Phase 0", y: 354 },
      { x: "Phase 1", y: 608 },
      { x: "Phase 2", y: 425 },
    ],
  ],
}) {
  const size = 270;

  const getMaxima = () => {
    let maxY = 0;
    data.forEach((dataset) => {
      dataset.forEach((point) => {
        if (point.y > maxY) {
          maxY = point.y;
        }
      });
    });
    return maxY;
  };
  const maxYValue = getMaxima();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 10,
      }}
    >
      <View
        style={{
          height: size,
          overflow: "visible",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          borderRadius: 20,
        }}
      >
        <View style={{ height: "120%", transform: [{ translateY: 8 }] }}>
          <VictoryChart
            theme={VictoryTheme.clean}
            domain={{ y: [0, maxYValue] }}
            domainPadding={{ x: 40 }}
          >
            <VictoryLegend
              x={90}
              y={8}
              orientation="horizontal"
              data={[
                {
                  name: "Available",
                  symbol: { fill: "limegreen" },
                },
                {
                  name: "Reserved",
                  symbol: { fill: "orange" },
                },
                {
                  name: "Occupied",
                  symbol: { fill: "crimson" },
                },
              ]}
              style={{
                border: { stroke: "none" },
              }}
            />
            <VictoryGroup
              offset={20}
              style={{ data: { width: 15 } }}
              labelComponent={<VictoryTooltip />}
            >
              <VictoryBar
                data={data[0]}
                labels={({ datum }) => datum.y}
                style={{
                  data: {
                    fill: ({ active }) => (active ? "dodgerblue" : "limegreen"),
                  },
                }}
                events={[
                  {
                    target: "data",
                    eventHandlers: {
                      onMouseEnter: () => {
                        return [
                          {
                            mutation: () => ({ active: true }),
                          },
                        ];
                      },
                      onMouseLeave: () => {
                        return [
                          {
                            mutation: () => ({ active: false }),
                          },
                        ];
                      },
                    },
                  },
                ]}
              />
              <VictoryBar
                data={data[1]}
                labels={({ datum }) => datum.y}
                style={{
                  data: {
                    fill: ({ active }) => (active ? "dodgerblue" : "orange"),
                  },
                }}
                events={[
                  {
                    target: "data",
                    eventHandlers: {
                      onMouseEnter: () => {
                        return [
                          {
                            mutation: () => ({ active: true }),
                          },
                        ];
                      },
                      onMouseLeave: () => {
                        return [
                          {
                            mutation: () => ({ active: false }),
                          },
                        ];
                      },
                    },
                  },
                ]}
              />
              <VictoryBar
                data={data[2]}
                labels={({ datum }) => datum.y}
                style={{
                  data: {
                    fill: ({ active }) => (active ? "dodgerblue" : "crimson"),
                  },
                }}
                events={[
                  {
                    target: "data",
                    eventHandlers: {
                      onMouseEnter: () => {
                        return [
                          {
                            mutation: () => ({ active: true }),
                          },
                        ];
                      },
                      onMouseLeave: () => {
                        return [
                          {
                            mutation: () => ({ active: false }),
                          },
                        ];
                      },
                    },
                  },
                ]}
              />
            </VictoryGroup>
          </VictoryChart>
        </View>
      </View>
      <Text style={{ fontSize: 16, fontWeight: "500" }}>Plots Statuses</Text>
    </View>
  );
}
