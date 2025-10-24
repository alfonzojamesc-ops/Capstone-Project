import { db } from "@/firebaseConfig";
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plots in {parsedBlock?.id}</Text>
      <FlatList
        data={plots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.id}</Text>
            <Text>Status: {item.data.status}</Text>
            <Text>
              Owner: {item.data.owner.first_name} {item.data.owner.last_name}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  item: { padding: 12, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  itemText: { fontWeight: "bold", fontSize: 18 },
});
