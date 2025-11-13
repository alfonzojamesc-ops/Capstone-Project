import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const PlotItem = ({
  item,
  isOwnerExpanded,
  toggleOwnerExpansion,
  showDetails,
  handleAdd,
  handleEdit,
  handleDelete,
}) => {
  const isAvailable = item.status === "available";

  return (
    <View style={styles.plotContainer}>
      <View style={styles.itemRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.plotHeader}>Plot ID: {item.plot}</Text>
          <Text>
            <Text style={styles.boldText}>Grid Coordinates: </Text>
            {item.grid_coordinates.join(", ")}
          </Text>
          {item.status && (
            <Text>
              <Text style={styles.boldText}>Status: </Text>
              {item.status}
            </Text>
          )}
          {item.maintenance_status && (
            <Text>
              <Text style={styles.boldText}>Maintenance: </Text>
              {item.maintenance_status}
            </Text>
          )}

          {item.deceased && showDetails && (
            <>
              {item.deceased.image ? (
                <Image
                  source={{ uri: item.deceased.image }}
                  style={styles.deceasedImage}
                />
              ) : null}

              <View style={styles.deceasedDetails}>
                {item.deceased.first_name ||
                item.deceased.middle_name ||
                item.deceased.last_name ? (
                  <Text>
                    <Text style={styles.boldText}>Name: </Text>
                    {[
                      item.deceased.first_name,
                      item.deceased.middle_name,
                      item.deceased.last_name,
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  </Text>
                ) : null}

                {item.deceased.date_of_birth ? (
                  <Text>
                    <Text style={styles.boldText}>Date of Birth: </Text>
                    {item.deceased.date_of_birth}
                  </Text>
                ) : null}

                {item.deceased.date_of_death && (
                  <Text>
                    <Text style={styles.boldText}>Date of Death: </Text>
                    {item.deceased.date_of_death}
                  </Text>
                )}

                {item.deceased.burial_type && (
                  <Text>
                    <Text style={styles.boldText}>Burial Type: </Text>
                    {item.deceased.burial_type}
                  </Text>
                )}

                {item.deceased.funeral_home && (
                  <Text>
                    <Text style={styles.boldText}>Funeral Home: </Text>
                    {item.deceased.funeral_home}
                  </Text>
                )}

                {item.deceased.notes && (
                  <Text>
                    <Text style={styles.boldText}>Notes: </Text>
                    {item.deceased.notes}
                  </Text>
                )}
              </View>
            </>
          )}

          {item.owner && showDetails && (
            <View style={{ marginTop: 10 }}>
              {!isAvailable && (
                <TouchableOpacity
                  onPress={() => toggleOwnerExpansion(item.id)}
                  style={styles.collapsibleHeader}
                >
                  <Text style={styles.collapsibleHeaderText}>
                    {isOwnerExpanded ? "Hide Plot Owner" : "Show Plot Owner"}
                  </Text>
                </TouchableOpacity>
              )}
              {isOwnerExpanded && (
                <View style={styles.ownerDetails}>
                  {Object.entries(item.owner).map(([key, value]) =>
                    value ? (
                      <Text key={key} style={styles.ownerDetails}>
                        <Text style={styles.boldText}>
                          {key
                            .replace(/_/g, " ")
                            .replace(/\b\w/g, (c) => c.toUpperCase())}
                          :{" "}
                        </Text>
                        {value.toString()}
                      </Text>
                    ) : null
                  )}
                </View>
              )}
            </View>
          )}
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => handleEdit(item.id)}
          >
            <Text style={styles.buttonText}>
              {isAvailable ? "Add" : "Edit"}
            </Text>
          </TouchableOpacity>
          {!isAvailable && (
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDelete(item.id)}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          )}
        </View>
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
    zIndex: 1,
    backgroundColor: "dodgerblue",
    position: "sticky",
    top: 0,
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
    position: "sticky",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  pageButton: {
    padding: 10,
    backgroundColor: "#004080",
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
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "column",
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: "#28a745",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginBottom: 5,
  },
  editButton: {
    backgroundColor: "#007bff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginBottom: 5,
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
