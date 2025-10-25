import Header from "@/components/header";
import { db } from "@/firebaseConfig";
import { back } from "@/scripts/back";
import { Block, Plot } from "@/types/firestore-types";
import { useLocalSearchParams } from "expo-router";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface PlotDoc {
  id: string;
  data: Plot;
}

export default function PlotsScreen() {
  const { phaseId, block } = useLocalSearchParams<{
    phaseId: string;
    block: string;
  }>();
  const parsedBlock: { id: string; data: Block } = block
    ? JSON.parse(block)
    : null;

  const [plots, setPlots] = useState<PlotDoc[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!parsedBlock || !phaseId) return;

    const fetchPlots = async () => {
      try {
        const snapshot = await getDocs(
          collection(db, "phases", phaseId, "blocks", parsedBlock.id, "plots")
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
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlots();
  }, [parsedBlock, phaseId]);

  if (loading)
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );

  // ✅ Convert block ID like "block_1" → "Block 1"
  const blockNumber = parsedBlock?.id.replace(/block_/i, "");
  const title = `Plots in Block ${blockNumber}`;

  return (
    <View style={styles.container}>
      <Header
        title={title}
        showBackButton
        style={{ backgroundColor: "#fff" }}
        onBackPress={() => back("./")}
      />

      <FlatList
        data={plots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.id}</Text>
            <Text>Status: {item.data.status}</Text>
            <Text>
              Owner: {item.data.owner?.first_name} {item.data.owner?.last_name}
            </Text>
          </View>
        )}
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
