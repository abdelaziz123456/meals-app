import React from 'react'
import { View ,Text, Button} from 'react-native'

export default function MealDetailsScreen(props) {
  return (
  <View>
    <Text>this is MealDetailsScreen </Text>
    <Button  title='back to categories ' onPress={()=>props.navigation.popToTop()}/>
  </View>
  )
}


