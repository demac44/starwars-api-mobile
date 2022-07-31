import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const SearchBar = ({ navigation }) => {
    const [queryCharacters, setQueryCharacaters] = useState("")
    const [queryClimates, setQueryClimates] = useState("")


    const submitCharacters = () => {
        navigation.navigate("Characters", {query: queryCharacters})
    }

    const submitClimates = () => {
        navigation.navigate("Planets", {query: queryClimates})
    }
  return (
    <View style={styles.container}>
        <TextInput
        style={styles.textInput}
        placeholder="Search movies..."
        onSubmitEditing={submitCharacters}
        value={queryCharacters}
        onChangeText={text => setQueryCharacaters(text)}
        />

        <TextInput
        style={styles.textInput}
        placeholder="Search planets climates..."
        onSubmitEditing={submitClimates}
        value={queryClimates}
        onChangeText={text => setQueryClimates(text)}
        />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: "100%",
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
