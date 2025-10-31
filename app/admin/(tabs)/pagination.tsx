import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const RenderPagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  handlePrevPage,
  handleNextPage,
}) => (
  <View style={styles.paginationContainer}>
    <TouchableOpacity
      onPress={handlePrevPage}
      disabled={currentPage === 1}
      style={styles.pageButton}
    >
      <Text style={styles.pageButtonText}>Previous</Text>
    </TouchableOpacity>
    <Text style={styles.pageInfo}>
      Page {currentPage} of {Math.ceil(totalItems / itemsPerPage)}
    </Text>
    <TouchableOpacity
      onPress={handleNextPage}
      disabled={currentPage * itemsPerPage >= totalItems}
      style={styles.pageButton}
    >
      <Text style={styles.pageButtonText}>Next</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  pageButton: {
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  pageButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  pageInfo: {
    fontSize: 16,
    marginHorizontal: 10,
  },
});
