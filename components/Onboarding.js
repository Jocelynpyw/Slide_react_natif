import React, { useState }  from 'react';
import { StyleSheet,Text ,View ,Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Dimensions } from "react-native";

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
        id:1,
        title:"Papers",
        desciption:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        image :require('../images/image3.png')
    },
    {
        id:1,
        title:"Quiz",
        desciption:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        image :require('../images/image4.png')
    }
]

const  Splash =({navigation})=>{  
      const [showHomePage,setShowHomePage] =useState(false);

    if(!showHomePage){
             return(
                <AppIntroSlider
                data={slides}
                renderItem={({item})=>{
                    return(
                        <View style={{
                            flex:1,
                            alignItems:'center',
                            padding:15,
                            paddingTop:100,
                        }}>
                            <Image source={item.image}
                            style={{
                                width: width-80,
                                height:400,
                            }}
                            resizeMode="contain"
                            />
                            <Text>
                                {item.title}
                            </Text>
                            <Text>
                                {item.desciption}
                            </Text>

                        </View>
                    )
                }}
                
                />



          
        )
    }

}
export default Splash;
