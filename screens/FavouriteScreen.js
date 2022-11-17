import React from "react";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../Components/CustomHeaderButton";
import MealsList from "../Components/MealsList";
import FeedbackContainer from "../Components/FeedbackContainer";
export default function FavouriteScreen(props) {
  const favMeals = useSelector((state) => state.meals.favouriteMeals);
  if (favMeals.length == 0 || !favMeals) {
    return (
      <FeedbackContainer
        lines={["No Favourite Meals Found .", "Start Adding Some !"]}
      />
    );
  }
  return <MealsList displayedMeals={favMeals} navigation={props.navigation} />;
}

FavouriteScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favourite",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};
