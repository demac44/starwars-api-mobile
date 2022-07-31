import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Planet from '../Components/Planets/Planet'
import axios from 'axios'
import SearchBar from '../Components/SearchBar/SearchBar'
import Loader from '../Components/Loaders/Loader'

const PlanetsScreen = ({ route, navigation }) => {

    const [planets, setPlanets] = useState([])
    const [loading, setLoading] = useState(true)

    const { climate } = route.params

    useEffect(() => {
        setLoading(true)
        fetchData(climate)
        .then(res => setPlanets(res.planets)).then(() => setLoading(false))
        .catch(err => console.log(err))
    }, [climate])

    return (
        <>
        <View style={styles.container}>
            {loading 
            ? <Loader/>
            : 
            <>
              <ScrollView>
                  <SearchBar navigation={navigation}/>
                  <View>
                    <Text style={{
                      borderColor: "black", 
                      borderWidth:1, 
                      textAlign: "center",
                      padding: 10,
                      marginTop:10,
                      fontSize:20,
                      backgroundColor: "#1b1b1b",
                      color: "white"
                      }}>Climate: { climate }</Text>
                  </View>
                  {planets.map(planet => <Planet planet={planet} key={planet.planet.name}/>)}

              </ScrollView>
          </>}
        </View>
      </>
    )
}

export default PlanetsScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:5
    },
    loadMore:{
      borderWidth:1,
      borderColor: "black",
      padding: 10,
      alignItems: "center",
      marginTop:20
    }
})

const fetchData = async (climate) => {
    return await axios({
        method: "POST",
        url: "http://localhost:5000/api/planets",
        data: {
            climate: climate
        },
        withCredentials: true
    }).then(res => {
        return {
            planets: res.data
        }
    })
    .catch(err => console.log(err))
}

