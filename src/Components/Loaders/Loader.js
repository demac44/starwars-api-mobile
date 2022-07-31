import React from 'react'
import { View, Text } from 'react-native'

const Loader = () => {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text style={{fontSize: 20}}>Loading...</Text>
    </View>
  )
}

export default Loader