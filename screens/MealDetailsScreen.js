import React from "react";
import { View, Text, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons,Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from "../Components/CustomHeaderButton";
export default function MealDetailsScreen(props) {
  const mealId = props.navigation.getParam("mealId");
  let selectedMeal = MEALS.find((meal) => meal.id == mealId);
  return (
    <View>
      <Text>this is MealDetailsScreen </Text>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="back to categories "
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  );
}

MealDetailsScreen.navigationOptions = (navigationData) => {
 const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id == mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight:<HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
<Item title="Favourite" iconName="ios-star" onPress={()=>{
  console.log('added to favourite')
}} />
<Item title="Favourite" iconName="ios-star-outline" onPress={()=>{
  console.log('removed from favourite')
}} />
    </HeaderButtons>
  };
};





