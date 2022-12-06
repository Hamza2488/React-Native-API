import React, { useState } from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity, ActivityIndicator, DevSettings } from 'react-native'
import styles, { style } from './style'
import star from './Images/star.png'

const Product = ({navigation,route}) => {
    const [loader, setLoader] = useState(true)
    
    setTimeout(() => {
        setLoader(false)
    }, 1000);

    console.log(route.params)
  return (
    <>
    {loader?(
        <View style={styles.loader}>
          <ActivityIndicator style={{marginVertical:270}}  size='large' color='gray'/>
        </View> 
    ):(
        <View style={{backgroundColor:'lightgray'}}>
        <ScrollView>
        <View>
            <View style={[style.p2,style.bgWhite,style.rounded,style.m1]}>
            <Image source={{uri:route.params.image}} style={{width:'100%',height:300}} />
            </View>
        </View>
        <View style={[style.bgWhite,style.rounded,style.p1,style.m1]}>
        <View style={style.flexRow}>
        <Text style={[style.textBlack,style.fs4,style.textBold,{marginRight:70}]}>{route.params.title}</Text>
        <View style={[style.flexRow,{marginVertical:25,position:'absolute',right:20,top:-20}]}>
            <Image source={star} style={{width:17,height:17}}/>
            <Text style={{color:'orange'}}>{route.params.rating.rate}</Text>
        </View>
        </View>
        <Text >{route.params.description}</Text>
        
        </View>
        <View style={[style.flexRow,style.bgWhite,style.p1,style.m1,style.rounded,{marginVertical:10}]}>
            <Text style={[style.textBlack,{fontSize:18,marginVertical:10}]}>{` $:${route.params.price}`}</Text>
            <TouchableOpacity style={[style.bgSecondary,style.rounded,style.flexCenter,style.p1,{position:'relative',left:90}]}>
                <Text style={[style.textWhite]}>Buy Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[style.bgSecondary,style.rounded,style.flexCenter,style.p1,{position:'relative',left:100}]}>
                <Text style={[style.textWhite]}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
    )}
   </>
  )
}

export default Product
