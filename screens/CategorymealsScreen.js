import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
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
      <View>
        <FlatList
          style={{ width: "100%" }}
          data={displayedMeals}
          renderItem={(itemData) => {
            return (
              <MealUnit
                title={itemData.item.title}
               
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
               image={itemData.item.imageUrl}
                onSelectMeal={() => {
                  props.navigation.navigate({routeName:'MealDetail',
                params:{
                  mealId:itemData.item.id
                }})
                }}
              />
            );
          }}
        />
      </View>
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
