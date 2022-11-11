import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import colors from "../constants/colors";
import CategoriesScreen from  '../screens/CategoriesScreen';
import CategorymealsScreen from "../screens/CategorymealsScreen";
import MealDetailsScreen from '../screens/MealDetailsScreen'
const MealsNavigator=createStackNavigator({
    Categories:{
        screen:CategoriesScreen,
    },
    Categorymeals:{
        screen:CategorymealsScreen,
        
    },
    MealDetail:MealDetailsScreen
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Platform.OS === 'android' ? colors.primaryColor : 'white',
          
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor 
    }
})


export default createAppContainer(MealsNavigator)