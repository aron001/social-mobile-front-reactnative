import React, {useState,useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import client from '../api/client';
import axios from 'axios';
const Post = () => {
  
  const [posts,setPosts]=useState([])
  
  
  useEffect(() => {
  const getData=()=>{
    fetch('http://10.161.148.38:3000/api/posts//fetchallPosts')
    .then(response=>response.json())
    .then(data=>setPosts(data));
  }
  getData();
}, []);


        return (

          /*<View style={{marginTop:300}}>
          {posts.map(post=><Text key={post.id}>{post.desc}</Text>)}
        </View>*/
        <View>
      
      {posts.map(post=>
          <View
            key={post.id}
            style={{
              paddingBottom: 10,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../storage/images/profile2.jpg')}
                  style={{width: 40, height: 40, borderRadius: 100}}
                />
                <View style={{paddingLeft: 5}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                    {post.desc}
                  </Text>
                </View>
              </View>
             
            </View>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../storage/images/post4.jpg')}
                style={{width: '100%', height: 400}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 12,
                paddingVertical: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => setLike(!like)}>
                  <AntDesign
                    name= 'heart' 
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: 'black' 
                    }}
                  />
                </TouchableOpacity>
         
                <TouchableOpacity>
                  <Feather name="navigation" style={{fontSize: 20}} />
                </TouchableOpacity>
              </View>
          
            </View>
            <View style={{paddingHorizontal: 15}}>
              <Text>
                Liked by  others
              </Text>
             
         
            </View>
          </View>
     )}
    </View>
    
        );

     
};

export default Post;