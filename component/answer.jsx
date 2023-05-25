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

          <View style={{marginTop:300}}>
          {posts.map(post=><Text key={post.id}>{post.desc}</Text>)}
        </View>
    
        );

     
};

export default Post;