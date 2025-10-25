import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import SearchList from "./search-list";
import MySearchBar from "./search-bar";

export default function MySearchFeature() {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container} pointerEvents="box-none">
      {search.length > 0 && (
        <View style={styles.dropdown}>
          <SearchList searchQuery={search} />
        </View>
      )}

      <MySearchBarWrapper value={search} onChange={setSearch} />
    </View>
  );
}

function MySearchBarWrapper({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return <MySearchBar value={value} onChangeText={onChange} />;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  dropdown: {
    position: "absolute",
    bottom: 55, 
    width: "100%",
    maxHeight: 250,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    elevation: 8, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.25,
    shadowRadius: 6,
    overflow: "hidden",
    zIndex: 10,
  },
});
