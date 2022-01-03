import React, {useState} from 'react';
import {FlatList, Text, View, Button} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Listview = props => {
  const [datas, setData] = useState([
    {name: 'a', roll: '10', class: 'X'},
    {name: 'b', roll: '11', class: 'XII'},
    {name: 'c', roll: '12', class: 'XI'},
  ]);
  const [loading, setLoading] = useState(false);
  const {navigation} = props || {};

  return (
    <View style={{backgroundColor: 'yellow'}}>
      <FlatList
        style={{fontSize: 20}}
        data={datas}
        renderItem={({item}) => (
          <>
            <Text>{item.name}</Text>
            <Text>{item.roll}</Text>
            <Text>{item.class}</Text>
          </>
        )}
        keyExtractor={item => item.roll}
        onRefresh={() => {
          setLoading(true);
          setData([...datas, {name: 'abc', roll: '123', class: 'xii'}]);
          setLoading(false);
        }}
        refreshing={loading}
      />
      <Button
        title="Move to next Screen"
        onPress={() => navigation.navigate('profile')}
      />
    </View>
  );
};

export default Listview;

// {
//     data.map((item)=>(
//         <>
//     <Text style={{backgroundColor:"blueviolet"}}>{item.name}</Text>
//      <Text style={{backgroundColor:"beige"}}>{item.roll}</Text>
//      <Text style={{backgroundColor:"crimson"}}>{item.class}</Text>

//     </>

//     ))

//     }
