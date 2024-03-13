import { Text, SafeAreaView, StyleSheet, View, Image,TextInput, Button, Alert, TouchableOpacity, Linking} from 'react-native';

import search1 from '../img/search1.png'
import { useState } from 'react';
export default function search ({placeholder, onSearch}){
  const [query, setQuery] = useState('');

    const handleChange = (text) => {
        setQuery(text);
        onSearch(text); // Call the parent component's search handler with the updated query
    };
    return(
      <View style={Styles.container}>
      <TextInput
          style={Styles.search}
          placeholder={placeholder}
          onChangeText={handleChange}
          value={query}
          placeholderTextColor="grey"
      />
      <Image source={search1} style={Styles.searchIcon}/>
  </View>
    )
}
{/* <Image source={search1} style={{width:20,height:20, position: 'absolute', bottom: 10, right: 45}}/> */}
const Styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems:'center',
      
    },
    search:{
      padding: 8,
      borderColor: '#2254C5',
      width: 275,
      height: 40,
      marginLeft: 10,
      marginTop: 40,
      borderWidth: 2,
      borderRadius: 8,
      position: 'relative'

    },
    searchIcon:{
      zIndex:1,
      top: -32,
      width: 25,
      height: 25,
      left: 110
    }
    
  
  });