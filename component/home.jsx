import React,{useState,useEffect} from "react";
import { StyleSheet, View, Text,ScrollView,TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Ionic from '@expo/vector-icons';
import Post from "./post";
import MyDrawer from "./drawer"
import client from '../api/client';
import { axios } from "axios";

const Home = ({navigation}) => {


  const [posts, setPosts] = useState([]);

  
 
    


  return (
    <View style={styles.container}>
    <StatusBar
      backgroundColor="white"
      barStyle="dark-content"
      animated={true}
    />
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
      }}>
       <TouchableOpacity
                    onPress={() =>
                      navigation.push(MyDrawer)}
                   
                ><Feather name="menu" style={{fontSize: 24}} /></TouchableOpacity>
      <Text
        style={{
           
          fontSize: 25,
          fontWeight: '500',
        }}>
        Bdu App
      </Text>
      
      <TouchableOpacity
                    onPress={() => navigation.navigate('createpost')}
                   
                >
      <FontAwesome name="plus-square-o" style={{fontSize: 24}} />
      </TouchableOpacity>
    </View>
    <ScrollView>
   
        <Post />
    
      </ScrollView>
    </View>

  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop:'12%',
    backgroundColor: 'white', 
    height: '100%'
  },
});
