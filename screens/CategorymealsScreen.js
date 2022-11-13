import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import MealsList from "../Components/MealsList";
import MealUnit from "../Components/MealUnit";

import { CATEGORIES, MEALS } from "../data/dummy-data";

export default function CategorymealsScreen(props) {
  let catId = props.navigation.getParam("categoryId");
  let selectedCategory = CATEGORIES.find((cat) => cat.id == catId);
  // let selectedMeals=MEALS.find(meal=>meal.categoryIds==catId);
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  return (
    <SafeAreaView>
      <StatusBar />
     <MealsList displayedMeals={displayedMeals} navigation={props.navigation}/>
    </SafeAreaView>
  );
}

CategorymealsScreen.navigationOptions = (navigationData) => {
  let catId = navigationData.navigation.getParam("categoryId");
  let selectedCategory = CATEGORIES.find((cat) => cat.id == catId);
  return {
    headerTitle: selectedCategory.title,
  };
};
