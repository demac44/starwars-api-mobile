import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Character = ({ character }) => {
  return (
    <View style={styles.card}>
        <Text style={styles.title}>{ character.name }</Text>
        <Text style={styles.text}>Birth year: {character.birth_year}</Text>
        <Text style={styles.text}>Gender: {character.gender}</Text>
        <Text style={styles.text}>Eye color: {character.eye_color}</Text>
        <Text style={styles.text}>Hair color: {character.hair_color}</Text>
        <Text style={styles.text}>Skin color: {character.skin_color}</Text>
        <Text style={styles.text}>Height: {character.height}cm</Text>
        <Text style={styles.text}>Mass: {character.mass}kg</Text>
    </View>
  )
}

export default Character

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