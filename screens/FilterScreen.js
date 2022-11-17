import React, { useCallback, useEffect, useState, } from "react";
import {useDispatch} from 'react-redux'
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../Components/CustomHeaderButton";
import colors from "../constants/colors";
import { setFilters } from "../store/actions/meals";
export default function FilterScreen(props) {
  const FilterSwitch = (props) => (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: props.trackColor }}
        thumbColor={Platform.OS == "android" ? props.thumbColor : ""}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );

  const [isGlutenFree, setGlutenFree] = useState(false);
  const [isLactosFree, setLactosFree] = useState(false);
  const [isVegan, setVegan] = useState(false);
  const [isVegetarian, setVegaterian] = useState(false);
const dispatch=useDispatch()
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactosFree: isLactosFree,
      vagan: isVegan,
      vegetarian: isVegetarian,
    };
    dispatch(setFilters(appliedFilters))
  }, [isGlutenFree, isLactosFree, isVegan, isVegetarian,dispatch]);

  useEffect(() => {
    props.navigation.setParams({ save: saveFilters });
  }, [saveFilters]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters /Restrictions</Text>
      <FilterSwitch
        label="Gluten-Free"
        state={isGlutenFree}
        onChange={(newValue) => setGlutenFree(newValue)}
        thumbColor={colors.primaryColor}
        trackColor={colors.primaryColor}
      />
      <FilterSwitch
        label="Lactos-Free"
        state={isLactosFree}
        onChange={(newValue) => setLactosFree(newValue)}
        thumbColor={colors.primaryColor}
        trackColor={colors.primaryColor}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newValue) => setVegan(newValue)}
        thumbColor={colors.primaryColor}
        trackColor={colors.primaryColor}
      />
      <FilterSwitch
        label="Vegatarian"
        state={isVegetarian}
        onChange={(newValue) => setVegaterian(newValue)}
        thumbColor={colors.primaryColor}
        trackColor={colors.primaryColor}
      />
    </View>
  );
}

FilterScreen.navigationOptions = (navData) => {
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
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Save" onPress={navData.navigation.getParam("save")} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },

  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
});
