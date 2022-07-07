import React, { useState }  from 'react';

import { StyleSheet,Text ,View ,Image,Button,TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Dimensions } from "react-native";
import Login from './Login';

const {height,width}=Dimensions.get('screen');

const slides =[
    {
        id:1,
        title:"Student Chat Forum",
        desciption:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        image :require('../images/image1.png')
    },
    {
        id:2,
        title:"Study",
        desciption:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        image :require('../images/image2.png')
    },
    {
        id:3,
        title:"Papers",
        desciption:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        image :require('../images/image3.png')
    },
    {
        id:4,
        title:"Quiz",
        desciption:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        image :require('../images/image4.png')
    }
]

const  Splash =({navigation})=>{  
      const [showHomePage,setShowHomePage] =useState(false);
      const buttonLabelSkip =(label)=>{
        return(
            <View style={{
                padding:12,
              
            }}><Text style={{
                color:'#3A5991',
                fontWeight:'600',
                fontSize:10,
                fontSize:13,
                lineHeight:15,
                marginLeft:40
            }}>
                
                {label}
            </Text>

            </View>
        )
      }
      const buttonLabelNext =(label)=>{
        return(
            <View style={{
                padding:12,
                marginLeft:30,
              
            }}><TouchableOpacity style={{
                width:96,
                height:42,
                justifyContent:'center',
                textAlign:'center',
                fontWeight:'600',
                fontSize:10,
                borderRadius:11,
                backgroundColor:'#5F81C0',
                marginTop:-14,
                marginRight:40,
                color:'white',


            
               
            }}>
                <Text style={{textAlign:'center',color:'white',fontSize:13,fontWeight:'400'}}>{label}</Text>
            </TouchableOpacity >

            </View>
        )
      }
      const buttonLabelDone =(label)=>{
        return(
            <View style={{
                flex:1,
                flexDirection:'row',
                padding:12,
                justifyContent:'center',
                alignContent:'center',
                alignItems:'center',
                marginBottom:20


              
            }}>
                <TouchableOpacity
                style={{
                    width:'100%',
                    height:42,
                    backgroundColor:'#5F81C0',
                    borderRadius:11,alignItems:'center',
                    justifyContent:'center',
                }}
                
                ><Text style={{color:'white',fontSize:13}}>{label}</Text></TouchableOpacity>
            </View>
        )
      }

    if(!showHomePage){
             return(
                <AppIntroSlider
                data={slides}
                keyExtractor={item=>item.id}
                renderItem={({item})=>{
                    return(
                        <View 
                        style={{
                            flex:1,
                            alignItems:'center',
                            justifyContent:'center',
                            padding:15,
                            flexDirection:'column'
                            // paddingTop:100,
                        }}>
                             <View style={{
                                flex:0.4,
                                justifyContent:'center',
                                alignItems:'center'
                             }}>
                            <Image source={item.image}
                            style={{
                                width: width-180,
                                height:400,
                                marginTop:20
                            }}
                            resizeMode="contain"
                            />
                            {/* <View style={{
                                width:'100%',borderBottomWidth:2,borderBottomColor:'blue'
                            }}></View> */}
                            <Text style={{
                                fontSize:18,
                                fontFamily:'roboto',
                                color:'#3A5991',
                                lineHeight:21,
                                fontWeight:'bold',
                                // marginBottom:20
                            }}>
                                {item.title}
                            </Text>
                            <Text style={{
                                fontSize:13,
                                fontFamily:'roboto',
                                lineHeight:23,
                                alignItems:'center',
                                textAlign:'center',
                                padding:30,
                                fontWeight:'bold'
                            }}>
                                {item.desciption}
                            </Text>

                        </View>

                        <View style={{flex:0.3}}>
                                                        {/* <Text>Je suis beau</Text> */}

                        </View>


                        </View>

                       
                    )
                }}
                dotStyle={{
                    backgroundColor:'#D8D8D8',
                    marginBottom:240,
                    width:6,
                    height:6
                }}
                activeDotStyle={{
                    backgroundColor:'#3A5991',
                    width:10,
                    marginBottom:240,
                    width:8,
                    height:8


                }}
              

            
                // renderNextButton={()=>{

                // }}
                showSkipButton
                renderNextButton={()=> buttonLabelNext("Next")}
                renderSkipButton={()=> buttonLabelSkip("Skip")}
                renderDoneButton={()=>buttonLabelDone("Done")}
                onDone={()=>{
                    setShowHomePage(true)
                }}
                
                />


          
        )
    }
    return(
        <Login/>
    )

}
export default Splash;
