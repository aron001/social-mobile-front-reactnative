import React, { useState, useEffect } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {
  const [image, setImage] = useState(null);
  const [data, setData] = useState([]);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append('image', {
      uri: image,
      type: 'image/jpeg',
      name: Date.now() + image
    });

    try {
      
      const response = await axios.post('http://10.161.148.38:3000/upload',formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      

      console.log(response.data);
      setData(response.data)
    } catch (e) {
      console.log(e);
    }
    try {
      const token = await AsyncStorage.getItem('token');
      const newPost = {
      
        desc: "tnx desc",
        img:data.path,
      };
      const response = await axios.post('http://10.161.148.38:3000/api/posts',newPost,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      

      console.log(response.data);
   
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      {image && <Button title="Upload" onPress={uploadImage} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
});
