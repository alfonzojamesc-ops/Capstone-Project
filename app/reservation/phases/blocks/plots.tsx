import Header from "@/components/header";
import { PersonCardOverlay } from "@/components/person-card";
import { ReservationFormOverlay } from "@/components/reservation-form-overlay";
import { db } from "@/firebaseConfig";
import { Block, Phase, Plot } from "@/types/firestore-types";
import { router, useLocalSearchParams } from "expo-router";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
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
  const [reservationVisible, setReservationVisible] = useState(false);
  const [selectedAvailablePlot, setSelectedAvailablePlot] =
    useState<PlotDoc | null>(null);

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

  const blockNumber = parsedBlock?.id.replace(/block_/i, "");
  const title = `Plots in Block ${blockNumber}`;

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back(); 
    } else if (parsedPhase) {
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
    if (plot.data.status === "available") {
      setSelectedAvailablePlot(plot);
      setReservationVisible(true);
    } else if (
      plot.data.status !== "available" &&
      (plot.data.owner || plot.data.deceased)
    ) {
      setSelectedPlot(plot);
      setOverlayVisible(true);
    }
  };

  const getPlotNumber = (id: string) => {
    const parts = id.split("_");
    return parts[parts.length - 1]; 
  };

  const getDeceasedName = (deceased: {
    first_name: string;
    last_name: string;
  }) => {
    return deceased ? `${deceased.first_name} ${deceased.last_name}` : null;
  };

  return (
    <View style={styles.container}>
      <Header title={title} showBackButton onBackPress={handleBackPress} />

      <FlatList
        data={plots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const plotNumber = getPlotNumber(item.id);
          const deceasedName = getDeceasedName(item.data.deceased);
          const isAvailable = item.data.status === "available";

          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() => handlePlotPress(item)}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 8,
                }}
              >
                <Text
                  style={[
                    styles.itemText,
                    isAvailable && { color: "limegreen" },
                  ]}
                >
                  Plot {plotNumber} |
                </Text>
                <Image
                  source={{ uri: item.data.deceased.image }}
                  style={styles.image}
                />
                <Text style={styles.itemText}>
                  {deceasedName ? `${deceasedName}` : ""}
                </Text>
              </View>
              <Text>Status: {item.data.status}</Text>
              <Text>
                Owner: {item.data.owner?.first_name ?? "-"}{" "}
                {item.data.owner?.last_name ?? ""}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

      {selectedPlot && (
        <PersonCardOverlay
          visible={overlayVisible}
          onClose={() => setOverlayVisible(false)}
          plot={selectedPlot}
        />
      )}

      {selectedAvailablePlot && (
        <ReservationFormOverlay
          visible={reservationVisible}
          onClose={() => setReservationVisible(false)}
          targetPlotId={selectedAvailablePlot.id}
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
  image: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
});
