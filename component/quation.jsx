import React from "react";
import { StyleSheet, View, Text, TextInput,Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Ionic from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect } from 'react';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import Displayquation from "./displayquation";

const Quation = () => {
  
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
   
   
    <View style={styles.container}>
    <ScrollView><View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingVertical: 10,
      position: 'relative',
      
    }}> 
    <Ionic
      name="search"
      style={{
        fontSize: 18,
        opacity: 0.7,
        position: 'absolute',
        zIndex: 1,
        left: 25,
      }}
    />
    
    <TextInput
      placeholder="Search a quation"
      placeholderTextColor="#909090"
      style={{
        width: '94%',
        backgroundColor: '#EBEBEB',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 15,
        padding: 4,
        paddingLeft: 40,
      
      }}
    />
    
    </View>
  
  
  <View
    style={{
   
      width: '100%',
      paddingVertical: 10,
      
    }}>
      <Text> what is on you'r mind</Text>
      </View>
    <View>
    <TextInput
      placeholder="ask a quation"
      placeholderTextColor="#909090"
      style={{
        width: '100%',
        backgroundColor: '#EBEBEB',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 15,
        padding: 4,
        paddingLeft: 40,
        height:'20%'
      }}
    />
     
                    <TouchableOpacity onPress={pickImage}><Text style={{ color:"green", marginTop:'1%',fontWeight:'bold',fontSize:16}}> Post from gallary</Text></TouchableOpacity> 
      {image && <Image source={{ uri: image }} style={{ width: '100%' }} />}
<View>
  <TouchableOpacity style={{marginTop:'0%'}}><Text>share</Text></TouchableOpacity></View>
  </View>
  <View>

  </View>

  <Displayquation/></ScrollView>
                   </View>
  );
};
export default Quation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
    
    marginTop:'10%'
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
}
});
