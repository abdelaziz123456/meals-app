import React from 'react'
import { TouchableOpacity,Text,View, StyleSheet,Platform ,TouchableNativeFeedback} from 'react-native'
export default function CategoryUnit(props) {
    let MainComponent=TouchableOpacity;
    if(Platform.OS=='android' && Platform.Version >= 21){
        MainComponent=TouchableNativeFeedback
    }
  return (
    <View style={styles.gridItem}>
    <MainComponent onPress={props.onSelect} style={{flex: 1}} >
      <View style={{...styles.container,...{backgroundColor:props.color}}}>
        <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
      </View>
      </MainComponent>
      </View>
  )
}

let styles=StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height:150
      },
      container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        elevation:3,
        padding:15,
        justifyContent:'flex-end',
        alignItems:'flex-end'
      },
      title:{
        fontFamily:'open-sans-bold',
        fontSize:18,
        textAlign:'right'
      }
})
