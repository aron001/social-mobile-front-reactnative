import React,{useState} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Platform,
    TextInput,
    Image,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
const SignInScreen = (props) => {
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('')
    
    const sendCred = async (props)=>{
        fetch("http://10.161.148.38:3000/api/auth/login",{
          method:"POST",
          headers: {
           'Content-Type': 'application/json'
         },
         body:JSON.stringify({
           "email":email,
           "password":password
         })
        })
        .then(res=>res.json())
        .then(async (data)=>{
               try {
                 await AsyncStorage.setItem('token',data.token)
                 props.navigation.replace("Bottomtab")
               } catch (e) {
                 console.log("error hai",e)
                  
               }
        })
     }
    
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#009387" barStyle="light
        "/>
     <View style={styles.header}>
        <Text style={styles.text_header}>Welcome</Text>
     </View>
    <Animatable.View
    animation="fadeIn"
    style={styles.footer}>
      <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
            
        <FontAwesome name='user-o' color="#05375a" size={20}/>

    <TextInput placeholder='your email'
    style={styles.textInput}
    autoCapitalize='none'
    value={email}
    onChangeText={(text)=>setEmail(text)}
    />
    
    <Animatable.View
        animation="bounceIn">
    <Feather
    name='check-circle'
    color='green'
    size={20}

    /></Animatable.View>  
    
        </View>
        
        
        
        <Text style={styles.text_footer}>  Pasword</Text>
        <View style={styles.action}>
            
    <FontAwesome name='lock' color="#05375a" size={20}/>
    <TextInput placeholder='enter your password '
    
    style={styles.textInput}
    autoCapitalize='none'
    value={password}
    onChangeText={(text)=>{setPassword(text)}}/>
    <TouchableOpacity  
    >
    
    <Feather
    name='eye-off'
    color='grey'
    size={20}

    />

<Feather
    name='eye'
    color='grey'
    size={20}

    /></TouchableOpacity>
        </View>
        <View style={styles.button}>
            <TouchableOpacity onPress={() => sendCred(props)}>
            <LinearGradient
            colors={['#08d4c4','#01ab9d']}
            style={styles.signIn}>
                <Text style={styles.textSign}>Sign In</Text>
            </LinearGradient></TouchableOpacity>
            <TouchableOpacity
                    onPress={()=>props.navigation.replace("SignUpScreen")}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign Up</Text>
                </TouchableOpacity>
        </View>
            </Animatable.View>
        
        </View>
    );
    };
    export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        marginTop:35
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#fff'
    }
  });
