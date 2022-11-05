import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
export default function CategoriesScreen(props) {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemData) => {
        return (
          <View style={styles.gridItem}>
            <Text>{itemData.item.title}</Text>
          </View>
        );
      }}
    numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  categories: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height:150
  },
});
