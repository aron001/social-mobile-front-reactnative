import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import RootStackScreen from "./component/rootstackscreen";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Bottomtab from "./component/bottomtab";
const Stack = createStackNavigator();

const App = ({ navigation }) => {
  const [isloggedin, setLogged] = useState(null);

  const detectLogin = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  };
  useEffect(() => {
    detectLogin();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="RootStackScreen" component={RootStackScreen} />
        <Stack.Screen name="Bottomtab" component={Bottomtab} />
      </Stack.Navigator>
    </NavigationContainer>

    //<Bottomtab/>
    /*<NavigationContainer>
                                                        <Drawer.Navigator>
                                                          <Drawer.Screen name="Home" component={Bottomtab} />
                                                          <Drawer.Screen name="quation" component={Quation} />
                                                        </Drawer.Navigator></NavigationContainer>
                                                    */

    /* <NavigationContainer>
                                                     <Tab.Navigator
                                                         initialRouteName="Feed"
                                                         activeColor="#e91e63"
                                                         barStyle={{ backgroundColor: 'green' }}
                                                       >
                                                     <Tab.Screen name="quaton" component={Quation} options={{
                                                             tabBarLabel: 'Home',
                                                             tabBarIcon: ({ color }) => (
                                                               <MaterialCommunityIcons name="home" color={color} size={26} />
                                                             ),
                                                           }}/>
                                                         <Tab.Screen name="Settingscreen" component={Settingscreen} options={{
                                                             tabBarLabel: 'Updates',
                                                             tabBarIcon: ({ color }) => (
                                                               <MaterialCommunityIcons name="bell" color={color} size={26} />
                                                             ),
                                                           }} />
                                                           <Tab.Screen name="create post" component={CreatePost} options={{
                                                             tabBarLabel: 'Post',
                                                             tabBarIcon: ({ color }) => (
                                                               <MaterialCommunityIcons name="plus" color={color} size={26} />
                                                             ),
                                                           }} />
                                                           <Tab.Screen name="timeline post" component={Timelinepost} options={{
                                                             tabBarLabel: 'timeline',
                                                             tabBarIcon: ({ color }) => (
                                                               <MaterialCommunityIcons name="plus" color={color} size={26} />
                                                             ),
                                                           }} />
                                                       </Tab.Navigator>
                                                       </NavigationContainer>
                                                       */
    /*
                                                    <NavigationContainer>
                                                      <Drawer.Navigator >
                                                        <Drawer.Screen name="Settingscreen" component={Settingscreen}/>
                                                      </Drawer.Navigator>
                                                    </NavigationContainer>*/
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
