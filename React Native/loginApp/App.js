/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import Login from './Login';
import User from './Userpage';
//import fire from '@react-native-firebase/app';
//import auth from '@react-native-firebase/auth';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
const App = () => {
  // return <Login />;
  // return <User />;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login/Signup" screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Login/Signup" component={Login} />
        <Stack.Screen name="User" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
