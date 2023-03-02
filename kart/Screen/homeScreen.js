import React,{Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity,ImageBackground,Image,TextInput,SafeAreaView,StatusBar, } from 'react-native';
import { Header } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import CategoryScreen from "./category";




export default class HomeScreen extends Component{
 render(){
   return(

      <View>
 <View style={styles.container}>

       <SafeAreaProvider><Header
  backgroundColor={'#01EDFF'}  

   />
    </SafeAreaProvider>
     </View>



    
     <View>
     
   
     <View style={styles.inputBoxContainer}>
    

   
     <TextInput style={styles.inputBox}
       placeholder="Search"
      >
     
     </TextInput>
     </View>
  </View>

  <View>

  <Image/>
 <TouchableOpacity style={{}} >
 <Image
          style={styles.image}
          source={{
            uri:
              'https://cdn-icons-png.flaticon.com/128/25/25694.png',
          }}
        />
</TouchableOpacity>

<TouchableOpacity style={{}}>
        <Image

style={styles.profile}
          source={{
            uri:
              'https://cdn-icons-png.flaticon.com/128/1077/1077063.png',
          }}
        />
</TouchableOpacity>

<TouchableOpacity >
        <Image

style={styles.cart}
          source={{
            uri:
              'https://as2.ftcdn.net/v2/jpg/00/97/00/05/1000_F_97000552_d8RwiZAnFewznisQphPtjyxxRNAAZQ92.jpg',
          }}
        />
        </TouchableOpacity>

        <TouchableOpacity  >
        <Image

style={styles.category}
          source={{
            uri:
              'https://as1.ftcdn.net/v2/jpg/05/60/34/74/1000_F_560347491_D2miGVjtIU5imkHJOdVj8KKVFJifIpnt.jpg',
          }}
        />
        </TouchableOpacity>
    </View>
 </View>

 )}
}
const styles = StyleSheet.create({
 inputBoxContainer: {
    flex:0.3,
    alignItems:'center',
    justifyContent:'center'
  },
  inputBox: {
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius:50,
    marginTop:'50%'
  },
  image:{
    width: 34,
    height: 34,
    marginLeft:'10%',
    marginTop:'205%'
  },
  profile:{
   width: 30,
   height: 30,
   marginLeft:'60%',
   justifyContent:'center',
   top:-30
     
  },
cart:{
  width:42,
  height:42,
  left:'35%',
  top:-65
},
category:{
  width:30,
  height:30,
   left:'85%',
  top:-99
},
container: {
    width:'100%',
    height:'1%',
  
  
  }






})