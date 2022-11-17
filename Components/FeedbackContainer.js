import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../constants/colors'

export default function FeedbackContainer(props) {
  return (
    <View style={styles.feedbackContainer}>
        {props.lines.map(line =>
            <Text style={styles.feedbackText}>{line}</Text>)}
    </View>
  )
}


const styles=StyleSheet.create({
    feedbackContainer:{
      alignItems:'center',
      justifyContent:'center',
      height:400
  
    },
    feedbackText:{
     fontFamily:'open-sans-bold',
     fontSize:20,
     color:colors.primaryColor
    }
  })