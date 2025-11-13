import { RenderBlockPicker } from "@/components/admin/records/block-picker";
import { RenderPhasePicker } from "@/components/admin/records/phase-picker";
import { PlotItem } from "@/components/admin/records/plot-item";
import { mockData } from "@/constants/mock-data-structure";
import { db } from "@/firebaseConfig";
import { processDataIntoHierarchy } from "@/scripts/admin/process-data";
import { plotMatchesSearch } from "@/scripts/admin/search-data";
import { Picker } from "@react-native-picker/picker";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { RenderPagination } from "./pagination";

export const RecordPage = () => {
  const [hierarchicalData, setHierarchicalData] = useState([]);
  const [selectedPhase, setSelectedPhase] = useState(null);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [filteredPlots, setFilteredPlots] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const plotsPerPage = 10;
  const [expandedOwnerId, setExpandedOwnerId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editingPlot, setEditingPlot] = useState(null);

  const handleEdit = (id) => {
    const plotToEdit = filteredPlots.find((plot) => plot.id === id);
    if (plotToEdit) {
      setEditingPlot(JSON.parse(JSON.stringify(plotToEdit))); // deep clone
      setIsEditModalVisible(true);
    }
  };

  const handleSaveEdit = async () => {
    if (!editingPlot) return;

    try {
      const plotDocRef = doc(
        db,
        "phases",
        selectedPhase, // e.g., "phase_0"
        "blocks",
        selectedBlock, // e.g., "block_1"
        "plots",
        editingPlot.id.split("-")[2] // "ph0_blk1_plot_1"
      );

      await setDoc(plotDocRef, editingPlot, { merge: true });

      const updatedHierarchy = hierarchicalData.map((phase) => {
        if (phase.phase !== selectedPhase) return phase;

        const updatedBlocks = phase.blocks.map((block) => {
          if (block.block !== selectedBlock) return block;

          const updatedPlots = block.plots.map((plot) =>
            plot.id === editingPlot.id ? editingPlot : plot
          );

          return { ...block, plots: updatedPlots };
        });

        return { ...phase, blocks: updatedBlocks };
      });

      setHierarchicalData(updatedHierarchy);
      setFilteredPlots((prev) =>
        prev.map((plot) => (plot.id === editingPlot.id ? editingPlot : plot))
      );
      setIsEditModalVisible(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (plotId) => {
    if (!editingPlot) return;

    try {
      const plotDocRef = doc(
        db,
        "phases",
        selectedPhase, // e.g., "phase_0"
        "blocks",
        selectedBlock, // e.g., "block_1"
        "plots",
        editingPlot.id.split("-")[2] // "ph0_blk1_plot_1"
      );

      await deleteDoc(plotDocRef);

      const updatedHierarchy = hierarchicalData.map((phase) => {
        if (phase.phase !== selectedPhase) return phase;

        const updatedBlocks = phase.blocks.map((block) => {
          if (block.block !== selectedBlock) return block;

          const updatedPlots = block.plots.filter((plot) => plot.id !== plotId);

          return { ...block, plots: updatedPlots };
        });

        return { ...phase, blocks: updatedBlocks };
      });

      setHierarchicalData(updatedHierarchy);
      setFilteredPlots((prev) => prev.filter((plot) => plot.id !== plotId));
    } catch (error) {
      console.error("Failed to delete plot:", error);
    }
  };

  useEffect(() => {
    const data = processDataIntoHierarchy(mockData);
    setHierarchicalData(data);
    if (data.length > 0) {
      setSelectedPhase(data[0].phase);
      const phaseBlocks = data[0].blocks;
      const defaultBlock =
        phaseBlocks.find((b) => b.block === "block_1") || phaseBlocks[0];
      setSelectedBlock(defaultBlock ? defaultBlock.block : null);
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

  const filteredPlotsBySearch = filteredPlots.filter((plot) =>
    plotMatchesSearch(plot, searchQuery)
  );

  const startIndex = (currentPage - 1) * plotsPerPage;
  const currentPlots = filteredPlotsBySearch.slice(
    startIndex,
    startIndex + plotsPerPage
  );

  const toggleOwnerExpansion = (id) => {
    setExpandedOwnerId((prev) => (prev === id ? null : id));
  };

  if (hierarchicalData.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No data available</Text>
      </View>
    );
  }

  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={styles.navigatorContainer}>
          <RenderPhasePicker
            hierarchicalData={hierarchicalData}
            selectedPhase={selectedPhase}
            setSelectedPhase={(value) => {
              setSelectedPhase(value);
              const phaseData = hierarchicalData.find((p) => p.phase === value);
              const defaultBlock =
                phaseData?.blocks.find((b) => b.block === "block_1") ||
                phaseData?.blocks[0];
              setSelectedBlock(defaultBlock ? defaultBlock.block : null);
            }}
            blocks={blocks}
          />
          <RenderBlockPicker
            selectedBlock={selectedBlock}
            setSelectedBlock={(value) => {
              setSelectedBlock(value);
              setCurrentPage(1);
              setExpandedOwnerId(null);
            }}
            blocks={blocks}
          />
          <RenderPagination
            currentPage={currentPage}
            totalItems={filteredPlots.length}
            itemsPerPage={plotsPerPage}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchQuery}
            onChangeText={(text) => {
              setSearchQuery(text);
              setCurrentPage(1);
            }}
          />
        </View>

        <FlatList
          data={currentPlots}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PlotItem
              item={item}
              isOwnerExpanded={item.id === expandedOwnerId}
              toggleOwnerExpansion={toggleOwnerExpansion}
              showDetails={true}
              handleAdd={(id) => console.log(`Add plot ${id}`)}
              handleEdit={handleEdit}
              handleDelete={(id) => console.log(`Delete plot ${id}`)}
            />
          )}
          contentContainerStyle={styles.listContainer}
        />
      </View>
      {isEditModalVisible && editingPlot && (
        <Modal
          visible={isEditModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setIsEditModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.modalTitle}>Edit Plot Information</Text>

                <Text style={styles.sectionHeader}>Plot Info</Text>
                <Text style={styles.sectionHeader}>Status</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={editingPlot?.status || ""}
                    onValueChange={(value) =>
                      setEditingPlot({ ...editingPlot, status: value })
                    }
                  >
                    {plotStatusOptions.map((opt) => (
                      <Picker.Item label={opt} value={opt} key={opt} />
                    ))}
                  </Picker>
                </View>

                <Text style={styles.sectionHeader}>Maintenance Status</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={editingPlot?.maintenance_status || ""}
                    onValueChange={(value) =>
                      setEditingPlot({
                        ...editingPlot,
                        maintenance_status: value,
                      })
                    }
                  >
                    {maintenanceStatusOptions.map((opt) => (
                      <Picker.Item label={opt} value={opt} key={opt} />
                    ))}
                  </Picker>
                </View>

                <Text style={styles.sectionHeader}>Owner Info</Text>
                {Object.keys(editingPlot?.owner || {}).map((key) => {
                  if (key === "sex") {
                    return (
                      <Picker
                        selectedValue={editingPlot.owner.sex || ""}
                        onValueChange={(value) =>
                          setEditingPlot({
                            ...editingPlot,
                            owner: { ...editingPlot.owner, sex: value },
                          })
                        }
                        style={styles.picker}
                      >
                        {genderOptions.map((opt) => (
                          <Picker.Item label={opt} value={opt} key={opt} />
                        ))}
                      </Picker>
                    );
                  }

                  return (
                    <TextInput
                      key={key}
                      style={styles.modalInput}
                      placeholder={key.replace(/_/g, " ").toUpperCase()}
                      value={editingPlot?.owner?.[key]?.toString() || ""}
                      onChangeText={(text) =>
                        setEditingPlot({
                          ...editingPlot,
                          owner: { ...editingPlot.owner, [key]: text },
                        })
                      }
                    />
                  );
                })}

                <Text style={styles.sectionHeader}>Deceased Info</Text>
                {Object.keys(editingPlot?.deceased || {}).map((key) => {
                  if (key === "sex") {
                    return (
                      <Picker
                        key={key}
                        selectedValue={editingPlot.deceased.sex || ""}
                        onValueChange={(value) =>
                          setEditingPlot({
                            ...editingPlot,
                            deceased: { ...editingPlot.deceased, sex: value },
                          })
                        }
                        style={styles.picker}
                      >
                        <Picker.Item label="Select Gender" value="" />
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                      </Picker>
                    );
                  }

                  return (
                    <TextInput
                      key={key}
                      style={styles.modalInput}
                      placeholder={key.replace(/_/g, " ").toUpperCase()}
                      value={editingPlot.deceased[key]?.toString() || ""}
                      onChangeText={(text) =>
                        setEditingPlot({
                          ...editingPlot,
                          deceased: { ...editingPlot.deceased, [key]: text },
                        })
                      }
                    />
                  );
                })}

                <View style={styles.modalButtons}>
                  <Text style={styles.saveButton} onPress={handleSaveEdit}>
                    Save
                  </Text>
                  <Text
                    style={styles.cancelButton}
                    onPress={() => setIsEditModalVisible(false)}
                  >
                    Cancel
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

export default RecordPage;

const styles = StyleSheet.create({
  navigatorContainer: {
    zIndex: 1,
    backgroundColor: "dodgerblue",
    position: "sticky",
    top: 0,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    flexWrap: "wrap",
  },
  searchInput: {
    backgroundColor: "white",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginRight: 10,
    width: 200,
  },
  listContainer: {
    padding: 10,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    maxHeight: "90%",
    padding: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 5,
    color: "dodgerblue",
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    marginBottom: 8,
    fontSize: 14,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  saveButton: {
    color: "white",
    backgroundColor: "dodgerblue",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    textAlign: "center",
    marginRight: 5,
  },
  cancelButton: {
    color: "white",
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    textAlign: "center",
    marginLeft: 5,
  },
  pickerContainer: {
    padding: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    overflow: "hidden",
    backgroundColor: "#f9f9f9",
  },
  picker: {
    height: 40,
    width: 150,
    backgroundColor: "white",
    marginBottom: 10,
  },
});

const plotStatusOptions = ["available", "reserved", "occupied"];

const maintenanceStatusOptions = ["good", "needs_care", "under_maintenance"];

const genderOptions = ["male", "female"];
