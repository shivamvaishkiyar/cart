import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from '../Screen/homeScreen';
import CategoryScreen from '../Screen/category';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {


return(
<NavigationContainer>
<Tab.Navigator>
<Tab.Screen name="Category" component={Category}/>
</Tab.Navigator>

</NavigationContainer>

);

}

export default BottomTabNavigator

