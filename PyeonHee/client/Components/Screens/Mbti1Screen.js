import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
const Mbti1Screen = () => {
  const [userID, setUserID] = useState('');

  useEffect(()=>{
    AsyncStorage.getItem('userID', (err, result) => {
      const tempID = result;
      if(tempID!= null){
        setUserID(tempID);
      }
    });
  })
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Mbti1: {userID}</Text>
    </View>
  )
}

export default Mbti1Screen;