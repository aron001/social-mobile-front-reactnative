
import React, {useState,useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image,TextInput} from 'react-native';
import { FriendsProfileData } from './database/database';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Ionic from 'react-native-vector-icons/Ionicons';

const Search = () => {
  const navigation = useNavigation();

 const [posts,setPosts]=useState([])
  
  
  useEffect(() => {
  const getData=()=>{
    fetch('http://10.161.148.38:3000/api/users/alluser')
    .then(response=>response.json())
    .then(data=>setPosts(data));
  }
  getData();
}, []);

  return (
    <View style=
    {{
      marginTop:'10%'
    }
  }>
    <View
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
      placeholder="Search"
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
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
        
          borderBottomWidth: 0.5,
          borderBottomColor: '#DEDEDE',
          padding: 10,
        }}>
        Search Freinds
      </Text>
      <ScrollView style={{margin: 10}} showsVerticalScrollIndicator={false}>
       
        <Text style={{fontWeight: 'bold', paddingVertical: 10}}>
          Suggestions for you
        </Text>
        <View>
        {posts.map(post=>
        
          //const [follow, setFollow] = useState(post.follow);
          //const [close, setClose] = useState(false);
      

            <View key={post._id}>
            
                <View
                  style={{
                    paddingVertical: 10,
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                  }}>

                    
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.push('FriendProfile', {
                          name: post.username,
                          profileImage: post.profilepicture,
                          //follow: follow,
                          post: post.posts,
                          followers: post.followers,
                          following: post.following,
                        })
                      }
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        maxWidth: '64%',
                      }}>
                      <Image
                       source={require('../storage/images/profile1.jpg')}
                       
                        style={{
                          width: 45,
                          height: 45,
                          borderRadius: 100,
                          marginRight: 10,
                        }}
                      />
                      <View style={{width: '100%'}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                          {post.username}
                        </Text>
                        <Text style={{fontSize: 12, opacity: 0.5}}>
                          {post.username}
                        </Text>
                        <Text style={{fontSize: 12, opacity: 0.5}}>
                          Sugggested for you
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  
                      <TouchableOpacity
                        //onPress={() => setFollow(!follow)}
                        style={{
                          width:  68,
                        }}>
                        <View
                          style={{
                            width: '100%',
                            height: 30,
                            borderRadius: 5,
                            backgroundColor:  '#3493D9',
                            borderWidth:  0,
                            borderColor: '#DEDEDE',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={{color:  'black'}}>
                            follow
                          </Text>
                        </View>
                      </TouchableOpacity>
                   
                    
                  </View>
                </View>
             
            </View>
         
        )}
        </View>
        <View style={{padding: 20}}>
          <Text style={{color: '#3493D9'}}>See all Suggetions</Text>
        </View>
      </ScrollView>
    </View></View>
  );
};

export default Search;