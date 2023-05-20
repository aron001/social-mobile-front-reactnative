import React, { useState, useEffect } from 'react';
import { Button, Image, View,Alert, Platform,TouchableOpacity,Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import client from '../api/client';
export default function Createpost(props) {

  const [image, setImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  
  
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }

    if (status === 'granted') {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });

      if (!response.canceled) {
        setProfileImage(response.assets[0].uri);
      }
    }
  };
  
  const uploadProfileImage = async () => {
    const formData = new FormData();
    formData.append('photo', {
      name: new Date() + '_profile',
      uri: profileImage,
      type: 'image/jpg',
    });

    try {
      const res = await client.post('/api/posts', formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjA4OTkxNDY4NjZhZGY3NmJlNTgxZSIsImlhdCI6MTY4NDQ4NTk1MCwiZXhwIjoxNjg0NzQ1MTUwfQ.P-ZxYBY_4qx2ir0c6kZIDruqlFEupOOO_UR1R3rFNCE`,
         
        },
      });}catch (error) {
        console.log(error.message);
      }
}

  
  return (
    <View style={{ flex: 1,marginTop:'13%' }}>
    <View >
      <TouchableOpacity onPress={pickImage}><Text style={{ color:"green", marginTop:'1%',fontWeight:'bold',fontSize:16}}> attach an image for the quation</Text></TouchableOpacity> 
      {image && <Image source={{ uri: image }} style={{ width: '100%', height: 400 }} />}
    </View>

                <View>
                <TouchableOpacity onPress={uploadProfileImage}>
                  <Text style={{ color:"green", marginTop:'1%',fontWeight:'bold',fontSize:16}}>Share Post</Text>
                </TouchableOpacity></View>
                
    </View>

  );
}

