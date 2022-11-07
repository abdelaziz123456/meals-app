import React from "react";
import { View, Text, Button, StyleSheet, FlatList,TouchableOpacity, Platform } from "react-native";
import colors from "../constants/colors";
import { CATEGORIES } from "../data/dummy-data";
export default function CategoriesScreen(props) {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemData) => {
        return (
          <TouchableOpacity onPress={()=>{
            props.navigation.navigate({
              routeName:'Categorymeals',
              params:{
                categoryId:itemData.item.id
              }
            })
          }} style={styles.gridItem}>
          <View >
            <Text>{itemData.item.title}</Text>
          </View>
          </TouchableOpacity>
        );
      }}
    numColumns={2}
    />
  );
}


CategoriesScreen.navigationOptions={
  headerTitle:'Meal Categories',
  headerStyle:{
    backgroundColor:Platform.OS === 'android' ? colors.primaryColor : 'white'
  },
  headerTentColor: Platform.OS === 'android' ? 'white' : colors.primaryColor 
}

const styles = StyleSheet.create({
  categories: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height:150
  },
});
