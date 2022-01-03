import React, {useContext, useState, useRoute} from 'react';
import {FAB} from 'react-native-elements';
import {TodoContext} from './contextDo';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {ListItem} from 'react-native-elements/dist/list/ListItem';

const Edit = props => {
  //const route = useRoute();
  const {list, setList} = useContext(TodoContext);
  const [val, setVal] = useState();
  const {navigation, route} = props;
  console.log('>>>>>>>>>>', route);
  const {name, uid} = route.params;
  const update = () => {
    setList(
      list.map(item => {
        if (item.id === uid) {
          return {...item, title: val};
        } else {
          return item;
        }
      }),
    );
  };
  return (
    <View style={{flex: 1}}>
      {/*  <Text>Edit</Text> */}
      <TextInput
        style={style3.input}
        defaultValue={name}
        onChangeText={text => {
          setVal(text);
        }}
        placeholder="Title....."
      />

      <FAB
        visible={true}
        title="SAVE"
        icon={{color: 'red'}}
        size="small"
        style={style3.btn3}
        onPress={() => {
          navigation.push('A');
          update();
        }}
      />
    </View>
  );
};

const style3 = StyleSheet.create({
  btn3: {position: 'absolute', right: 1, bottom: 1, margin: 20},
  input: {
    backgroundColor: 'skyblue',
    color: 'red',
    margin: 10,
    borderRadius: 10,
    padding: 15,
  },
});

export default Edit;
