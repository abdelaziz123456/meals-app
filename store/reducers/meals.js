import { MEALS } from "../../data/dummy-data";
import { SET_FILTERS, TOGGLE_FAVOURITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: [],
};
const mealsReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      let existingIndex = state.favouriteMeals.findIndex(
        (meal) => meal.id == action.mealId
      );
      if (existingIndex >= 0) {
        const updatedMeals = state.favouriteMeals.filter(
          (meal) => meal.id !== action.mealId
        );

        return { ...state, favouriteMeals: updatedMeals };
      } else {
        const addedMeal = state.meals.find((meal) => meal.id === action.mealId);
        return {
          ...state,
          favouriteMeals: [...state.favouriteMeals, addedMeal],
        };
      }
      case SET_FILTERS:
        const appliedFilter=action.filters;
        const updatedMeals=state.meals.filter(meal=>{
            if(appliedFilter.glutenFree && !meal.isGlutenFree ){
                return false
            }
            if(appliedFilter.lactosFree && !meal.isLactusFree ){
                return false
            }
            if(appliedFilter.vegetarian && !meal.isVegetarian ){
                return false
            }
            if(appliedFilter.vegan && !meal.isVegan ){
                return false
            }
            return true
        })

        return {...state,filteredMeals:updatedMeals}
    default:
      return state;
  }
};

export default mealsReducers;
