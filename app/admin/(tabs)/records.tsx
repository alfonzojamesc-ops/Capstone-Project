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

import { Picker } from "@react-native-picker/picker";

const processDataIntoHierarchy = (dataObject) => {
  const hierarchy = [];
  Object.entries(dataObject).forEach(([phaseKey, phaseValue]) => {
    if (!phaseValue || !phaseValue.blocks) return;
    const blocksArray = [];
    Object.entries(phaseValue.blocks).forEach(([blockKey, blockValue]) => {
      if (!blockValue || !blockValue.plots) return;
      const plotsArray = [];
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
  const [hierarchicalData, setHierarchicalData] = useState([]);
  const [selectedPhase, setSelectedPhase] = useState(null);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [filteredPlots, setFilteredPlots] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const plotsPerPage = 10;
  const [expandedOwnerId, setExpandedOwnerId] = useState(null);

  useEffect(() => {
    const data = processDataIntoHierarchy(mockData);
    setHierarchicalData(data);
    if (data.length > 0) {
      setSelectedPhase(data[0].phase);
    }
  }, []);

  const currentPhase = hierarchicalData.find((p) => p.phase === selectedPhase);
  const blocks = currentPhase ? currentPhase.blocks : [];
  const currentBlockObj = blocks.find((b) => b.block === selectedBlock);
  const allPlots = currentBlockObj ? currentBlockObj.plots : [];

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
      <View style={styles.navigatorContainer}>
        <Text style={styles.label}>Phase:</Text>
        <Picker
          selectedValue={selectedPhase}
          style={styles.picker}
          onValueChange={(itemValue) => {
            setSelectedPhase(itemValue);
            setSelectedBlock(null);
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
            setCurrentPage(1);
            setExpandedOwnerId(null);
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

      <FlatList
        data={currentPlots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isOwnerExpanded = item.id === expandedOwnerId;
          const showDetails = item.status !== "available";

          return (
            <View style={styles.plotContainer}>
              <Text style={styles.plotHeader}>Plot: {item.plot}</Text>

              <Text>
                <Text style={styles.boldText}>Grid Coordinates: </Text>{" "}
                {item.grid_coordinates.join(", ")}
              </Text>
              <Text>
                <Text style={styles.boldText}>Status: </Text>
                {item.status}
              </Text>
              <Text>
                <Text style={styles.boldText}>Maintenance: </Text>
                {item.maintenance_status}
              </Text>

              {item.deceased && item.deceased.image && (
                <Image
                  source={{ uri: item.deceased.image }}
                  style={styles.deceasedImage}
                />
              )}

              {item.deceased && showDetails && (
                <View style={styles.deceasedDetails}>
                  <Text>
                    <Text style={styles.boldText}>Name: </Text>
                    {item.deceased.first_name} {item.deceased.middle_name}{" "}
                    {item.deceased.last_name}
                  </Text>
                  <Text>
                    <Text style={styles.boldText}>Date of Birth: </Text>
                    {item.deceased.date_of_birth}
                  </Text>
                  <Text>
                    <Text style={styles.boldText}>Date of Death: </Text>
                    {item.deceased.date_of_death}
                  </Text>
                  <Text>
                    <Text style={styles.boldText}>Burial Type: </Text>
                    {item.deceased.burial_type}
                  </Text>
                  <Text>
                    <Text style={styles.boldText}>Funeral Home: </Text>
                    {item.deceased.funeral_home}
                  </Text>
                  <Text>
                    <Text style={styles.boldText}>Notes: </Text>
                    {item.deceased.notes}
                  </Text>
                </View>
              )}

              {item.owner && showDetails && (
                <View style={{ marginTop: 10 }}>
                  <TouchableOpacity
                    onPress={() =>
                      setExpandedOwnerId(isOwnerExpanded ? null : item.id)
                    }
                    style={styles.collapsibleHeader}
                  >
                    <Text style={styles.collapsibleHeaderText}>
                      {isOwnerExpanded ? "Hide Owner" : "Show Owner"}
                    </Text>
                  </TouchableOpacity>
                  {isOwnerExpanded && (
                    <View style={styles.ownerDetails}>
                      <Text>
                        <Text style={styles.boldText}>First Name: </Text>
                        {item.owner.first_name}
                      </Text>
                      <Text>
                        <Text style={styles.boldText}>Middle Name: </Text>
                        {item.owner.middle_name}
                      </Text>
                      <Text>
                        <Text style={styles.boldText}>Last Name: </Text>
                        {item.owner.last_name}
                      </Text>
                      <Text>
                        <Text style={styles.boldText}>Sex: </Text>
                        {item.owner.sex}
                      </Text>
                      <Text>
                        <Text style={styles.boldText}>Date of Birth: </Text>
                        {item.owner.date_of_birth}
                      </Text>
                      <Text>
                        <Text style={styles.boldText}>Address: </Text>
                        {item.owner.address}
                      </Text>
                      <Text>
                        <Text style={styles.boldText}>Phone: </Text>
                        {item.owner.phone}
                      </Text>
                      <Text>
                        <Text style={styles.boldText}>Email: </Text>
                        {item.owner.email}
                      </Text>
                      <Text>
                        <Text style={styles.boldText}>Purchase Date: </Text>
                        {item.owner.purchase_date}
                      </Text>
                      <Text>
                        <Text style={styles.boldText}>Deed Number: </Text>
                        {item.owner.deed_number}
                      </Text>
                      <Text>
                        <Text style={styles.boldText}>Notes: </Text>
                        {item.owner.notes}
                      </Text>
                    </View>
                  )}
                </View>
              )}
            </View>
          );
        }}
        contentContainerStyle={styles.listContainer}
      />

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
  collapsibleHeader: {
    marginTop: 10,
    padding: 5,
    backgroundColor: "#ddd",
    borderRadius: 4,
  },
  collapsibleHeaderText: {
    fontWeight: "bold",
  },
  ownerDetails: {
    marginTop: 5,
    paddingLeft: 10,
  },
  deceasedImage: {
    width: 100,
    height: 100,
    marginTop: 5,
  },
  deceasedDetails: {
    marginTop: 10,
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default RecordPage;
