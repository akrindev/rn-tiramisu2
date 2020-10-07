import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

//import navigator
import { NavigationContainer } from '@react-navigation/native';
// import bottom tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import screens
import Home from './screens/Home';
import Search from './screens/Search';
import Tools from './screens/Tools';

const Tab = createBottomTabNavigator();

const BottomTab = () => (
    <Tab.Navigator
        initialRouteName="Home"
        showLabel={false}
    >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color}) => (
                  <Feather name="home" size={22} color={color} />
              )
          }}
        />
        <Tab.Screen 
          name="Search" 
          component={Search} 
          options={{
              tabBarLabel: "Search",
              tabBarIcon: ({ color}) => (
                  <Feather name="search" size={22} color={color} />
              )
          }}
        />
        <Tab.Screen 
          name="Tools" 
          component={Tools} 
          options={{
              tabBarLabel: "Tools",
              tabBarIcon: ({ color}) => (
                  <Feather name="more-vertical" size={22} color={color} />
              )
          }}

        />
    </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar style="light" hidden={false} translucent={false} />
        <BottomTab />
    </NavigationContainer>
  );
}

