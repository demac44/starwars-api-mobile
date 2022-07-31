import React, { useState } from 'react'
import { View, StyleSheet, TouchableO, TouchableOpacity, Text } from 'react-native'

const FiltersBar = ({ sortResults, filterResults }) => {
    const [order, setOrder] = useState("asc")
    const [sortBy, setSortBy] = useState("")
    const [gender, setGender] = useState("all")





    return (
        <View style={styles.bar}>
            <View>
                <TouchableOpacity style={{marginTop:5}} onPress={() => {
                    if(sortBy != "height") {
                        sortResults("height", order)
                        setSortBy("height")
                    }
                }}>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <View style={{...styles.indicator, backgroundColor: sortBy === "height" ? "teal" : "white"}}></View>
                        <Text style={{fontSize: 15}}>Height</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:5}} onPress={() => {
                    if(sortBy != "age") {
                        sortResults("age", order)
                        setSortBy("age")
                    }
                }}>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <View style={{...styles.indicator, backgroundColor: sortBy === "age" ? "teal" : "white"}}></View>
                        <Text style={{fontSize: 15}}>Age</Text>
                    </View>            
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={{marginTop:5}} onPress={() => {
                    if(order != "asc") {
                        sortResults(sortBy, "asc")
                        setOrder("asc")
                    }
                }}>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <View style={{...styles.indicator, backgroundColor: order === "asc" ? "teal" : "white"}}></View>
                        <Text style={{fontSize: 15}}>Ascending</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:5}} onPress={() => {
                    if(order != "desc") {
                        sortResults(sortBy, "desc")
                        setOrder("desc")
                    }
                }}>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <View style={{...styles.indicator, backgroundColor: order=== "desc" ? "teal" : "white"}}></View>
                        <Text style={{fontSize: 15}}>Descending</Text>
                    </View>            
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={{marginTop:5}} onPress={() => {
                    if(gender != "all") {
                        filterResults("all")
                        setGender("all")
                    }
                }}>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <View style={{...styles.indicator, backgroundColor: gender === "all" ? "teal" : "white"}}></View>
                        <Text style={{fontSize: 15}}>All</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:5}} onPress={() => {
                    if(gender != "male") {
                        filterResults("male")
                        setGender("male")
                    }
                }}>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <View style={{...styles.indicator, backgroundColor: gender=== "male" ? "teal" : "white"}}></View>
                        <Text style={{fontSize: 15}}>Male</Text>
                    </View>            
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:5}} onPress={() => {
                    if(gender != "female") {
                        filterResults("female")
                        setGender("female")
                    }
                }}>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <View style={{...styles.indicator, backgroundColor: gender === "female" ? "teal" : "white"}}></View>
                        <Text style={{fontSize: 15}}>Female</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:5}} onPress={() => {
                    if(gender != "hermaphrodite") {
                        filterResults("hermaphrodite")
                        setGender("hermaphrodite")
                    }
                }}>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <View style={{...styles.indicator, backgroundColor: gender=== "hermaphrodite" ? "teal" : "white"}}></View>
                        <Text style={{fontSize: 15}}>Hermaphrodite</Text>
                    </View>            
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FiltersBar


const styles = StyleSheet.create({
    bar:{
        width: "100%",
        padding: 10,
        borderWidth:1,
        borderColor: "black",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    indicator:{
        width: 15,
        height: 15,
        borderRadius:3,
        borderWidth:1,
        borderColor: "black",
        marginRight: 5
    }
})