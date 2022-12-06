// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios'
import  { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { Button, Text, View, Image, ScrollView, StyleSheet, ActivityIndicator, RefreshControl, TouchableOpacity, TextInput, DevSettings } from 'react-native'
import styles, { style } from './style'
import RNPickerSelect from "react-native-picker-select";
import Product from './product';

const Home = ({navigation}) => {
  const [Api, setApi] = useState([])
  const [loder, setLoader] = useState(true)
  const [refresh,setRefresh] = useState(false)
  const [filter, setFilter] = useState('')
  

  const search = (e)=>{
    setFilter(e)
  }

  let dataSearch = Api.filter(item=>{
    return Object.keys(item).some(key =>
      item[key]
      .toString().toLowerCase()
      .includes(filter.toString().toLowerCase()),
      );
  });

  console.log(filter)
  
  let API = ()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
      // console.log(res.data)
      setApi(res.data)
      setLoader(false)
    }
    
    ).catch((err)=>{
      console.log(err)
      setLoader(false)
    })
  }

  useEffect(() => {
    API()
  }, [])


  let onRefresh = ()=>{
    setRefresh(true)
    setTimeout(() => {
      setRefresh(false)
    }, 2000);
  }

  const next = (e)=>{
    navigation.navigate('Product',e)
  }
  
  



  return (
    <View style={{backgroundColor:'lightgary'}}>
      {loder?(
        <View style={styles.loader}>
          <ActivityIndicator style={{marginVertical:270}}  size='large' color='gray'/>
        </View> 
      ):(
        <View>
          
        <View style={styles.container}>
          <Text style={styles.header}>API Store</Text>
          
        
        <TextInput value={filter} onChangeText={search.bind(this)} style={{borderWidth:2,borderColor:'white',padding:7,fontSize:15,marginVertical:10,borderRadius:15}} placeholder='Search Here...' placeholderTextColor='white'/>
         
        </View>
        
        <ScrollView refreshControl={
            <RefreshControl onRefresh={onRefresh} refreshing={refresh} onRef/>
          }>
        <View style={{flexDirection:'row',flexWrap:'wrap',padding:10}}>

      {
        dataSearch.map((e,i)=><View key={i} >
          <View>
        
          <TouchableOpacity onPress={()=>next(e)} style={styles.main}>
            <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png'}} style={{width:15,height:15,marginHorizontal:125,zIndex:1}} />
        <Image source={{uri:e.image}} style={{width:'100%',height:150,position:'relative',top:-10}}/>
        <View >
        <Text style={styles.title} numberOfLines={2}>{e.title}</Text>
        <Text style={styles.price}>{`Price: $${e.price}`}</Text>
        <View style={{flexDirection:'row',marginVertical:5}}>
        <Image source={{uri:'https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png'}} style={{width:10,height:10,marginVertical:5}}/>
        <Text style={styles.rating}>{`${ e.rating.rate}`}</Text>
        </View> 
        </View>
        </TouchableOpacity>
      </View>
      </View>) 
      }
      </View>
      </ScrollView>
      </View>
      )}
      
    </View>
  )
}


const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;