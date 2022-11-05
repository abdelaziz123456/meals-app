import React from 'react'
import { View,Text, Button } from 'react-native'

export default function CategorymealsScreen(props) {
  return (
    <View>
    <Text>this is CategorymealsScreen </Text>
    <Button title='go to meals details' onPress={()=>props.navigation.navigate({routeName:'MealDetail'})}/>
    <Button title='go back' onPress={()=>props.navigation.pop()}/>
  </View>
  )
}
