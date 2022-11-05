import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from  '../screens/CategoriesScreen';
import CategorymealsScreen from "../screens/CategorymealsScreen";
import MealDetailsScreen from '../screens/MealDetailsScreen'
const MealsNavigator=createStackNavigator({
    Categories:CategoriesScreen,
    Categorymeals:CategorymealsScreen,
    MealDetail:MealDetailsScreen
})


export default createAppContainer(MealsNavigator)