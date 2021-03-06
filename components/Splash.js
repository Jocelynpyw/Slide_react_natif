import React  from 'react';
import { StyleSheet,Text ,View ,Image } from 'react-native';
import Onboarding from './Onboarding'

const  Splash =({navigation})=>{
    setTimeout(()=>{
        navigation.replace('Onboarding')
    },3000)
  
        return(
            <View style={styles.container}>
                <View style={{flex:0.2}}>
                    <Image style={{height:54,width:54,marginLeft:-3}} source={require('../images/logo.png')}></Image>
                    <Text style={{fontWeight:'bold'}}>KAWLO</Text>
                </View>
                <View style={{flex:0.5 ,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'black',marginVertical:50,fontWeight:'bold',fontSize:18}}>Educating for Tomorrow</Text>
                    <Image source={require('../images/group285.png')} style={{height:300,width:300,marginLeft:30}}></Image>
                </View>
            </View>
        )
}
export default Splash
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
    },

})