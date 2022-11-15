import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";

import colors from "../constants/colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategorymealsScreen from "../screens/CategorymealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import FilterScreen from "../screens/FilterScreen";

//import { createBottomTabNavigator } from "react-navigation-tabs";

const defaultStacknavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.primaryColor : "white",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : colors.primaryColor,
};

/* main navigator stack start  */
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    Categorymeals: {
      screen: CategorymealsScreen,
    },
    MealDetail: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStacknavOptions,
  }
);

/* main navigator stack end  */

/* fav meals  stack start   */

const FavNavigator = createStackNavigator(
  {
    Favourites: FavouriteScreen,
    MealDetail: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStacknavOptions,
  }
);

/* fav meals  stack start   */

/* bottom tabs  navigator stack start  */

const tabConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: "Meals",
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
    },
  },
  Favourite: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
    },
  },
};

const tabOptions = {
  tabBarOptions: {
    activeTintColor: colors.accentColor,
  },
};

const MealsFavTabs =
  Platform.OS == "android"
    ? createMaterialBottomTabNavigator(tabConfig, tabOptions)
    : createBottomTabNavigator(tabConfig, tabOptions);

/* bottom tabs  navigator stack end  */

/* Filter navigator start  */

const FilterNav = createStackNavigator(
  {
    Filter: FilterScreen,
  },
  {
    defaultNavigationOptions: defaultStacknavOptions,
  }
);

/* Filter navigator end  */

/* side drawer navigator start  */

const MainNav = createDrawerNavigator({
  MealsFav: {screen:MealsFavTabs,
navigationOptions:{
    drawerLabel:'Meals'
}},
  Filters: FilterNav,
}
,{
    contentOptions:{
      activeTintColor:colors.accentColor,
      labelStyle:{
        fontFamily:'open-sans'
      }  
    }
}

);

/* side drawer navigator end  */

export default createAppContainer(MainNav);
