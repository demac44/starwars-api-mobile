import React from 'react'
import { ScrollView } from 'react-native'
import SearchBar from '../SearchBar/SearchBar'
import Character from './Character'
import FiltersBar from './FiltersBar'

const Characters = ({ characters, navigation, sortResults, filterResults }) => {
  return (
        <ScrollView>
            <SearchBar navigation={navigation}/>
            <FiltersBar sortResults={sortResults} filterResults={filterResults}/>
            {characters.map(character => <Character character={character} key={character.name}/>)}
        </ScrollView>
  )
}

export default Characters