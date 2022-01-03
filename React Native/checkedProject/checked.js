import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useEffect, useState} from 'react';
const Checkedlist = () => {
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);
  const [allselected, setAllselected] = useState(false);
  const [result, setResult] = useState(0);

  useEffect(() => {
    finalanswer();
  }, [isSelected3, isSelected1, isSelected2, allselected]);

  const finalanswer = () => {
    if (isSelected1 && isSelected2 && isSelected3) {
      setResult(3);
    } else if (
      (isSelected1 && isSelected2) ||
      (isSelected1 && isSelected3) ||
      (isSelected3 && isSelected2)
    ) {
      setResult(2);
    } else if (isSelected1 || isSelected2 || isSelected3) {
      setResult(1);
    } else {
      setResult(0);
    }
  };

  const answer1 = () => {
    setIsSelected1(!isSelected1);
  };
  const answer2 = () => {
    setIsSelected2(!isSelected2);
  };
  const answer3 = () => {
    setIsSelected3(!isSelected3);
  };
  const allselect = () => {
    setAllselected(!allselected);
    if (!allselected) {
      setIsSelected1(true);
      setIsSelected2(true);
      setIsSelected3(true);
    } else {
      setIsSelected1(false);
      setIsSelected2(false);
      setIsSelected3(false);
    }
  };

  return (
    <View>
      <CheckBox value={isSelected1} onValueChange={value => answer1(value)} />
      <CheckBox value={isSelected2} onValueChange={value => answer2(value)} />
      <CheckBox value={isSelected3} onValueChange={value => answer3(value)} />
      <Text>{result}</Text>
      <Text>
        <CheckBox
          value={allselected}
          onValueChange={() => {
            allselect();
          }}
        />
        SelectAll
      </Text>
    </View>
  );
};

export default Checkedlist;
