import 'react-native-gesture-handler';

import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useEffect, useState} from 'react';
import {CountContext} from './countContext';

const Checkedlist = props => {
  const {count, setCount} = useContext(CountContext);
  //console.log('vvvvvv', props);
  //const [check,setCheck]=useState(false);
  var datas = [{id: 0}, {id: 1}, {id: 2}];

  datas = datas.map(item => ({...item, checked: false}));
  const [checkboxs, setcheckboxs] = useState(datas);
  //const [answer, setAnswer] = useState(0);
  const setValue = (value, index) => {
    var new_data = [...checkboxs];
    new_data[index].checked = value;

    if (value) {
      setCount(pre => pre + 1);
    } else {
      setCount(pre => pre - 1);
    }
    setcheckboxs(new_data);
  };
  return (
    <View>
      <FlatList
        data={checkboxs}
        renderItem={({item, index}) => {
          return (
            <CheckBox
              value={item.checked}
              id={item.id}
              onValueChange={val => setValue(val, index)}
            />
          );
        }}
      />
      {/* <Text>{count}</Text> */}
    </View>
  );
};

export default Checkedlist;
