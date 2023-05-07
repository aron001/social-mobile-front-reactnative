import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Platform,
    TextInput,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
const SignUpScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        
    });
    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    
    const handlePasswordChange = (val) => {
        
            setData({
                ...data,
                password: val,
               
            });
        } 
        const updateSecureTextEntry = () => {
            setData({
                ...data,
                secureTextEntry: !data.secureTextEntry
            });
        }
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#009387" barStyle="light
        "/>
     <View style={styles.header}>
        <Text style={styles.text_header}>Register Now</Text>
     </View>


     
    <Animatable.View
    animation="fadeIn"
    style={styles.footer}>

<Text style={styles.text_footer}>Name</Text>
        <View style={styles.action}>
            
        <FontAwesome name='user-o' color="#05375a" size={20}/>

    <TextInput placeholder='enter your name'
    style={styles.textInput}
    autoCapitalize='none'
    onChangeText={(val)=> textInputChange(val)}/>
    {data.check_textInputChange ?
    <Animatable.View
        animation="bounceIn">
    <Feather
    name='check-circle'
    color='green'
    size={20}

    /></Animatable.View>  
    : null}
        </View>

      <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
            
        <FontAwesome name='user-o' color="#05375a" size={20}/>

    <TextInput placeholder='enter your email'
    style={styles.textInput}
    autoCapitalize='none'
    onChangeText={(val)=> textInputChange(val)}/>
    {data.check_textInputChange ?
    <Animatable.View
        animation="bounceIn">
    <Feather
    name='check-circle'
    color='green'
    size={20}

    /></Animatable.View>  
    : null}
        </View>
        
        
        
        <Text style={styles.text_footer}>  Pasword</Text>
        <View style={styles.action}>
            
    <FontAwesome name='lock' color="#05375a" size={20}/>
    <TextInput placeholder='enter your password '
    secureTextEntry={data.secureTextEntry ? true : false}
    style={styles.textInput}
    autoCapitalize='none'
    onChangeText={(val)=> handlePasswordChange(val)}/>
    <TouchableOpacity  
    onPress={updateSecureTextEntry}>
    {data.secureTextEntry ?
    <Feather
    name='eye-off'
    color='grey'
    size={20}

    />
:
<Feather
    name='eye'
    color='grey'
    size={20}

    />}</TouchableOpacity>
        </View>
        <View style={styles.button}>
            <LinearGradient
            colors={['#08d4c4','#01ab9d']}
            style={styles.signIn}>
                <Text style={styles.textSign}>Sign Up</Text>
            </LinearGradient>
            <TouchableOpacity
                    onPress={() => navigation.navigate('SignInScreen')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign In</Text>
                </TouchableOpacity>
        </View>
            </Animatable.View>
        
        </View>
    );
    };
    export default SignUpScreen;

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
