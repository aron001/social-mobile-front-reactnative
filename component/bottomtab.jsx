import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Settingscreen from './settingscreen';
import Quation from './quation';
import { FontAwesome } from '@expo/vector-icons';
import CreatePost from './createpost';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Timelinepost from './timlinepost';
import Home from './home';
import Search from './search';
import Profilescreen from './profilescreen';
const Tab = createMaterialBottomTabNavigator();
//const Drawer = createDrawerNavigator();
const Bottomtab = () => {
return (

  <Tab.Navigator
      initialRouteName="Home"
      activeColor="darkblue"
   
      barStyle={{ backgroundColor:'#009387' }}
    >
  <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarColor:'#009387',
          
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Quation" component={Quation} options={{
          tabBarLabel: 'q&a',
          tabBarIcon: ({ color }) => (
            <FontAwesome name='question' color="#05375a" size={20}/>
          ),
        }} />
        <Tab.Screen name="search" component={Search} options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <FontAwesome name='search' color="#05375a" size={20}/>
          ),
        }} />
        <Tab.Screen name="Profilescreen" component={Profilescreen} options={{
          tabBarLabel: 'profile',
          tabBarIcon: ({ color }) => (
             <FontAwesome name='user' color="#05375a" size={20}/>
          ),
        }} />
    </Tab.Navigator>
    
  /*
  <NavigationContainer>
    <Drawer.Navigator >
      <Drawer.Screen name="Settingscreen" component={Settingscreen}/>
    </Drawer.Navigator>
  </NavigationContainer>*/
);
};
export default Bottomtab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
