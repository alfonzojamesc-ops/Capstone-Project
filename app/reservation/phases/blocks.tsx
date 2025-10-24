import { db } from "@/firebaseConfig";
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
        const data: BlockDoc[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data() as Block,
        }));
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blocks of {parsedPhase?.id}</Text>
      <FlatList
        data={blocks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              router.push({
                pathname: "./blocks/plots",
                params: {
                  phaseId: parsedPhase?.id,
                  block: JSON.stringify({ id: item.id, data: item.data }),
                },
              })
            }
          >
            <Text style={styles.itemText}>{item.id}</Text>
            <Text>Plots available: {item.data.max_plots}</Text>
          </TouchableOpacity>
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
