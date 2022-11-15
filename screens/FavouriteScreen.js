import React from 'react'
import { View,Text } from 'react-native'
import MealsList from '../Components/MealsList';
import { MEALS } from '../data/dummy-data';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../Components/CustomHeaderButton';
export default function FavouriteScreen(props) {
  const favMeals=MEALS.filter(meal=> meal.id=='m1' || meal.id=='m2' )
  return (
<MealsList displayedMeals={favMeals} navigation={props.navigation}/>
  )
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