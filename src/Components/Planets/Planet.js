import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Planet = ({ planet }) => {
  return (
    <View style={styles.card}>
        <Text style={styles.title}>{ planet.planet.name }</Text>

        {planet.darkHairedResidents.length > 0 ? 
          <>
            <Text>Dark hair residents:</Text>
            {planet.darkHairedResidents.map(resident => <Text>{resident.name}</Text>)}
          </> 
        : <Text style={{textAlign: "center", marginTop: 20}}>No dark hair residents</Text>}
    </View>
  )
}

export default Planet


const styles = StyleSheet.create({
    card:{
        width: "100%",
        padding: 10,
        borderWidth:1,
        borderColor: "black",
        marginTop:10
    },
    title:{
        padding:10,
        borderWidth:1,
        borderColor: "black",
        backgroundColor: "#1f1f1f",
        color: "white"
    },
    text:{
        marginTop:5,
        marginLeft:5
    }
})