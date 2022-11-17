import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../Components/CustomHeaderButton";
import MealsList from "../Components/MealsList";
import colors from "../constants/colors";
export default function FavouriteScreen(props) {
  const favMeals = useSelector((state) => state.meals.favouriteMeals);
  if (favMeals.length == 0 || !favMeals) {
    return (
      <View style={styles.feedbackContainer}>
        <Text style={styles.feedbackText}> No Favourite Meals Found .</Text>
        <Text style={styles.feedbackText}> Start Adding Some !</Text>
      </View>
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



const styles=StyleSheet.create({
  feedbackContainer:{
    alignItems:'center',
    justifyContent:'center',
    height:400

  },
  feedbackText:{
   fontFamily:'open-sans-bold',
   fontSize:20,
   color:colors.primaryColor
  }
})