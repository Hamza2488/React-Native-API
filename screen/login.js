import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'

const Login = () => {
  return (
    <>
    <View style={{backgroundColor:'blue',width:'100%',height:'100%'}}>
      <View  >
        <Text style={{color:'white',fontSize:30,fontWeight:'bold',alignItems:'center',marginVertical:110,marginHorizontal:40,zIndex:1}}>WELCOME BACK</Text>
      </View>
      <View style={{backgroundColor:'white',width:'100%',height:'70%',borderTopRightRadius:50,borderTopLeftRadius:50}}>
        <View style={{padding:30}}>
        <Text style={{fontSize:23,color:'black',fontWeight:'bold',marginHorizontal:20}}>Login</Text>
        <TextInput style={{borderBottomWidth:2,borderBottomColor:'black',fontSize:15,marginVertical:15}} keyboardType='email-address' placeholder='Email'/>
        <TextInput style={{borderBottomWidth:2,borderBottomColor:'black',fontSize:15,marginVertical:15}} placeholder='Password'/>
        <Button title='Login' color='blue'/>
        <View style={{flexDirection:'row', marginVertical:20,marginHorizontal:40}}>
          <Text style={{fontWeight:'bold',fontSize:13,color:'black'}}>Create an account?</Text>
          <Text style={{fontWeight:'bold',fontSize:15,color:'blue',}}>   SignUp</Text>
        </View>
        </View>
      </View>
    </View>
    </>
  )
}

export default Login