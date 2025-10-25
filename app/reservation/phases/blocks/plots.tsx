import Header from "@/components/header";
import { PersonCardOverlay } from "@/components/person-card";
import { db } from "@/firebaseConfig";
import { Block, Phase, Plot } from "@/types/firestore-types";
import { router, useLocalSearchParams } from "expo-router";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface PlotDoc {
  id: string;
  data: Plot;
}

export default function PlotsScreen() {
  const { phase, block } = useLocalSearchParams<{
    phase: string;
    block: string;
  }>();

  const parsedPhase: { id: string; data: Phase } | null = phase
    ? JSON.parse(phase)
    : null;
  const parsedBlock: { id: string; data: Block } | null = block
    ? JSON.parse(block)
    : null;

  const [plots, setPlots] = useState<PlotDoc[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedPlot, setSelectedPlot] = useState<PlotDoc | null>(null);
  const [overlayVisible, setOverlayVisible] = useState(false);

  useEffect(() => {
    if (!parsedBlock || !parsedPhase) return;

    const fetchPlots = async () => {
      try {
        const snapshot = await getDocs(
          collection(
            db,
            "phases",
            parsedPhase.id,
            "blocks",
            parsedBlock.id,
            "plots"
          )
        );

        const data: PlotDoc[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data() as Plot,
        }));

        data.sort((a, b) => {
          const numA = parseInt(a.id.split("plot_")[1]);
          const numB = parseInt(b.id.split("plot_")[1]);
          return numA - numB;
        });

        setPlots(data);
      } catch (err) {
        console.error("Error fetching plots:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlots();
  }, [parsedBlock, parsedPhase]);

  if (loading)
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );

  // Convert block ID like "block_1" → "Block 1"
  const blockNumber = parsedBlock?.id.replace(/block_/i, "");
  const title = `Plots in Block ${blockNumber}`;

  // Smart Back Handler (works even after refresh)
  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back(); // normal navigation
    } else if (parsedPhase) {
      // fallback when refreshed
      router.push({
        pathname: "../../phases/blocks",
        params: {
          phase: JSON.stringify(parsedPhase),
        },
      });
    } else {
      console.warn("No phase data found for back navigation.");
    }
  };

  const handlePlotPress = (plot: PlotDoc) => {
    // Only open overlay if there is owner/deceased info
    if (
      plot.data.status !== "available" &&
      (plot.data.owner || plot.data.deceased)
    ) {
      setSelectedPlot(plot);
      setOverlayVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        title={title}
        showBackButton
        style={{ backgroundColor: "#fff" }}
        onBackPress={handleBackPress}
      />

      <FlatList
        data={plots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => handlePlotPress(item)}
          >
            <Text style={styles.itemText}>{item.id}</Text>
            <Text>Status: {item.data.status}</Text>
            <Text>
              Owner: {item.data.owner?.first_name ?? "-"}{" "}
              {item.data.owner?.last_name ?? ""}
            </Text>
          </TouchableOpacity>
        )}
      />

      {selectedPlot && (
        <PersonCardOverlay
          visible={overlayVisible}
          onClose={() => setOverlayVisible(false)}
          plot={selectedPlot}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  item: { padding: 12, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  itemText: { fontWeight: "bold", fontSize: 18 },
});
