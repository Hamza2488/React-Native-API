import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Button, Text, View, Image, ScrollView, StyleSheet, ActivityIndicator, RefreshControl } from 'react-native'
import {Himg} from './Images/heart.png'
import {star} from './Images/star.png'
import {loading} from './Images/loader.gif'
import styles from './style'
import RNPickerSelect from "react-native-picker-select";

const App = () => {
  const [Api, setApi] = useState([])
  const [loder, setLoader] = useState(true)
  const [refresh,setRefresh] = useState(false)

  
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
  
  



  return (
    <View style={{backgroundColor:'pink',height:'100%'}}>
      {loder?(
        <View style={styles.loader}>
          <ActivityIndicator style={{marginVertical:270}}  size='large' color='red'/>
        </View> 
      ):(
        <ScrollView refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={refresh} onRef/>
        }>
        <View style={styles.container}>
          <Text style={styles.header}>API Store</Text>
          
        </View>
        <View style={{flexDirection:'row',flexWrap:'wrap',padding:10}}>

      {
        Api.map((e,i)=><View key={i} >
          <View>
        
          <View style={styles.main}>
            <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png'}} style={{width:15,height:15,marginHorizontal:125,zIndex:1}} />
        <Image source={{uri:e.image}} style={{width:'100%',height:150,position:'relative',top:-10}}/>
        <View >
        <Text style={styles.title}>{e.title.length >50 ? e.title.slice(40):e.title}</Text>
        <Text style={styles.price}>{`$:${e.price}`}</Text>
        <View style={{flexDirection:'row',marginVertical:5}}>
        <Image source={{uri:'https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png'}} style={{width:10,height:10,marginVertical:5}}/>
        <Text style={styles.rating}>{`${ e.rating.rate}`}</Text>
        </View> 
        </View>
        </View>
      </View>
      </View>) 
      }
      </View>
      </ScrollView>
      )}
      
    </View>
  )
}

export default App












