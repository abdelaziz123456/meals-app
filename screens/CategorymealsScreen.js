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

import { CATEGORIES } from "../data/dummy-data";
import { useSelector } from "react-redux";
import FeedbackContainer from "../Components/FeedbackContainer";
export default function CategorymealsScreen(props) {
  const selectedMeals = useSelector((state) => state.meals.filteredMeals);
  let catId = props.navigation.getParam("categoryId");

  const displayedMeals = selectedMeals.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  return (
    <SafeAreaView>
      <StatusBar />
      {
        displayedMeals.length==0 || !displayedMeals ?
        <FeedbackContainer lines={['No Meals Found','Check Your Filters ']}/> 
        
        :
        <MealsList
        displayedMeals={displayedMeals}
        navigation={props.navigation}
      />}
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
