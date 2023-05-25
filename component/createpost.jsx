import React,{useState} from 'react'
import {View,Text,StyleSheet,Modal,Alert } from 'react-native'
import { TextInput,Button, } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker'; // bu asagidaki raeact-native - expo ucun img pickere gore lazimdir
import * as mime from 'react-native-mime-types';
import axios from 'axios';


const SERVER_URL = 'http://10.161.148.38:3000';

const createFormData = (photo) => {

  
  const data = new FormData();
  data.append('photo', JSON.stringify(data));
  data.append('photo', {
    name: photo.assets[0].fileName,
    type: photo.assets[0].type,
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.assets[0].uri,
  });



  return data;
};


export default function Createpost(props)  {
    
  const [photo, setPhoto] = useState(null);

  const handleChoosePhoto = async () => {


 
         let data = await ImagePicker.launchImageLibraryAsync({
              mediaTypes:ImagePicker.MediaTypeOptions.Images,
              allowsEditing:true,
              aspect:[1,1],
              quality:0.5
          })
          if(!data.canceled){
            console.log(data)
            console.log(data.assets[0].uri)
            setPhoto(data);
          }
    }
    
  


  const handleUploadPhoto = () => {
    fetch(`http://10.161.148.38:3000'/api/posts`, {
      body: createFormData(photo),
      'Content-Type': 'multipart/form-data',
      method: "POST",
   
    mode: 'cors',
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
    }) 
    .then((response) => response.json())
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

    
    
    /*const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.5,
        });
    
        if (!result.canceled) {
            const newImageUri =  result.assets[0].uri
         
          upload(newImageUri );
        }
      };


    
    const upload = async ( newImageUri ) => {
        
        const formData = new FormData();
        formData.append('image', {
         uri : newImageUri,
         type: jpg,
         name: test
        });
    
        var ImageRequestOptions = {
          method: "POST",
          body: formData,
         
        };
    
        fetch(
          "https://api.cloudinary.com/v1_1/dvflguwig/image/upload",
          ImageRequestOptions
        ).
        then(res => res.json()).
        then(data => {
          console.log(data);
          
        }).catch(err => {
         console.log(err+"my error occurred");
        })
      };*/
    
    return (
       <View>
                        
                        <Button style={{marginTop:50}} theme={theme} icon="image-area" mode="contained" onPress={() => handleChoosePhoto ()}>Galeriya</Button>
                        <Button  style={{marginTop:50}} theme={theme} onPress={handleUploadPhoto} >Upload Photo</Button>
                    </View>
    )
}
const theme = {colors:{primary:"#CA9D0C"}};
