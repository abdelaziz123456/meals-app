import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVOURITE } from "../actions/meals";

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

    default:
      return state;
  }
};

export default mealsReducers;
