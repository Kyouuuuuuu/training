import { View, Text , StyleSheet,Image, TouchableOpacity, ScrollView, placeholder } from 'react-native'
import React from 'react'

import { useState } from 'react'
import Nav from '../component/Nav'

import Search from './search'
import icon from '../img/bro.png'
import dumbel from '../img/dumbell.png'
import gelombang from '../img/gelombang.png'
import left from '../img/left.png'

export default function WorkoutScreen ({navigation}){
    const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);

  };
  const WorkoutScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchBarColor, setSearchBarColor] = useState('#F0F0F5');
  
    // const handleSearch = (query) => {
    //   setSearchQuery(query);
    // };
};
  
    const exercises = [
        { name: 'Arm exercise in home'},
        { name: 'Push Up' },
        { name: 'Pull Up' },
        {name: 'Leg day'},
        {name:'Shoulder Day'}
        // Add more exercises as needed
    ];

    // Filter your data based on the search query
    const filteredExercises = exercises.filter((exercise) => exercise.name.toLowerCase().includes(searchQuery.toLowerCase()));


    // Fungsi untuk mengubah warna search bar saat digunakan
    const changeSearchBarColor = () => {
        setSearchBarColor('black'); // Ubah warna search bar saat digunakan
    };
    return(
        <View style={Style.container}>
            <View style={{height: 80}}>
                <Search placeholder="Search" onSearch={handleSearch} />
                <Image source={left} style={Style.left}/>
            </View>
           
            <ScrollView  showsVerticalScrollIndicator={false}>
            {filteredExercises.map((exercise, index) => (
                    <View key={index} style={{ width: 320, height: 150, backgroundColor: '#5386F3', borderWidth: 3, borderColor: '#5386F3', borderRadius: 10, marginLeft: 20, marginTop: 10, marginRight: 20, padding: 8 }}>
                        <Image source={icon} style={Style.icon} />
                        <Text style={Style.Exercise1}>
                            {exercise.name}
                        </Text>
                        {/* Assuming 'difficulty' is available in the exercise object */}
                        {exercise.difficulty && <Text>{exercise.difficulty}</Text>}
                        <Image source={dumbel} style={Style.dumbel} />
                        <Text style={Style.exercise}>7 Exercise</Text>
                        <TouchableOpacity onPress={() =>{ navigation.navigate('ListWorkout')}}>
                            <View style={{ width: 60, height: 30, borderWidth: 1.75, borderRadius: 5, borderColor: 'white', alignItems: 'center', justifyContent: 'center', marginTop: 13, backgroundColor: 'white' }}>
                                <Text style={Style.Tombol}>View</Text>
                            </View>
                        </TouchableOpacity>
                        <Image source={gelombang} style={Style.gelombang} />
                    </View>
                ))}

            </ScrollView>
        </View>
       
    )
}
// Komponen Search dengan prop untuk warna
const Searchbar = ({ placeholder, onFocus, color }) => {
    return (
        <View style={{ backgroundColor: color, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, marginHorizontal: 20, marginTop: 20 }}>
            <TextInput
                style={{ flex: 1, fontSize: 16 }}
                placeholder={placeholder}
                onFocus={onFocus} // Panggil fungsi saat search bar digunakan
            />
        </View>
    );
};
const Style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F0F0F5',
        marginTop: 20
    
    }, 
    icon:{
        width:120,
        height: 120,
        left: 180,
        top: 10,
    },

    Exercise1:{
        fontSize:14,
        fontWeight: "bold",
        top: -115,
        left: 5,
        color: 'white',
        fontSize: 18,
    },
    dumbel:{
        width: 15,
        height: 15,
        top: -100,
        left: 5,
    },
    exercise:{
        marginTop: -118,
        marginLeft: 25,
        color: 'white'
    },
    Tombol:{
        color: '#121212',
        fontWeight: "500",
        fontSize: 15
    },
    gelombang:{
        width: 318,
        height: 50,
        top: 100,
        left: -3,
        zIndex: -1,
        position: 'absolute',

    },
    left:{
        width:20,
        height:20,
        position: 'absolute',
        top: 42,
        left: 10,
    }
})