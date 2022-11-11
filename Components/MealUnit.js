import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

export default function MealUnit(props) {
  let MainComponent = TouchableOpacity;
  if (Platform.OS == "android") {
    MainComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.mealItem}>
      <MainComponent onPress={props.onSelectMeal}>
        <View>
          <View style={{...styles.mealRow,...styles.mealHeader}}>
            <Text>{props.title}</Text>
          </View>
          <View style={{...styles.mealRow,...styles.mealDetail}}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity}</Text>
            <Text>{props.affordability}</Text>
            
        
          </View>
        </View>
      </MainComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row",
  },
  mealItem: {
    height:200,
    width:'100%',
    backgroundColor:'#ccc'
  },
  mealHeader:{
height:'90%'
  },
  mealDetail:{
paddingHorizontal:10,
justifyContent:'space-between'
  }
});
