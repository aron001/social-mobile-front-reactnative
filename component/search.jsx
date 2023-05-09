
import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image,TextInput} from 'react-native';
import { FriendsProfileData } from './database/database';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Ionic from 'react-native-vector-icons/Ionicons';

const Search = () => {
  const navigation = useNavigation();
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
        {FriendsProfileData.slice(2.13).map((data, index) => {
          const [follow, setFollow] = useState(data.follow);
          const [close, setClose] = useState(false);
          return (

            <View key={index}>
              {close ? null : (
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
                          name: data.name,
                          profileImage: data.profileImage,
                          follow: follow,
                          post: data.posts,
                          followers: data.followers,
                          following: data.following,
                        })
                      }
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        maxWidth: '64%',
                      }}>
                      <Image
                        source={data.profileImage}
                        style={{
                          width: 45,
                          height: 45,
                          borderRadius: 100,
                          marginRight: 10,
                        }}
                      />
                      <View style={{width: '100%'}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                          {data.name}
                        </Text>
                        <Text style={{fontSize: 12, opacity: 0.5}}>
                          {data.accountName}
                        </Text>
                        <Text style={{fontSize: 12, opacity: 0.5}}>
                          Sugggested for you
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {follow ? (
                      <TouchableOpacity
                        onPress={() => setFollow(!follow)}
                        style={{
                          width: follow ? 90 : 68,
                        }}>
                        <View
                          style={{
                            width: '100%',
                            height: 30,
                            borderRadius: 5,
                            backgroundColor: follow ? null : '#3493D9',
                            borderWidth: follow ? 1 : 0,
                            borderColor: '#DEDEDE',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={{color: follow ? 'black' : 'white'}}>
                            {follow ? 'following' : 'follow'}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ) : (
                      <>
                        <TouchableOpacity
                          onPress={() => setFollow(!follow)}
                          style={{
                            width: follow ? 90 : 68,
                          }}>
                          <View
                            style={{
                              width: '100%',
                              height: 30,
                              borderRadius: 5,
                              backgroundColor: follow ? null : '#3493D9',
                              borderWidth: follow ? 1 : 0,
                              borderColor: '#DEDEDE',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Text style={{color: follow ? 'black' : 'white'}}>
                              {follow ? 'following' : 'follow'}
                            </Text>
                          </View>
                        </TouchableOpacity>
                        
                      </>
                    )}
                  </View>
                </View>
              )}
            </View>
          );
        })}
        <View style={{padding: 20}}>
          <Text style={{color: '#3493D9'}}>See all Suggetions</Text>
        </View>
      </ScrollView>
    </View></View>
  );
};

export default Search;