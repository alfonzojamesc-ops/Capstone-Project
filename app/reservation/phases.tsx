import { db } from "@/firebaseConfig";
import { Phase } from "@/types/firestore-types";
import { useRouter } from "expo-router";
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

interface PhaseDoc {
  id: string;
  data: Phase;
}

export default function PhasesScreen() {
  const [phases, setPhases] = useState<PhaseDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPhases = async () => {
      try {
        const snapshot = await getDocs(collection(db, "phases"));
        const data: PhaseDoc[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data() as Phase,
        }));

        // Sort phases by the numeric part of the phase ID
        data.sort((a, b) => {
          // Extract numeric part from the phase ID (assuming format like 'ph0', 'ph1', 'ph10', etc.)
          const numA = parseInt(a.id.replace("ph", ""));
          const numB = parseInt(b.id.replace("ph", ""));

          return numA - numB; // Numeric sorting
        });

        setPhases(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPhases();
  }, []);

  if (loading)
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phases</Text>
      <FlatList
        data={phases}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              router.push({
                pathname: "./phases/blocks",
                params: {
                  phase: JSON.stringify({ id: item.id, data: item.data }),
                },
              })
            }
          >
            <Text style={styles.itemText}>{item.id}</Text>
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
