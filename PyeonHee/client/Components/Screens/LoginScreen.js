import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginButton from '../Buttons/LoginButton';
import JoinButton from '../Buttons/JoinButton';
import { Root, Popup } from 'react-native-popup-confirm-toast';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';

const CheckRemember = (props) => {          //remember id component
    const sendRememberCheck=()=>{
        props.getRememberCheck(!(props.rememberCheck));
    }
    return(
        <TouchableOpacity onPress={sendRememberCheck}>
            <Text>{props.rememberCheck ? <Icon name="checkmark-circle-outline" size={20}></Icon> : <Icon name="ellipse-outline" size={20}></Icon>} 아이디 기억하기</Text>
        </TouchableOpacity>
    );
};

const LoginScreen = ({navigation}) => {
    const [url, setUrl] = useState('');
    const [rememberCheck, setRememberCheck] = useState(false);
    const getRememberCheck=(rememberCheck)=>{
      setRememberCheck(rememberCheck);
    }
    const [userID, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    
    useEffect(()=>{
      AsyncStorage.getItem('url', (err, result) => {
        let tempUrl = result;
        if(tempUrl!= null){
          setUrl(tempUrl);
        }
    });
    },[]);
    const handleSubmitButton = () => {
      //console.log(`${url}/login`);
      if(!userID){
        Popup.show({
          type: 'success',
          textBody: '아이디를 입력해주세요.',
          buttonText: '확인',
          okButtonStyle: {backgroundColor: '#0000CD'},
          iconEnabled: false,
          callback: () => Popup.hide()
        })
        return;
      }
      if(!userPassword){
        Popup.show({
          type: 'success',
          textBody: '비밀번호를 입력해주세요.',
          buttonText: '확인',
          okButtonStyle: {backgroundColor: '#0000CD'},
          iconEnabled: false,
          callback: () => Popup.hide()
        })
        return;
      }
      AsyncStorage.setItem('userID', userID); 
      //navigation.replace('Survey');           //for survey test
      navigation.replace('Main');             //for Main test
      // navigation.replace('BudgetList');         //for BudgetList test
      /*
      fetch(`${url}/login`, {
        method: 'POST',
        body: JSON.stringify({
          userID: userID,
          userPassword: userPassword,
          rememberCheck: rememberCheck,
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json',
        },
      })
      .then((response)=>response.json())
      .then((responseJson)=>{
        console.log(responseJson);
        if(responseJson.status === 'success'){
          AsyncStorage.setItem('userID', userID);
          console.log(userID, '저장');
          if(responseJson.userMbti === null){
            navigation.replace('Survey');
          }else{
            navigation.replace('Main');
          }
        }else{
          Popup.show({
            type: 'success',
            textBody: '아이디 또는 비밀번호를 다시 확인해주세요.',
            buttonText: '확인',
            okButtonStyle: {backgroundColor: '#0000CD'},
            iconEnabled: false,
            callback: () => Popup.hide()
          })
          console.log('Check id or password');
        }
      })
      .catch((error)=>{
        console.error(error);
      })*/
    }
    return(         //login view
      <Root>
      <KeyboardAvoidingView style={styles.appSize}>
        <View style={styles.appLogoHeaderDiv}>
          <Text style={styles.logoPyeon}>편히</Text>
          <Text style={styles.logoKa}>가계</Text> 
        </View>
        <View style={styles.appBody}>
          <View style={styles.appInnerBody}>
            <TextInput 
              style={styles.textInputDesign}
              placeholder='아이디'
              onChangeText={(userID) => setUserId(userID)}
              maxLength ={20}
            />
            <TextInput
              secureTextEntry={true}
              style={styles.textInputDesign}
              placeholder='비밀번호'
              onChangeText={(userPassword) => setUserPassword(userPassword)}
              maxLength = {20}
            />
            <View style={styles.checkPosition}>
              <CheckRemember rememberCheck={rememberCheck} getRememberCheck={getRememberCheck}/>
            </View>
          </View>
          <View style={styles.appFooter}>
            <View style={styles.appInnerFooter}>
              <LoginButton onPress={handleSubmitButton}/>
              <JoinButton onPress={()=>navigation.navigate('Iamport')}/>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
      </Root>
    );
};
const styles = StyleSheet.create({
    appSize: {
        flex: 1,
    },
    appLogoHeaderDiv: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
    },
    logoPyeon:{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#0000CD',
    },
    logoKa:{
        fontSize: 40,
        fontWeight: 'bold',
        color: 'gray',
    },
    appInnerBody: {
        flex: 1,
        alignItems: 'center',
    },
    appBody: {
        flex: 2,
    },
    checkPosition: {
        flexDirection: 'row',
        width: 240,
        marginTop: 10,
    },
    appFooter: {
        marginTop: 30,
        flex: 2,
        alignItems: 'center',
    },
    appInnerFooter: {
        justifyContent: 'flex-start',
        flex: 0.5,
    },
    textInputDesign: {
        marginTop: 5,
        marginBottom: 5,
        paddingHorizontal: 10,
        height: 40,
        width: 250,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: '#DCDCDC',
    },
});

export default LoginScreen;