import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'

const SignUp = () => {
  return (
    <>
    <View style={{backgroundColor:'blue',width:'100%',height:'100%'}}>
      <View  >
        <Text style={{color:'white',fontSize:30,fontWeight:'bold',alignItems:'center',marginVertical:110,marginHorizontal:40,zIndex:1}}>WELCOME</Text>
      </View>
      <View style={{backgroundColor:'white',width:'100%',height:'70%',borderTopRightRadius:50,borderTopLeftRadius:50,position:'relative',top:-40}}>
        <View style={{padding:30}}>
        <Text style={{fontSize:23,color:'black',fontWeight:'bold',marginHorizontal:20}}>Sign Up</Text>
        <TextInput style={{borderBottomWidth:2,borderBottomColor:'black',fontSize:15,marginVertical:15}}  placeholder='User Name'/>
        <TextInput style={{borderBottomWidth:2,borderBottomColor:'black',fontSize:15,marginVertical:15}} keyboardType='email-address' placeholder='Email'/>
        <TextInput style={{borderBottomWidth:2,borderBottomColor:'black',fontSize:15,marginVertical:15}} placeholder='Password'/>
        <Button title='SIGN UP' color='blue'/>
        <View style={{flexDirection:'row', marginVertical:20,marginHorizontal:40}}>
          <Text style={{fontWeight:'bold',fontSize:13,color:'black'}}>Already a member</Text>
          <Text style={{fontWeight:'bold',fontSize:15,color:'blue',}}>   Login</Text>
        </View>
        </View>
      </View>
    </View>
    </>
  )
}

export default SignUp