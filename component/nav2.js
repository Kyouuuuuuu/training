import React from 'react';
import { StackRouter, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Homei from '../img/Home.png';
import Search from '../img/Search.png';
import Chat from '../img/Chat.png';
import Profile from '../img/User.png';

const Nav2 = () => {
    const navigation = useNavigation();

    const GoHome = () => {
        navigation.navigate('Home');
    };

    const GoProfile = () => {
        navigation.navigate('Profile');
    };

    return (
        <View style={styles.container}>
         
            <View style={styles.nav}>
            <TouchableOpacity onPress={() =>{ navigation.navigate('Video')}} style={styles.start}><Text style={styles.starttext}>Start</Text></TouchableOpacity>
                <TouchableOpacity onPress={GoHome} style={styles.navItem}>
                    <Image style={styles.icon} source={Homei} />
                    <Text style={styles.label}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={styles.navItem}>
                    <Image style={styles.icon} source={Search} />
                    <Text style={styles.label}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={styles.navItem}>
                    <Image style={styles.icon} source={Chat} />
                    <Text style={styles.label}>Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={GoProfile} style={styles.navItem}>
                    <Image style={styles.icon} source={Profile} />
                    <Text style={styles.label}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'relative', // Tambahkan posisi relatif di sini
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        backgroundColor: 'white',
        width: '100%',
        height: 110,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 8,
    },
    navItem: {
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    },
    label: {
        fontSize: 10,
        color: '#92959B',
    },
    start:{
        width: 300,
        height: 50,
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        zIndex:10,
        top:15,
        right: 30,
        backgroundColor:'#2254C5',
        color: '#FFFFFF',
    },
    starttext:{
        color: '#FFFFFF'
    }
});

export default Nav2;
