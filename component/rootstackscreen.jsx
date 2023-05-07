import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from "./splashScreen";
import SignInScreen from './signinscreen';
import SignUpScreen from './signupscreen';
import Createpost from './createpost';
const RootStack = createStackNavigator();
const RootStackScreen = () => {
    return (
      <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="Createpost" component={Createpost}/>
    </RootStack.Navigator>
    );
  };

export default RootStackScreen;