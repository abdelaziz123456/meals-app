import React from 'react'
import { View ,Text} from 'react-native'
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../Components/CustomHeaderButton';

export default function FilterScreen() {
  return (
    <View>
    <Text>this is FilterScreen </Text>
  </View>
  )
}



// FilterScreen.navigationOptions=(navData) =>{
//   return {
//     headerTitle:'Filter Meals',
//     headerLeft:()=><HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
//       <Item iconName='ios-menu' title='menu' onpress={()=>{
//         navData.navigation.toggleDrawer()
//       }}/>
  
//     </HeaderButtons>


//   }

// }

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
   
  };
};