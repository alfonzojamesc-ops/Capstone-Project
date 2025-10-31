import { mockData } from "@/constants/mock-data-structure";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Picker } from '@react-native-picker/picker';

// Define TypeScript interfaces for data structure
interface Plot {
  id: string;
  plot: string;
  grid_coordinates: any[];
  status: string;
  maintenance_status: string;
  owner?: {
    first_name: string;
    last_name: string;
  };
  deceased?: {
    image: string;
  };
}

interface Block {
  block: string;
  plots: Plot[];
}

interface Phase {
  phase: string;
  blocks: Block[];
}

type HierarchyData = Phase[];

const processDataIntoHierarchy = (dataObject: any): HierarchyData => {
  const hierarchy: HierarchyData = [];

  Object.entries(dataObject).forEach(([phaseKey, phaseValue]) => {
    if (!phaseValue || !phaseValue.blocks) return;

    const blocksArray: Block[] = [];

    Object.entries(phaseValue.blocks).forEach(([blockKey, blockValue]) => {
      if (!blockValue || !blockValue.plots) return;

      const plotsArray: Plot[] = [];

      Object.entries(blockValue.plots).forEach(([plotKey, plotValue]) => {
        if (!plotValue) return;

        plotsArray.push({
          id: `${phaseKey}-${blockKey}-${plotKey}`,
          plot: plotKey,
          grid_coordinates: plotValue.grid_coordinates,
          status: plotValue.status,
          maintenance_status: plotValue.maintenance_status,
          owner: plotValue.owner,
          deceased: plotValue.deceased,
        });
      });

      blocksArray.push({
        block: blockKey,
        plots: plotsArray,
      });
    });

    hierarchy.push({
      phase: phaseKey,
      blocks: blocksArray,
    });
  });

  return hierarchy;
};

const RecordPage = () => {
  const [hierarchicalData, setHierarchicalData] = useState<HierarchyData>([]);
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const [filteredPlots, setFilteredPlots] = useState<Plot[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const plotsPerPage = 10;

  useEffect(() => {
    const data = processDataIntoHierarchy(mockData);
    setHierarchicalData(data);
    if (data.length > 0) {
      setSelectedPhase(data[0].phase);
    }
  }, []);

  // Current selected phase object
  const currentPhase = hierarchicalData.find((p) => p.phase === selectedPhase);
  const blocks = currentPhase ? currentPhase.blocks : [];
  // Current selected block object
  const currentBlockObj = blocks.find((b) => b.block === selectedBlock);
  const allPlots = currentBlockObj ? currentBlockObj.plots : [];

  // When phase or block changes, reset page and filtered plots
  useEffect(() => {
    if (allPlots.length > 0) {
      setFilteredPlots(allPlots);
    } else {
      setFilteredPlots([]);
    }
    setCurrentPage(1);
  }, [selectedPhase, selectedBlock, hierarchicalData]);

  const handleNextPage = () => {
    if (currentPage * plotsPerPage < filteredPlots.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * plotsPerPage;
  const currentPlots = filteredPlots.slice(
    startIndex,
    startIndex + plotsPerPage
  );

  if (hierarchicalData.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No data available</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {/* Header for phase and block selection */}
      <View style={styles.navigatorContainer}>
        {/* Phase Picker */}
        <Text style={styles.label}>Phase:</Text>
        <Picker
          selectedValue={selectedPhase}
          style={styles.picker}
          onValueChange={(itemValue) => {
            setSelectedPhase(itemValue);
            setSelectedBlock(null); // reset block when phase changes
          }}
        >
          {hierarchicalData.map((phase) => (
            <Picker.Item
              key={phase.phase}
              label={phase.phase}
              value={phase.phase}
            />
          ))}
        </Picker>

        {/* Block Picker */}
        <Text style={styles.label}>Block:</Text>
        <Picker
          selectedValue={selectedBlock}
          style={styles.picker}
          onValueChange={(itemValue) => {
            setSelectedBlock(itemValue);
            setCurrentPage(1); // reset page
          }}
        >
          <Picker.Item label="Select Block" value={null} />
          {blocks.map((block) => (
            <Picker.Item
              key={block.block}
              label={block.block}
              value={block.block}
            />
          ))}
        </Picker>
      </View>

      {/* Plot List */}
      <FlatList
        data={currentPlots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.plotContainer}>
            <Text style={styles.plotHeader}>Plot: {item.plot}</Text>
            <Text>Grid Coordinates: {item.grid_coordinates.join(", ")}</Text>
            <Text>Status: {item.status}</Text>
            <Text>Maintenance: {item.maintenance_status}</Text>
            {item.owner && (
              <Text>
                Owner: {item.owner.first_name} {item.owner.last_name}
              </Text>
            )}
            {item.deceased && item.deceased.image && (
              <Image
                source={{ uri: item.deceased.image }}
                style={{ width: 50, height: 50, marginTop: 5 }}
              />
            )}
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />

      {/* Pagination controls */}
      <View style={styles.paginationContainer}>
        <TouchableOpacity
          onPress={handlePrevPage}
          disabled={currentPage === 1}
          style={styles.pageButton}
        >
          <Text style={styles.pageButtonText}>Previous</Text>
        </TouchableOpacity>
        <Text style={styles.pageInfo}>
          Page {currentPage} of {Math.ceil(filteredPlots.length / plotsPerPage)}
        </Text>
        <TouchableOpacity
          onPress={handleNextPage}
          disabled={currentPage * plotsPerPage >= filteredPlots.length}
          style={styles.pageButton}
        >
          <Text style={styles.pageButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  plotContainer: {
    backgroundColor: "#f0f0f0",
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
  plotHeader: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  navigatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    flexWrap: "wrap",
  },
  label: {
    marginRight: 5,
  },
  picker: {
    height: 40,
    width: 150,
    marginRight: 10,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  pageButton: {
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  pageButtonText: {
    color: "white",
  },
  pageInfo: {
    fontSize: 16,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RecordPage;