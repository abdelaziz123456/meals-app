import React from "react";
import { View, Text, Button } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

export default function CategorymealsScreen(props) {
  let catId=props.navigation.getparam('categoryId');
  let selectedCategory=CATEGORIES.find(cat=>cat.id==catId)
  return (
    <View>
      <Text>this is Category meals Screen </Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="go to meals details"
        onPress={() => props.navigation.navigate({ routeName: "MealDetail" })}
      />
      <Button title="go back" onPress={() => props.navigation.pop()} />
    </View>
  );
}


CategorymealsScreen.navigationOptions=(navigationData)=>{
  let catId= navigationData.navigation.getParam('categoryId');
  let selectedCategory=CATEGORIES.find(cat=>cat.id==catId);
  return {
    headerTitle:selectedCategory.title,
   
  }
}