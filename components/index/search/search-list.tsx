import { db } from "@/firebaseConfig";
import { useCamera } from "@/hooks/camera-context";
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

interface Deceased {
  first_name: string;
  middle_name?: string;
  last_name: string;
  image?: string;
  date_of_birth?: string;
  date_of_death?: string;
}

interface SearchListProps {
  searchQuery: string;
  onSelect?: (person: Deceased) => void;
}

export default function SearchList({ searchQuery, onSelect }: SearchListProps) {
  const [deceasedList, setDeceasedList] = useState<Deceased[]>([]);
  const [filtered, setFiltered] = useState<Deceased[]>([]);
  const [loading, setLoading] = useState(true);
  const { setCamera } = useCamera();

  useEffect(() => {
    const fetchDeceased = async () => {
      try {
        setLoading(true);
        const phaseSnap = await getDocs(collection(db, "phases"));
        const allDeceased: Deceased[] = [];

        for (const phaseDoc of phaseSnap.docs) {
          const blocksSnap = await getDocs(
            collection(db, "phases", phaseDoc.id, "blocks")
          );

          for (const blockDoc of blocksSnap.docs) {
            const plotsSnap = await getDocs(
              collection(
                db,
                "phases",
                phaseDoc.id,
                "blocks",
                blockDoc.id,
                "plots"
              )
            );

            plotsSnap.forEach((plotDoc) => {
              const plotData = plotDoc.data() as any;
              if (plotData.deceased) {
                allDeceased.push(plotData.deceased);
              }
            });
          }
        }

        setDeceasedList(allDeceased);
      } catch (err) {
        console.error("Error fetching deceased:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDeceased();
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      setFiltered([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filteredData = deceasedList.filter((d) => {
      const fullName = `${d.first_name} ${d.middle_name ?? ""} ${
        d.last_name
      }`.toLowerCase();
      return fullName.includes(query);
    });

    setFiltered(filteredData);
  }, [searchQuery, deceasedList]);

  if (loading) {
    return (
      <View style={styles.placeholder}>
        <ActivityIndicator size="small" color="#333" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (!searchQuery)
    return (
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>Type a name to search...</Text>
      </View>
    );

  if (searchQuery && filtered.length === 0 && !loading)
    return (
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>No results found.</Text>
      </View>
    );

  return (
    <FlatList
      data={filtered}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setCamera([105.36354065, -0.92499995, -53.42383194]);
            console.log("Selected:", item.first_name, item.last_name);
            onSelect?.(item);
          }}
          style={styles.item}
        >
          <Image
            source={{ uri: item.image || "https://via.placeholder.com/50" }}
            style={styles.image}
          />
          <View>
            <Text style={styles.name}>
              {item.first_name} {item.middle_name ?? ""} {item.last_name}
            </Text>
            {item.date_of_birth && item.date_of_death && (
              <Text style={styles.dates}>
                {item.date_of_birth} — {item.date_of_death}
              </Text>
            )}
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  placeholder: {
    padding: 16,
    alignItems: "center",
  },
  placeholderText: {
    color: "#666",
  },
  loadingText: {
    color: "#333",
    marginTop: 5,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingHorizontal: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  dates: {
    color: "#777",
    fontSize: 13,
  },
});
