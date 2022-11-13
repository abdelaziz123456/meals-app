import React from 'react'
import { View,Text } from 'react-native'
import MealsList from '../Components/MealsList';
import { MEALS } from '../data/dummy-data';
export default function FavouriteScreen(props) {
  const favMeals=MEALS.filter(meal=> meal.id=='m1' || meal.id=='m2' )
  return (
<MealsList displayedMeals={favMeals} navigation={props.navigation}/>
  )
}

FavouriteScreen.navigationOptions={
  headerTitle:'Your Favourite '
}
