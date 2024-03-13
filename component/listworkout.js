import { View, Text , StyleSheet,Image, TouchableOpacity, ScrollView, placeholder, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'

import { useState } from 'react'
import dumbel from '../img/dumbell.png'
import bluedumbel from '../img/bluedumbell.png'
import { scale } from './SlideItem'
import foto from '../img/foto.png'
import Nav2 from './nav2'
import foto2 from '../img/situppuh.jpg'
import close from '../img/close.png'
export default function ListWorkout({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.cardjudul}>
                    <Image source={bluedumbel} style= {styles.image}/> 
                    <Text style={styles.judul}>Arm exercise</Text>
                    <Text style={styles.subjudul}>7 Exercise</Text>
                    <TouchableOpacity onPress={() =>{ navigation.navigate('workout')}}><Image source={close} style={styles.close}/></TouchableOpacity>
                   
                </View>
                <View style={styles.keterangan}>
                    <Text style={styles.calories}>Calories</Text>
                    <Text style={styles.time}>Time</Text>
                    <Text style={styles.level}>Level</Text>
                    <Text style={styles.cal}>240 cal</Text>
                    <Text style={styles.min}>30 min</Text>
                    <Text style={styles.beginner}>Beginner</Text>
                </View>
                <View style={styles.cardlist}>
                    <View style={styles.cardlatihan}>
                        <Image source={foto} style={styles.foto}/>
                        <Text style={styles.judullatihan}>Push Up</Text>
                        <Text style={styles.rep}>12x2</Text>
                        <TouchableOpacity onPress={() =>{ navigation.navigate('TutorWorkOut')}}><Text style={styles.preview}>Preview</Text></TouchableOpacity>
                    </View>
                    <View style={styles.cardlatihanpush}>
                        <Image source={foto} style={styles.foto}/>
                        <Text style={styles.judullatihan}>Push Up</Text>
                        <Text style={styles.rep}>12x2</Text>
                        <TouchableOpacity onPress={() =>{ navigation.navigate('TutorWorkOut')}}><Text style={styles.preview}>Preview</Text></TouchableOpacity>
                    </View>
                    <View style={styles.cardlatihanpush}>
                        <Image source={foto} style={styles.foto}/>
                        <Text style={styles.judullatihan}>Push Up</Text>
                        <Text style={styles.rep}>12x2</Text>
                        <TouchableOpacity onPress={() =>{ navigation.navigate('TutorWorkOut')}}><Text style={styles.preview}>Preview</Text></TouchableOpacity>
                    </View>
                </View>
              
            </ScrollView>
            <Nav2></Nav2>
        </SafeAreaView>
    )
}
const styles= StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#F0F0F5',
        marginTop: 20
    },
    cardlist:{
        width: '100%',
        height: 700,
        backgroundColor:'#E5E1DA'
    },
    judul: {
      fontSize: 23,
      fontWeight: '600',
      left: 70,
      top: 10,
    },
    subjudul:{
        fontSize: 15,
        fontWeight: '400',
        color: '#665959',
        left:35,
        top: 20,
    },
    image:{
        width: 25,
        height: 19,
        top: 37,
        left: 36,
    },
    cardjudul:{
        height: 100
    },
    calories:{
        top: 40,
        left: 35,
        fontSize: 15,
        color:'#8C7D7D', 
 
    },
    foto:{
        width: 45,
        height: 45,
        left: 13,
        top: 20,
        borderRadius: 5
    },
    time:{
        left: 155,
        top: 22,
        color: '#8C7D7D',
        fontSize: 15,
    },
    level:{
        left: 270,
        color: '#8C7D7D'
    },
    cal:{
        left: 42,
        fontSize:13,
        fontWeight: '600'
    },
    min:{
        top: -16,
        left: 153,
        fontSize: 13,
        fontWeight:'600'
    },
    beginner:{
        top: -37,
        left: 260,
        fontWeight: '600',
        fontSize: 13,
    },
    keterangan:{
        height: 100

    },
    cardlatihan:{
        borderWidth: 1.5,
        height: 90,
        width: 330,
        left: 15,
        borderRadius: 10,
        backgroundColor:'white',
        marginTop: 20,
        borderColor:'#DCD1D1'

    }, judullatihan:{
        left: 70,
        top: 19,
        fontWeight: '400',
        fontSize: 17,
        color: '#121212',
        position:'absolute'
    },
    rep:{
        left: 68,
        top: 45,
        fontWeight:'500',
        color:'#979696',
        position:'absolute'

    },
    preview:{
        left: 240,
        top:-14,
        fontWeight: '500',
        fontSize: 18,
        color: '#2254C5',
        position:'absolute'
    },
    cardlatihanpush:{
        borderWidth: 1.5,
        height: 90,
        width: 330,
        left: 15,
        borderRadius: 10,
        backgroundColor:'white',
        marginTop: 5,
        borderColor:'#DCD1D1'
    },
    close:{
        width: 30,
        height: 30,
        left: 295,
        top: -36,
    }


})