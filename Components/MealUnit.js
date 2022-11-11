import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground
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
            <ImageBackground  source={{uri:props.image}} style={styles.bgImage}>
            <Text style={styles.title}>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow,...styles.mealDetail}}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
            
        
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
    //width:'100%',
    backgroundColor:'#D6D6D6',
     borderRadius:15,
     margin:10,
    // overflow:'hidden'
  },
  mealHeader:{
height:'90%'
  },
  mealDetail:{
paddingHorizontal:10,
justifyContent:'space-between',
alignItems:'center',

  },
  bgImage:{
    width:'100%',
    height:'100%',
    justifyContent:'flex-end'
  },
  title:{
    fontFamily:'open-sans-bold',
    fontSize:22,
    color:'white',
    backgroundColor:'rgba(0,0,0,.7)',
    paddingVertical:5,
    textAlign:'center'
  }
});
