import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, StyleSheet, Button} from 'react-native';

const Profile = ({name, number, navigation}) => {
  // const {name,number}=props
  return (
    <View style={styles.myColor}>
      <Text style={styles.myView}>{name}</Text>
      <Text>{number} </Text>
      <Button
        title="Move to next Screen"
        onPress={() => navigation.navigate('Listview')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  myView: {
    backgroundColor: 'red',
    margin: 2,
  },
  myColor: {
    padding: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
});
export default Profile;
