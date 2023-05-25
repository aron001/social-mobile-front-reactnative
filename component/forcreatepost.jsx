import React,{useState} from 'react'
import {View,Text,StyleSheet,Modal,Alert } from 'react-native'
import { TextInput,Button, } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker'; // bu asagidaki raeact-native - expo ucun img pickere gore lazimdir
import * as Permissions from 'expo-permissions'; //

export const CreateEmployee = () => {
    const [data,setData] = useState({ name:'', phone:'',email:'',salary:'',picture:'' });
    const [modal,setModal] = useState(false);
    const inputHndl=(name,value)=>{ setData((data)=>( {...data,[name]:value} )); }
    
    const pickFromGalary = async ()=>{ //picker from galery code
        const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if(granted){
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5
            });
            if(!data.cancelled){
                let newFile = {
                    uri:data.uri,
                    type:`test/${data.uri.split(".")[1]}`,
                    name:`test.${data.uri.split(".")[1]}`};
                handleUpload(newFile);
            }
        }else{  Alert.alert('Siz bu funksiyani isletmek ucun icaze vermelisiz'); }
    }
    const pickFromCamera = async ()=>{ // picker from camera code
        const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL); // kamera ucun icazeni aliriq
        if(granted){ // icaze varsa bura
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5
            });
            if(!data.canceled){ //sekil secimi merhelesinde her hansi cansel emelyati olmayibsa bura isleyecek
                let newFile = {
                    uri:data.uri,
                    type:`test/${data.uri.split(".")[1]}`,
                    name:`test.${data.uri.split(".")[1]}`};
                handleUpload(newFile);
            }else{Alert.alert('emelyat legv edildi');}
        }else{  Alert.alert('Siz bu funksiyani isletmek ucun icaze vermelisiz'); } // yoxsa bura isleyir
    }
    const handleUpload = (image)=>{
        const data = new FormData(); // fetch ucun data hazirlayiriq
        data.append('file',image);  // cloudinary ucun img file,hansiki imgpicker den gelir
        data.append('upload_preset','employeeApp'); // cloudinary ucun preset ti teyin edirik
        data.append('cloud_name','balaagha-react-native-app'); // cloudinary ucun cloud ad
        fetch("https://api.cloudinary.com/v1_1/balaagha-react-native-app/image/upload",{  method:'post',body:data})
          .then(res=>res.json())
          .then(data=>{  inputHndl('picture',data.url); }); // cloudinary yuklenenden sora gelen datani state guncelliyirik,data cloudinaryden gelir
    }
    
    return (
       <View style={styles.modalButtonWrapper}>
                        <Button theme={theme} icon="camera" mode="contained" onPress={() => pickFromCamera()}>Kamera</Button>
                        <Button theme={theme} icon="image-area" mode="contained" onPress={() => pickFromGalary()}>Galeriya</Button>
                    </View>
    )
}
const theme = {colors:{primary:"#CA9D0C"}};
