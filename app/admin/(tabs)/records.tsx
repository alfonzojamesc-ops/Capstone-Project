import { RenderBlockPicker } from "@/components/admin/records/block-picker";
import { RenderPhasePicker } from "@/components/admin/records/phase-picker";
import { PlotItem } from "@/components/admin/records/plot-item";
import { mockData } from "@/constants/mock-data-structure";
import { processDataIntoHierarchy } from "@/scripts/admin/process-data";
import { plotMatchesSearch } from "@/scripts/admin/search-data";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
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
            handleEdit={(id) => console.log(`Edit plot ${id}`)}
            handleDelete={(id) => console.log(`Delete plot ${id}`)}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
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
});
