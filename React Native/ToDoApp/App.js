/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState, useContext} from 'react';
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
import Display from './displayTodo';
import Input from './inputTodo';
import {TodoContext} from './contextDo';
import Edit from './edit';
const Stack = createNativeStackNavigator();

const App = () => {
  //
  const [list, setList] = useState([]);
  

  return (
    <TodoContext.Provider
      value={{
        list,
        setList,
        
      }}>
      {/* <ScrollView style={{flex:1}}> */}
      <View
        style={{
          flex: 1,
          backgroundColor: 'beige',
        }}>
        <Text style={{textAlign: 'center', fontSize: 30, color: 'crimson'}}>
          TODO LIST
        </Text>

        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="A" component={Display} />
            <Stack.Screen name="B" component={Input} />
            <Stack.Screen name="C" component={Edit} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
      {/* </ScrollView> */}
    </TodoContext.Provider>
  );
};

export default App;
