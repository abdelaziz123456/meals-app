import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import * as Fonts from "expo-font";
import { enableScreens } from "react-native-screens";
import Mealsnavigator from "./MealsNavigation/Mealsnavigator";
import { createStore, combineReducers } from "redux";
import mealsReducers from "./store/reducers/meals";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  meals: mealsReducers,
});

const store = createStore(rootReducer);
enableScreens();
const fetchFonts = () => {
  return Fonts.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <Provider store={store}>
      <Mealsnavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
