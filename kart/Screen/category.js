import React,{Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity,ImageBackground,Image,TextInput,StatusBar, } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default class CategoryScreen extends Component{
  render(){
    return(
      <View>
     <View style={styles.container}>

       <SafeAreaProvider><Header
  backgroundColor={'#01EDFF'}  

   centerComponent={{
            text: 'All Category',
            style: { color: '#fff', fontSize: 20,fontWeight:'bold',right:90
            
             },}}/>
    </SafeAreaProvider>
     </View>
     
     <View>
     <TouchableOpacity>
     <Image 
     style={styles.mobile}
          source={{
            uri:
              'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/11/phones-switch-apps.jpg',
          }}
     />

     <Text style={{left:30,top:60}}>Mobiles</Text>
     </TouchableOpacity>
     </View>
     
     <View>
     <TouchableOpacity>
     <Image
style={styles.laptop}
          source={{
            uri:
              'https://www.intel.in/content/dam/www/central-libraries/us/en/images/2022-08/evo-laptop-product-image-transparent-background.png.rendition.intel.web.576.324.png',
          }}/>
          </TouchableOpacity>
     </View>
   </View>

    )
  }
}


const styles = StyleSheet.create({
container: {
    width:'100%',
    height:'60%',
  
  },
  mobile:{
width:95,
height:95,
left:20,
marginTop:'-45%',
borderWidth:4,
borderRadius:40


  },
  laptop:{
    width:114,height:114,
    top:'-165%',
    left:'40%',
    borderRadius:40,
    borderColor:'gray'
  }

})
