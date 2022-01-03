import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useRef} from 'react';
const User = props => {
  const {navigation, input1} = props;
  const signout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');

        navigation.push('Login/Signup');
      })
      .catch(e => {
        //  navigation.navigate('Login/Signup');
      });
  };
  // const input1 = useRef('');

  return (
    <View style={{flex: 1}}>
      <Text style={stylees.name}>Welcome User!!!</Text>

      <View style={{flex: 1, justifyContent: 'center'}}>
        <TouchableOpacity
          style={stylees.btnn}
          onPress={() => {
            //  setEmail('');
            //  setPassw('');

            signout();
            console.log('>>>>>>>>>>>>>>', input1);
            // input1.clear();
          }}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>LogOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const stylees = StyleSheet.create({
  name: {
    textAlign: 'center',
    fontSize: 30,
    padding: 20,
    marginTop: 5,
    color: 'blueviolet',
  },
  btnn: {
    backgroundColor: 'crimson',
    padding: 10,
    marginTop: 15,
    borderRadius: 20,
    marginLeft: 70,
    marginRight: 70,
  },
});
export default User;
