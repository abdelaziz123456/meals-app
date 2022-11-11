import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import CategoryUnit from "../Components/CategoryUnit";
import colors from "../constants/colors";
import { CATEGORIES } from "../data/dummy-data";
export default function CategoriesScreen(props) {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemData) => {
        return (
          <CategoryUnit
          color={itemData.item.color}
            title={itemData.item.title}
            onSelect={() => {
              props.navigation.navigate({
                routeName: "Categorymeals",
                params: {
                  categoryId: itemData.item.id,
                },
              });
            }}
          />
        );
      }}
      numColumns={2}
    />
  );
}

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.primaryColor : "white",
  },
  headerTintColor: Platform.OS === "android" ? "white" : colors.primaryColor,
};

const styles = StyleSheet.create({
  categories: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
