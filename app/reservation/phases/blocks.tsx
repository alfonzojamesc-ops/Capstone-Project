import Header from "@/components/header";
import { db } from "@/firebaseConfig";
import { back } from "@/scripts/back";
import { Block, Phase } from "@/types/firestore-types";
import { useLocalSearchParams, useRouter } from "expo-router";
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

interface BlockDoc {
  id: string;
  data: Block;
  plots_available: number;
  total_plots: number;
}

export default function BlocksScreen() {
  const { phase } = useLocalSearchParams<{ phase: string }>();
  const router = useRouter();
  const parsedPhase: { id: string; data: Phase } = phase
    ? JSON.parse(phase)
    : null;

  const [blocks, setBlocks] = useState<BlockDoc[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!parsedPhase) return;

    const fetchBlocks = async () => {
      try {
        const snapshot = await getDocs(
          collection(db, "phases", parsedPhase.id, "blocks")
        );

        const data: BlockDoc[] = await Promise.all(
          snapshot.docs.map(async (doc) => {
            const blockData = doc.data() as Block;

            const plotsSnap = await getDocs(
              collection(
                db,
                "phases",
                parsedPhase.id,
                "blocks",
                doc.id,
                "plots"
              )
            );

            let availableCount = 0;
            plotsSnap.forEach((plotDoc) => {
              const plot = plotDoc.data() as any;
              if (plot.status?.toLowerCase() === "available") {
                availableCount++;
              }
            });

            return {
              id: doc.id,
              data: blockData,
              plots_available: availableCount,
              total_plots: plotsSnap.size,
            };
          })
        );

        // Sort blocks numerically
        data.sort((a, b) => {
          const numA = parseInt(a.id.split("block_")[1]);
          const numB = parseInt(b.id.split("block_")[1]);
          return numA - numB;
        });

        setBlocks(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlocks();
  }, [parsedPhase]);

  if (loading)
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );

  const phaseNumber = parsedPhase?.id.replace(/phase_/i, "");
  const title = `Blocks of Phase ${phaseNumber}`;

  const getColorForBlock = (available: number, total: number) => {
    if (total === 0) return "#888"; // gray for edge case
    const ratio = available / total;
    if (available === 0) return "firebrick";
    if (ratio > 0.7) return "orange";
    return "limegreen";
  };

  return (
    <View style={styles.container}>
      <Header title={title} showBackButton onBackPress={() => back("./")} />

      <FlatList
        data={blocks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const blockColor = getColorForBlock(
            item.plots_available,
            item.total_plots
          );
          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() =>
                router.push({
                  pathname: "./blocks/plots",
                  params: {
                    phase: JSON.stringify(parsedPhase),
                    block: JSON.stringify({ id: item.id, data: item.data }),
                  },
                })
              }
            >
              <Text style={[styles.itemText, { color: blockColor }]}>
                {item.id.replace(/block_/i, "Block ")}
              </Text>
              <Text>
                Plots available: {item.plots_available}/{item.total_plots}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  item: { padding: 12, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  itemText: { fontWeight: "bold", fontSize: 18 },
});
