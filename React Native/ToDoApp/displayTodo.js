import React from 'react';
import {useEffect, useState, useContext} from 'react';
import {FAB} from 'react-native-elements';
import CheckBox from '@react-native-community/checkbox';
import {TodoContext} from './contextDo';
import axios from 'axios';
//import {useRoute} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  useColorScheme,
  View,
} from 'react-native';

const Display = props => {
  const {list, setList} = useContext(TodoContext);
  const urilist = {...list};

  const {navigation} = props;

  const del = id => {
    setList(pre => pre.filter(items => items?.id !== id));
  };

  useEffect(() => {
    //  console.log('ggggggggg', list);
    axios
      // .post('http://127.0.0.1:4500/todo1', {...list})
      .get('http://10.0.2.2:4500/todo')

      .then(res => {
        console.log('MY>>>>>>>>>>>>MY', res.data);
        setList(res.data);
      })

      .catch(e => {
        console.log('error >>>>>>>>.   ', e);
      });
  }, []);

  const status = (val, item) => {
    var data = [...list];
    //  console.log('ddddddddddddd', data);
    data = data.map(itm => {
      if (itm === item) {
        return {...itm, checked: val};
      }
      return {...itm};
    });

    setList(data);
  };

  const update1 = (val, item) => {
    axios

      .post('http://10.0.2.2:4500/todo2', {
        checked: val,
        title: item.title,
      })

      .then(data => {})

      .catch(e => {
        console.log('error >>>>>>>>.   ', e);
      });
  };
  const delapi = id => {
    axios

      .post('http://10.0.2.2:4500/todo4', {
        uid: id,
      })

      .then(data => {})

      .catch(e => {
        console.log('error >>>>>>>>.   ', e);
      });
  };

  return (
    <View style={{flex: 1}}>
      <Text style={style2.head}>TASK</Text>

      <FlatList
        data={list}
        renderItem={({item, index}) => (
          <View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text
                style={style2.liststyle}
                onPress={e => {
                  navigation.navigate('C', {
                    name: item?.title,
                    uid: item?.id,
                  });
                }}>
                {item?.title}
              </Text>
              <Text
                style={style2.del}
                onPress={e => {
                  del(item.id);
                  delapi(item.id);
                }}>
                D
              </Text>

              <CheckBox
                value={item.checked}
                onValueChange={val => {
                  status(val, item);
                  update1(val, item);
                }}
                style={style2.check}
              />
            </View>
            <Text>
              {item.checked ? 'Status Completed' : 'Status Incompleted'}
            </Text>
          </View>
        )}
      />

      <FAB
        visible={true}
        title=">>>>"
        color="crimson"
        onPress={() => {
          navigation.push('B');
        }}
        style={style2.btn}
      />
    </View>
  );
};
const style2 = StyleSheet.create({
  head: {
    padding: 10,
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    backgroundColor: 'white',
  },
  liststyle: {
    fontSize: 20,
    backgroundColor: 'white',
    color: 'blueviolet',
    margin: 10,
    width: 250,
    padding: 20,
    borderRadius: 10,
  },
  btn: {padding: 10, color: 'red'},
  del: {
    fontSize: 20,
    backgroundColor: 'white',
    color: 'blueviolet',
    margin: 10,
    padding: 20,
    borderRadius: 10,
  },
  check: {
    fontSize: 20,
    backgroundColor: 'white',
    color: 'blueviolet',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    alignSelf: 'center',
    
  },
});

export default Display;
