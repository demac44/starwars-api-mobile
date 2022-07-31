import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PlanetsScreen = ({ route }) => {

    const { query } = route.params

    return (
        <View style={styles.container}>
            <Text>{ query }</Text>
        </View>
    )
}

export default PlanetsScreen

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})