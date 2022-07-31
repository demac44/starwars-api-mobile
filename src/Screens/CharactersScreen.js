import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native'
import SearchBar from "../Components/SearchBar/SearchBar"
import Character from "../Components/Characters/Character"
import FiltersBar from "../Components/Characters/FiltersBar"


let movieTitle = ""
let originalArray = []

const CharactersScreen = ({ route, navigation }) => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [limit, setLimit] = useState(30)
    const [showLoadMore, setShowLoadMore] = useState(false)
    const [fetching, setFetching] = useState(false)
    
    const { query } = route.params

    useEffect(() => {
        setLoading(true)
        if(query){
        fetchData(query, limit, 0)
        .then(res => {
            originalArray = [...res.characters]
            setCharacters(res.characters)
            movieTitle = res.title
            setShowLoadMore(res.showLoadMore)
        })
        .then(() => setLoading(false))
        .catch(err => console.log(err))
        }
    }, [query])


    const sortResults = (value, order) => {
      // godina rođenja dolazi u formatu stringa npr.19BBY ili 19ABY
      // BBY - before battle of yavin
      // ABY - after battel of yavin
      
      if(value === "age"){
    
        // odvajanje BBY i ABY
        let BBY = characters.filter(character => {
          return character.birth_year.slice(-3) === "BBY"
        })
    
        let ABY = characters.filter(character => {
          return character.birth_year.slice(-3) === "ABY"
        })
    
        BBY = BBY.sort((a, b) => {
          // odvajanje godine rođenja i parsiranje stringa u broj
          a = parseInt(a.birth_year.slice(0, a.birth_year.indexOf("BBY")))
          b = parseInt(b.birth_year.slice(0, b.birth_year.indexOf("BBY")))
          if ( a < b ){
            return order === "asc" ? -1 : 1;
          }
          if ( a > b ){
            return order === "asc" ? 1 : -1;
          }
          return 0;
        })
    
        ABY = ABY.sort((a, b) => {
          a = parseInt(a.birth_year.slice(0, a.birth_year.indexOf("ABY")))
          b = parseInt(b.birth_year.slice(0, b.birth_year.indexOf("ABY")))
          if ( a < b ){
            return order === "asc" ? -1 : 1;
          }
          if ( a > b ){
            return order === "asc" ? 1 : -1;
          }
          return 0;
        })
    
        if(order === "asc") setCharacters(ABY.concat(BBY))
        else setCharacters(BBY.concat(ABY))
    
      } else if(value === "height"){
          setCharacters([...characters.sort((a, b) => {
            if ( parseInt(a.height) < parseInt(b.height) ){
              return order === "asc" ? -1 : 1;
            }
            if ( parseInt(a.height) > parseInt(b.height) ){
              return order === "asc" ? 1 : -1;
            }
            return 0;
        })])
      }
      }
  
  
  const filterResults = (gender) => {
      if(gender === "all"){
        setCharacters(originalArray)
      } else {
        setCharacters(originalArray.filter(character => {
          return character.gender === gender
        }))
      }
    }

    return (
      <>
        <View style={styles.container}>
            {loading 
            ? <Text>Loading</Text> 
            : 
            <>
              <ScrollView>
                  <SearchBar navigation={navigation}/>
                  <FiltersBar sortResults={sortResults} filterResults={filterResults}/>
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
                      }}>Movie: { movieTitle }</Text>
                  </View>
                  {characters.map(character => <Character character={character} key={character.name}/>)}

                  {fetching && 
                    <View style={{textAlign:"center", padding:15, alignItems: "center"}}>
                      <Text style={{fontSize:20}}>Loading...</Text>
                    </View>
                    }
                  
                  {(showLoadMore && !fetching) &&
                    <>
                      <TouchableOpacity style={styles.loadMore} onPress={() => {
                        setFetching(true)
                        fetchData(query, limit+30, limit)
                        .then(res => {
                          setCharacters([...characters, ...res.characters])
                          setShowLoadMore(res.showLoadMore)
                        })
                        .then(() => setFetching(false))
                      }}>
                        <View>
                          <Text style={{fontSize:18}}>Load more</Text>
                        </View>
                      </TouchableOpacity>
                    </>}

              </ScrollView>
          </>}
        </View>
      </>
    )
}

export default CharactersScreen


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



const fetchData = async (query, limit, offset) => {
    return await axios({
      method: "POST",
      url: "http://192.168.1.78:5000/api/people",
    data: {
      query: query,
      limit: limit,
      offset: offset
    },
    withCredentials: true
  }).then(res => {
      return {
        characters: res.data.characters,
        title: res.data.title,
        showLoadMore: res.data.showLoadMore
      }
    })
    .catch(err => console.log(err))
  }
