import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Characters from '../Components/Characters/Characters'

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
            : <Characters 
                characters={characters} navigation={navigation}
                sortResults={sortResults}
                filterResults={filterResults}
                />  
                }          
        </View>
      </>
    )
}

export default CharactersScreen


const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:5
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
