import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import SearchBar from '../Components/SearchBar/SearchBar'


const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
          <SearchBar navigation={navigation}/>
        </View>
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
    textInput: {
      height: 40,
      width: "100%",
      borderColor: "gray",
      borderWidth: 1,
      marginTop: 10,
      padding: 5
    }
  });
  