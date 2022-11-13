import React from 'react'
import { FlatList,View } from 'react-native';
import MealUnit from './MealUnit';

export default function MealsList(props) {
  return (
    <View>
    <FlatList
      style={{ width: "100%" }}
      data={props.displayedMeals}
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
  )
}
