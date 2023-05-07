import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform,TouchableOpacity,Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Createpost() {
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
  const uploadImage=()=>{
    console.log(image)
  };

  return (
    <View style={{ flex: 1,marginTop:'13%' }}>
    <View >
      <TouchableOpacity onPress={pickImage}><Text style={{ color:"green", marginTop:'1%',fontWeight:'bold',fontSize:16}}> Post from gallary</Text></TouchableOpacity> 
      {image && <Image source={{ uri: image }} style={{ width: '100%', height: 400 }} />}
    </View>
    <TouchableOpacity onPress={uploadImage}>
                  <Text style={{ color:"green", marginTop:'1%',fontWeight:'bold',fontSize:16}}>Share Post</Text>
                </TouchableOpacity>
    </View>
  );
}

