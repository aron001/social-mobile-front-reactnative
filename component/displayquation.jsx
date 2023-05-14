import React, {useState} from 'react';
import {View, Text, Image,ScrollView, TouchableOpacity, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Quation from './quation';
const Displayquation = () => {

  const postInfo = [
    {
      postTitle: 'visit sheger',
      postPersonImage: require('../storage/images/userProfile.png'),
      postImage: require('../storage/images/post4.jpg'),
      likes: 765,
      isLiked: false,
    },
    {
        postTitle: 'visit bahirdar',
        postPersonImage: require('../storage/images/profile2.jpg'),
        postImage: require('../storage/images/post5.jpg'),
        likes: 765,
        isLiked: false,
      },
      {
        postTitle: 'visit bahirdar',
        postPersonImage: require('../storage/images/profile2.jpg'),
        postImage: require('../storage/images/post5.jpg'),
        likes: 765,
        isLiked: false,
      }]
      return (
       <View>
  
  {postInfo.map((data, index) => {
    const [like, setLike] = useState(data.isLiked);
    return (
    
      <View
        key={index}
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
              source={data.postPersonImage}
              style={{width: 40, height: 40, borderRadius: 100}}
            />
            <View style={{paddingLeft: 5}}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                {data.postTitle}
              </Text>
            </View>
          </View>
          <Feather name="more-vertical" style={{fontSize: 20}} />
        </View>
        <View
          style={{
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={data.postImage}
            style={{width: '100%', height: 200}}
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
                name={like ? 'heart' : 'hearto'}
                style={{
                  paddingRight: 10,
                  fontSize: 20,
                  color: like ? 'red' : 'black',
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
            Liked by {like ? 'you and' : ''}{' '}
            {like ? data.likes + 1 : data.likes} others
          </Text>
          
          
        </View>
      </View>
    );
  })}
</View>
  );
};

export default Displayquation;
