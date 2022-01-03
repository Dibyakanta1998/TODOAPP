/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React, {useState, createContext} from 'react';

import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';

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
import Checkedlist from './checked1';
import {CountContext} from './countContext';

const Stack = createStackNavigator();

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider
      value={{
        count,
        setCount,
      }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Checked"
            component={Checkedlist}
            options={{title: `${count}/3`,headerTitleAlign:'center'
          
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CountContext.Provider>
  );
};

export default App;
