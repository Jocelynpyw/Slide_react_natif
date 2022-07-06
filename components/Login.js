import { CheckBox } from "react-native-elements";
import React, { useState } from "react";
import {StyleSheet, View, Text ,SafeAreaView, StatusBar, TextInput, Button } from "react-native";
// import { Icon } from "react-native-vector-icons/Icon";

const Login = () => {
    const [check1, setCheck1] = useState
    (false);

  return (
    <SafeAreaView style={styles.containerPrincipal} >
        <StatusBar barStyle="dark-content"/>
        <View style={styles.containerPrincipal} >
        <Text style={styles.firtTitle}> CREATE NEW ACCOUNT</Text>
        <Text style={styles.firstText}>Lorem ipsum dolor sit amet, 
        consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</Text>
        <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
                {/* <Icon name="lock"></Icon> */}
                <TextInput 
                    style={{
                        position:'relative',
                        borderWidth: 1,
                        borderColor:'#CFCFD5',
                        padding:10,
                        width:'100%',
                        height:'100%',
                        borderRadius:23

                   }} 
                placeholder="Enter Username" placeholderTextColor='#818181'></TextInput>

            </View>
            <View style={styles.inputBox}>
                {/* <Icon name="lock"></Icon> */}
                <TextInput 
                    style={{
                        position:'relative',
                        borderWidth: 1,
                        borderColor:'#CFCFD5',
                        padding:10,
                        width:'100%',
                        height:'100%',
                        borderRadius:23

                   }} 
                placeholder="Enter Email" placeholderTextColor='#818181'></TextInput>

            </View>
            <View style={styles.inputBox}>
                {/* <Icon name="lock"></Icon> */}
                <TextInput  style={{
                     position:'relative',
                     borderWidth: 1,
                     borderColor:'#CFCFD5',
                     padding:10,
                     width:'100%',
                     height:'100%',
                     borderRadius:23

                }} placeholder="Enter Password" placeholderTextColor='#818181'></TextInput>

            </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'center',marginTop:10}}>
        <CheckBox
          center
          title="Click Here"
          checked={check1}
          onPress={() => setCheck1(!check1)}
        />

        <Text style={styles.label}>Do you like React Native?</Text>


        </View>

        <View style={styles.loginSection}>
            <Text style={{marginVertical:10,fontSize:13.5,fontWeight:'bold',color:'#6A6A6D'}}>Login With Social Media</Text>

            <View style={{flexDirection:'row'}}>
            <View style={{flex:0.5 ,margin:5}}><Button style={styles.loginSectionbtn} title="Google"/></View>
            <View style={{flex:0.5, margin:5 }}><Button style={styles.loginSectionbtn} title="Facebook"/></View>
                
            </View>
        </View>
        <View style={{position:'relative',bottom:0,height:200,flexDirection:'column',paddingTop:20}}> 
        <Button title="Create Account" style={{marginTop:10}}/>
        <Text style={{textAlign:'center',marginTop:50}}>I have an Account,<Text style={{color:'#5D8ACB'}}>Sign in</Text></Text>

        </View>
    </View>
    </SafeAreaView>
    
    
  );
};

export default Login;
const styles = StyleSheet.create({
    containerPrincipal:{
        padding:10,
        // marginTop:20,
        flex:1,        
        flexDirection:"column",

        backgroundColor:'white'
    },
    firtTitle:{
        // width: 210,
        height: 25,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 21,
        marginBottom:10,
    },
    firstText:{
        // padding:10,
    },
    inputContainer:{
        flexDirection:'column',marginTop:10,
        justifyContent:'center',alignItems:'center'
    },
    inputBox:{
        flexDirection:'row',
        alignItems:'center',
        width:'95%',
        height:40,
        marginTop:20

    },
    loginSection:{
        height:120,
        flexDirection:"column",
        alignItems:'center',
        justifyContent:'center'
    },
    loginSectionbtn:{
        borderRadius:50,
        backgroundColor:'#FBFBFB'

    }


})