import React, { useState } from "react";
import { Text, View } from "react-native";
import {
  VictoryArea,
  VictoryChart,
  VictoryGroup,
  VictoryLabel,
  VictoryPolarAxis,
  VictoryTheme,
} from "victory";

export function PhasesLytics({
  data = [
    {
      "Phase 0": 20,
      "Phase 1": 40,
      "Phase 2": 5,
    },
  ],
  maxima = [
    {
      "Phase 0": 50,
      "Phase 1": 50,
      "Phase 2": 50,
    },
  ],
}) {
  const [state, setState] = useState({
    data: processData(data, maxima),
    maxima: getMaxima(maxima),
  });

  const size = 225;
  return (
    <>
      <View
        style={{
          borderRadius: size / 2,
          overflow: "visible",
          height: size,
          width: size,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: "200%",
            width: "200%",
          }}
        >
          <VictoryChart polar theme={VictoryTheme.clean} domain={{ y: [0, 1] }}>
            <VictoryGroup
              style={{
                data: {
                  fillOpacity: 0.2,
                  strokeWidth: 2,
                },
              }}
            >
              {state.data.map((data, i) => (
                <VictoryArea key={i} data={data} />
              ))}
            </VictoryGroup>
            {Object.keys(state.maxima).map((key, i) => (
              <VictoryPolarAxis
                key={i}
                dependentAxis
                style={{
                  axisLabel: {
                    padding: size * 0.125,
                  },
                  axis: {
                    stroke: "none",
                  },
                  grid: {
                    stroke: "grey",
                    strokeWidth: 0.25,
                    opacity: 0.5,
                    // @ts-expect-error
                    strokeDasharray: null,
                  },
                }}
                tickLabelComponent={<VictoryLabel labelPlacement="vertical" />}
                labelPlacement="vertical"
                axisValue={i + 1}
                label={key}
                tickFormat={(t) => Math.ceil(t * state.maxima[key])}
                tickValues={[0.33, 0.66, 1]}
              />
            ))}
          </VictoryChart>
        </View>
      </View>
      <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 20 }}>
        Plots Occupied
      </Text>
    </>
  );
}

function getMaxima(data) {
  const groupedData = Object.keys(data[0]).reduce((memo, key) => {
    memo[key] = data.map((d) => d[key]);
    return memo;
  }, {});
  return Object.keys(groupedData).reduce((memo, key) => {
    memo[key] = Math.max(...groupedData[key]);
    return memo;
  }, {});
}

function processData(data, maxima) {
  const maxByGroup = getMaxima(maxima);
  const makeDataArray = (d) => {
    return Object.keys(d).map((key) => ({
      x: key,
      y: d[key] / maxByGroup[key],
    }));
  };
  return data.map((datum) => makeDataArray(datum));
}
