import React from 'react';
import {useEffect, useState, useRef} from 'react';

import auth from '@react-native-firebase/auth';
//import io.invertase.firebase.app.ReactNativeFirebaseAppPackage;
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

const Login = props => {
  const {navigation} = props;
  const [status, setStatus] = useState(true);
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');
  const input1 = useRef('');

  const showToast1 = () => {
    ToastAndroid.show('Invalid UserName', ToastAndroid.SHORT, ToastAndroid.TOP);
  };
  const showToast2 = () => {
    ToastAndroid.show(
      'Email ALready in use',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
  };
  const showToast3 = () => {
    ToastAndroid.show(
      'Password is not correct',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
  };

  // useEffect(() => {
  //   console.log('mount>>>>>>>>>>>');

  //   return () => {
  //     console.log('unmount>>>>>>>>>>>');
  //   };
  // }, []);
  const signin = () => {
    auth()
      .signInWithEmailAndPassword(email, passw)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.push('User');
      })
      .catch(error => {
        //  setStatus(false)
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          showToast2();
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');

          showToast1();
        }
        if (error.code === 'auth/wrong-password') {
          showToast3();
          console.log('Invalid password');
        }

        console.error(error);
      });
  };

  const signup = () => {
    auth()
      .createUserWithEmailAndPassword(email, passw)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.push('User');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          showToast2();
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          showToast1();
        }

        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>User Email</Text>
      <TextInput
        style={styles.input}
        placeholder="xyz@gmail.com"
        onChangeText={text => {
          setEmail(text);
        }}
        //  ref={input1}
      />
      <Text style={styles.label}>User Password</Text>
      <TextInput
        style={styles.input}
        placeholder="*****"
        onChangeText={text => {
          setPassw(text);
        }}
      />
      {status ? (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            signin();

            //
          }}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>SignIN</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            signup();
          }}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>SignUP</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.footer}>
        Dont Have an Account?
        {status ? (
          <Text style={{color: 'blue'}} onPress={() => setStatus(!status)}>
            SignUP
          </Text>
        ) : (
          <Text style={{color: 'blue'}} onPress={() => setStatus(!status)}>
            SignIN
          </Text>
        )}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    // height: 40,
    width: 300,
    borderColor: 'crimson',
    borderWidth: 1,
    padding: 20,
    fontSize: 20,
    marginLeft: 40,
    borderRadius: 20,
  },
  label: {
    fontSize: 30,
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    color: 'crimson',
  },
  btn: {
    backgroundColor: 'crimson',
    padding: 10,
    marginTop: 15,
    borderRadius: 20,
    marginLeft: 70,
    marginRight: 70,
  },
  container: {
    flex: 1,
    backgroundColor: '#E7E9EB',
    padding: 20,

    // alignItems: 'center',
  },
  footer: {
    margin: 10,
    textAlign: 'center',
    color: 'red',
    fontSize: 15,
  },
});

export default Login;
