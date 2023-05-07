import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './home';
import Quation from './quation';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Quation" component={Quation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}