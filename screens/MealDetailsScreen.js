import React, { useCallback, useEffect } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../Components/CustomHeaderButton";
import DefaultText from "../Components/DefaultText";
import { toggleFavourite } from "../store/actions/meals";

export default function MealDetailsScreen(props) {
  const selectedMeals = useSelector((state) => state.meals.meals);
  const mealId = props.navigation.getParam("mealId");
  const isMealFav = useSelector((state) =>
    state.meals.favouriteMeals.some((meal) => meal.id === mealId)
  );

  let selectedMeal = selectedMeals.find((meal) => meal.id == mealId);
  const dispatch = useDispatch();
  const toggleFavHandler = useCallback(() => {
    dispatch(toggleFavourite(mealId));
  }, [dispatch, mealId]);
  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavHandler });
  }, [toggleFavHandler]);

  useEffect(() => {
    props.navigation.setParams({ isMealFav: isMealFav });
  }, [isMealFav]);
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ing) => (
        <Text style={styles.item} key={ing}>
          {ing}
        </Text>
      ))}
      <Text style={styles.title}>steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text style={styles.item} key={step}>
          {step}
        </Text>
      ))}
    </ScrollView>
  );
}

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFav = navigationData.navigation.getParam("toggleFav");
  const isMealFav=navigationData.navigation.getParam("isMealFav");
  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Favourite" iconName={isMealFav ?"ios-star":"ios-star-outline" } onPress={toggleFav} />
        {/* <Item
          title="Favourite"
          iconName="ios-star-outline"
          onPress={() => {
            console.log("removed from favourite");
          }}
        /> */}
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    poadding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  item: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
