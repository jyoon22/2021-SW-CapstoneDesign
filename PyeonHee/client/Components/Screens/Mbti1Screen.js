import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import MbtiNextButton from '../Buttons/MbtiNextButton';
import MbtiPrevButton from '../Buttons/MbtiPrevButton';
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
const Mbti1Screen = ({navigation, route}) => {
  const [userID, setUserID] = useState('');

  const [mbti1_1_1, setMbti1_1_1] = useState(false);
  const [mbti1_1_2, setMbti1_1_2] = useState(false);
  const [mbti1_1_3, setMbti1_1_3] = useState(false);
  const [mbti1_1_4, setMbti1_1_4] = useState(false);
  const [mbti1_1_5, setMbti1_1_5] = useState(false);

  const [mbti1_2_1, setMbti1_2_1] = useState(false);
  const [mbti1_2_2, setMbti1_2_2] = useState(false);
  const [mbti1_2_3, setMbti1_2_3] = useState(false);
  const [mbti1_2_4, setMbti1_2_4] = useState(false);
  const [mbti1_2_5, setMbti1_2_5] = useState(false);

  const [mbti1_3_1, setMbti1_3_1] = useState(false);
  const [mbti1_3_2, setMbti1_3_2] = useState(false);
  const [mbti1_3_3, setMbti1_3_3] = useState(false);
  const [mbti1_3_4, setMbti1_3_4] = useState(false);
  const [mbti1_3_5, setMbti1_3_5] = useState(false);

  const [mbti1_4_1, setMbti1_4_1] = useState(false);
  const [mbti1_4_2, setMbti1_4_2] = useState(false);
  const [mbti1_4_3, setMbti1_4_3] = useState(false);
  const [mbti1_4_4, setMbti1_4_4] = useState(false);
  const [mbti1_4_5, setMbti1_4_5] = useState(false);

  const check1_1_1=()=>{
    if(mbti1_1_1 === false){
      setMbti1_1_1(!mbti1_1_1);
      setMbti1_1_2(false);
      setMbti1_1_3(false);
      setMbti1_1_4(false);
      setMbti1_1_5(false);
    }
    else{
      setMbti1_1_1(!mbti1_1_1);
    }
  }
  const check1_1_2=()=>{
    if(mbti1_1_2 === false){
      setMbti1_1_2(!mbti1_1_2);
      setMbti1_1_1(false);
      setMbti1_1_3(false);
      setMbti1_1_4(false);
      setMbti1_1_5(false);
    }
    else{
      setMbti1_1_2(!mbti1_1_2);
    }
  }
  const check1_1_3=()=>{
    if(mbti1_1_3 === false){
      setMbti1_1_3(!mbti1_1_3);
      setMbti1_1_1(false);
      setMbti1_1_2(false);
      setMbti1_1_4(false);
      setMbti1_1_5(false);
    }
    else{
      setMbti1_1_3(!mbti1_1_3);
    }
  }
  const check1_1_4=()=>{
    if(mbti1_1_4 === false){
      setMbti1_1_4(!mbti1_1_4);
      setMbti1_1_1(false);
      setMbti1_1_3(false);
      setMbti1_1_2(false);
      setMbti1_1_5(false);
    }
    else{
      setMbti1_1_4(!mbti1_1_4);
    }
  }
  const check1_1_5=()=>{
    if(mbti1_1_5 === false){
      setMbti1_1_5(!mbti1_1_5);
      setMbti1_1_1(false);
      setMbti1_1_3(false);
      setMbti1_1_4(false);
      setMbti1_1_2(false);
    }
    else{
      setMbti1_1_5(!mbti1_1_5);
    }
  }

  const check1_2_1=()=>{
    if(mbti1_2_1 === false){
      setMbti1_2_1(!mbti1_2_1);
      setMbti1_2_2(false);
      setMbti1_2_3(false);
      setMbti1_2_4(false);
      setMbti1_2_5(false);
    }
    else{
      setMbti1_2_1(!mbti1_2_1);
    }
  }
  const check1_2_2=()=>{
    if(mbti1_2_2 === false){
      setMbti1_2_2(!mbti1_2_2);
      setMbti1_2_1(false);
      setMbti1_2_3(false);
      setMbti1_2_4(false);
      setMbti1_2_5(false);
    }
    else{
      setMbti1_2_2(!mbti1_2_2);
    }
  }
  const check1_2_3=()=>{
    if(mbti1_2_3 === false){
      setMbti1_2_3(!mbti1_2_3);
      setMbti1_2_1(false);
      setMbti1_2_2(false);
      setMbti1_2_4(false);
      setMbti1_2_5(false);
    }
    else{
      setMbti1_2_3(!mbti1_2_3);
    }
  }
  const check1_2_4=()=>{
    if(mbti1_2_4 === false){
      setMbti1_2_4(!mbti1_2_4);
      setMbti1_2_1(false);
      setMbti1_2_3(false);
      setMbti1_2_2(false);
      setMbti1_2_5(false);
    }
    else{
      setMbti1_2_4(!mbti1_2_4);
    }
  }
  const check1_2_5=()=>{
    if(mbti1_2_5 === false){
      setMbti1_2_5(!mbti1_2_5);
      setMbti1_2_1(false);
      setMbti1_2_3(false);
      setMbti1_2_4(false);
      setMbti1_2_2(false);
    }
    else{
      setMbti1_2_5(!mbti1_2_5);
    }
  }

  const check1_3_1=()=>{
    if(mbti1_3_1 === false){
      setMbti1_3_1(!mbti1_3_1);
      setMbti1_3_2(false);
      setMbti1_3_3(false);
      setMbti1_3_4(false);
      setMbti1_3_5(false);
    }
    else{
      setMbti1_3_1(!mbti1_3_1);
    }
  }
  const check1_3_2=()=>{
    if(mbti1_3_2 === false){
      setMbti1_3_2(!mbti1_3_2);
      setMbti1_3_1(false);
      setMbti1_3_3(false);
      setMbti1_3_4(false);
      setMbti1_3_5(false);
    }
    else{
      setMbti1_3_2(!mbti1_3_2);
    }
  }
  const check1_3_3=()=>{
    if(mbti1_3_3 === false){
      setMbti1_3_3(!mbti1_3_3);
      setMbti1_3_1(false);
      setMbti1_3_2(false);
      setMbti1_3_4(false);
      setMbti1_3_5(false);
    }
    else{
      setMbti1_3_3(!mbti1_3_3);
    }
  }
  const check1_3_4=()=>{
    if(mbti1_3_4 === false){
      setMbti1_3_4(!mbti1_3_4);
      setMbti1_3_1(false);
      setMbti1_3_3(false);
      setMbti1_3_2(false);
      setMbti1_3_5(false);
    }
    else{
      setMbti1_3_4(!mbti1_3_4);
    }
  }
  const check1_3_5=()=>{
    if(mbti1_3_5 === false){
      setMbti1_3_5(!mbti1_3_5);
      setMbti1_3_1(false);
      setMbti1_3_3(false);
      setMbti1_3_4(false);
      setMbti1_3_2(false);
    }
    else{
      setMbti1_3_5(!mbti1_3_5);
    }
  }

  const check1_4_1=()=>{
    if(mbti1_4_1 === false){
      setMbti1_4_1(!mbti1_4_1);
      setMbti1_4_2(false);
      setMbti1_4_3(false);
      setMbti1_4_4(false);
      setMbti1_4_5(false);
    }
    else{
      setMbti1_4_1(!mbti1_4_1);
    }
  }
  const check1_4_2=()=>{
    if(mbti1_4_2 === false){
      setMbti1_4_2(!mbti1_4_2);
      setMbti1_4_1(false);
      setMbti1_4_3(false);
      setMbti1_4_4(false);
      setMbti1_4_5(false);
    }
    else{
      setMbti1_4_2(!mbti1_4_2);
    }
  }
  const check1_4_3=()=>{
    if(mbti1_4_3 === false){
      setMbti1_4_3(!mbti1_4_3);
      setMbti1_4_1(false);
      setMbti1_4_2(false);
      setMbti1_4_4(false);
      setMbti1_4_5(false);
    }
    else{
      setMbti1_4_3(!mbti1_4_3);
    }
  }
  const check1_4_4=()=>{
    if(mbti1_4_4 === false){
      setMbti1_4_4(!mbti1_4_4);
      setMbti1_4_1(false);
      setMbti1_4_3(false);
      setMbti1_4_2(false);
      setMbti1_4_5(false);
    }
    else{
      setMbti1_4_4(!mbti1_4_4);
    }
  }
  const check1_4_5=()=>{
    if(mbti1_4_5 === false){
      setMbti1_4_5(!mbti1_4_5);
      setMbti1_4_1(false);
      setMbti1_4_3(false);
      setMbti1_4_4(false);
      setMbti1_4_2(false);
    }
    else{
      setMbti1_4_5(!mbti1_4_5);
    }
  }

  const handleSubmitButton = () => {
    if(mbti1_1_1 === false && mbti1_1_2 === false && mbti1_1_3 === false && mbti1_1_4 === false && mbti1_1_5 === false){
      alert('체크 안 된 문항이 있습니다.');
      return;
    }
    if(mbti1_2_1 === false && mbti1_2_2 === false && mbti1_2_3 === false && mbti1_2_4 === false && mbti1_2_5 === false){
      alert('체크 안 된 문항이 있습니다.');
      return;
    }
    if(mbti1_3_1 === false && mbti1_3_2 === false && mbti1_3_3 === false && mbti1_3_4 === false && mbti1_3_5 === false){
      alert('체크 안 된 문항이 있습니다.');
      return;
    }
    if(mbti1_4_1 === false && mbti1_4_2 === false && mbti1_4_3 === false && mbti1_4_4 === false && mbti1_4_5 === false){
      alert('체크 안 된 문항이 있습니다.');
      return;
    }

    let totalScore = 0;

    const promise = new Promise((res, rej) => {
      if(mbti1_1_2 === true){
        totalScore=totalScore+5;
      }else if(mbti1_1_3 === true){
        totalScore=totalScore+13;
      }else if(mbti1_1_4 === true){
        totalScore=totalScore+20;
      }else if(mbti1_1_5 === true){
        totalScore=totalScore+25;
      }
  
      if(mbti1_2_1 === true){
        totalScore=totalScore+25;
      }else if(mbti1_2_2 === true){
        totalScore=totalScore+20;
      }else if(mbti1_2_3 === true){
        totalScore=totalScore+13;
      }else if(mbti1_2_4 === true){
        totalScore=totalScore+5;
      }
  
      if(mbti1_3_2 === true){
        totalScore=totalScore+5;
      }else if(mbti1_3_3 === true){
        totalScore=totalScore+13;
      }else if(mbti1_3_4 === true){
        totalScore=totalScore+20;
      }else if(mbti1_3_5 === true){
        totalScore=totalScore+25;
      }
  
      if(mbti1_4_1 === true){
        totalScore=totalScore+25;
      }else if(mbti1_4_2 === true){
        totalScore=totalScore+20;
      }else if(mbti1_4_3 === true){
        totalScore=totalScore+13;
      }else if(mbti1_4_4 === true){
        totalScore=totalScore+5;
      }

      setTimeout(()=> {
        res(totalScore);
      }, 500);
    })

    promise.then(value => {
      console.log('총합');
      console.log(totalScore);

      navigation.navigate('Mbti2',{
        userMonthlyIncome: route.params.userMonthlyIncome,
        userFixedExpense: route.params.userFixedExpense,
        userSavings: route.params.userSavings,
        mbti1Score: totalScore,
      });
    })
  }
  useEffect(()=>{
    AsyncStorage.getItem('userID', (err, result) => {
      const tempID = result;
      if(tempID!= null){
        setUserID(tempID);
      }
    });
  })
  return (
    <View style={styles.appSize}>
      <View style={styles.appTopBar}>
        <View style={styles.barTop}>
          <Text style={styles.logoBbti}>소비 성향 MBTI 테스트</Text>
        </View>
        <View style={styles.barBottom}>
          <View style={styles.blueCircle}><Text style={styles.fontInCircle}>1</Text></View>
          <View style={styles.line}></View>
          <View style={styles.grayCircle}><Text style={styles.fontInCircle}>2</Text></View>
          <View style={styles.line}></View>
          <View style={styles.grayCircle}><Text style={styles.fontInCircle}>3</Text></View>
          <View style={styles.line}></View>
          <View style={styles.grayCircle}><Text style={styles.fontInCircle}>4</Text></View>
        </View>
      </View>
      <ScrollView style={styles.appBody}>
        <View style={styles.questionBox}>
          <View style={styles.questionName}><Text style={styles.questionNameStyle}>질문1</Text></View>
          <View><Text style={styles.questionTitleStyle}>광고를 보고 물건을 구매한 적이 많다.</Text></View>
          <View style={styles.questionInnerBox}>
            <TouchableOpacity onPress={check1_1_1}>
              {mbti1_1_1 ? <View style={styles.answerCircle1_yes} /> : <View style={styles.answerCircle1_no} />}
            </TouchableOpacity>
            <TouchableOpacity style={styles.difDiv} onPress={check1_1_2}>
              {mbti1_1_2 ? <View style={styles.answerCircle2_yes} /> : <View style={styles.answerCircle2_no} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={check1_1_3}>
              {mbti1_1_3 ? <View style={styles.answerCircle3_yes} /> : <View style={styles.answerCircle3_no} />}
            </TouchableOpacity>
            <TouchableOpacity style={styles.difDiv} onPress={check1_1_4}>
              {mbti1_1_4 ? <View style={styles.answerCircle2_yes} /> : <View style={styles.answerCircle2_no} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={check1_1_5}>
              {mbti1_1_5 ? <View style={styles.answerCircle1_yes} /> : <View style={styles.answerCircle1_no} />}
            </TouchableOpacity>
          </View>
          <View style={styles.questionInnerBox}> 
            <Text style={styles.answerText}>매우아니다          아니다         보통이다         그렇다          매우그렇다</Text> 
          </View>
        </View>
        <View style={styles.questionBox}>
          <View style={styles.questionName}><Text style={styles.questionNameStyle}>질문2</Text></View>
            <View><Text style={styles.questionTitleStyle}>한 달 동안 돈을 어디에 쓸 것인지 계획한다.</Text></View>
            <View style={styles.questionInnerBox}>
              <TouchableOpacity onPress={check1_2_1}>
                {mbti1_2_1 ? <View style={styles.answerCircle1_yes} /> : <View style={styles.answerCircle1_no} />}
              </TouchableOpacity>
              <TouchableOpacity style={styles.difDiv} onPress={check1_2_2}>
                {mbti1_2_2 ? <View style={styles.answerCircle2_yes} /> : <View style={styles.answerCircle2_no} />}
              </TouchableOpacity>
              <TouchableOpacity onPress={check1_2_3}>
                {mbti1_2_3 ? <View style={styles.answerCircle3_yes} /> : <View style={styles.answerCircle3_no} />}
              </TouchableOpacity>
              <TouchableOpacity style={styles.difDiv} onPress={check1_2_4}>
                {mbti1_2_4 ? <View style={styles.answerCircle2_yes} /> : <View style={styles.answerCircle2_no} />}
              </TouchableOpacity>
              <TouchableOpacity onPress={check1_2_5}>
                {mbti1_2_5 ? <View style={styles.answerCircle1_yes} /> : <View style={styles.answerCircle1_no} />}
              </TouchableOpacity>
            </View>
          <View style={styles.questionInnerBox}> 
            <Text style={styles.answerText}>매우아니다          아니다         보통이다         그렇다          매우그렇다</Text> 
          </View>
        </View>
        <View style={styles.questionBox}>
        <View style={styles.questionName}><Text style={styles.questionNameStyle}>질문3</Text></View>
          <View><Text style={styles.questionTitleStyle}>우연히 좋은 물건을 보게 된다면 당장 사야한다.</Text></View>
          <View style={styles.questionInnerBox}>
            <TouchableOpacity onPress={check1_3_1}>
              {mbti1_3_1 ? <View style={styles.answerCircle1_yes} /> : <View style={styles.answerCircle1_no} />}
            </TouchableOpacity>
            <TouchableOpacity style={styles.difDiv} onPress={check1_3_2}>
              {mbti1_3_2 ? <View style={styles.answerCircle2_yes} /> : <View style={styles.answerCircle2_no} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={check1_3_3}>
              {mbti1_3_3 ? <View style={styles.answerCircle3_yes} /> : <View style={styles.answerCircle3_no} />}
            </TouchableOpacity>
            <TouchableOpacity style={styles.difDiv} onPress={check1_3_4}>
              {mbti1_3_4 ? <View style={styles.answerCircle2_yes} /> : <View style={styles.answerCircle2_no} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={check1_3_5}>
              {mbti1_3_5 ? <View style={styles.answerCircle1_yes} /> : <View style={styles.answerCircle1_no} />}
            </TouchableOpacity>
          </View>
          <View style={styles.questionInnerBox}> 
            <Text style={styles.answerText}>매우아니다          아니다         보통이다         그렇다          매우그렇다</Text> 
          </View>
        </View>
        <View style={styles.questionBox}>
        <View style={styles.questionName}><Text style={styles.questionNameStyle}>질문4</Text></View>
          <View><Text style={styles.questionTitleStyle}>예산을 초과해서 사용하면 불안하다.</Text></View>
          <View style={styles.questionInnerBox}>
            <TouchableOpacity onPress={check1_4_1}>
              {mbti1_4_1 ? <View style={styles.answerCircle1_yes} /> : <View style={styles.answerCircle1_no} />}
            </TouchableOpacity>
            <TouchableOpacity style={styles.difDiv} onPress={check1_4_2}>
              {mbti1_4_2 ? <View style={styles.answerCircle2_yes} /> : <View style={styles.answerCircle2_no} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={check1_4_3}>
              {mbti1_4_3 ? <View style={styles.answerCircle3_yes} /> : <View style={styles.answerCircle3_no} />}
            </TouchableOpacity>
            <TouchableOpacity style={styles.difDiv} onPress={check1_4_4}>
              {mbti1_4_4 ? <View style={styles.answerCircle2_yes} /> : <View style={styles.answerCircle2_no} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={check1_4_5}>
              {mbti1_4_5 ? <View style={styles.answerCircle1_yes} /> : <View style={styles.answerCircle1_no} />}
            </TouchableOpacity>
          </View>
          <View style={styles.questionInnerBox}> 
            <Text style={styles.answerText}>매우아니다          아니다         보통이다         그렇다          매우그렇다</Text> 
          </View>
        </View>
        <View style={styles.appFooter}>
          <MbtiPrevButton onPress={() => navigation.goBack()}/>
          <MbtiNextButton onPress={handleSubmitButton}/>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  appSize: {
      flex: 1,
  },
  appTopBar: {
      height: 200,
  },
  barTop: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row',
  },
  barBottom: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
  },
  appBody: {
      borderTopWidth: 2,
      borderColor: '#DCDCDC',
      height: 1200,
  },
  logoBbti:{
    marginTop: 30,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0000CD',
  },
  grayCircle: {
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  blueCircle: {
    borderWidth: 1,
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: '#0000CD',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  line: {
    height: 1,
    width: 20,
    borderWidth: 2,
    borderColor: 'gray',
    marginTop: 20,
  },
  fontInCircle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  questionBox: {
    margin: 15,
    height: 170,
    borderRadius: 15,
    backgroundColor: '#DCDCDC',
  },
  questionName: {
    margin: 10,
    height: 30,
    width: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  questionNameStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
  },
  questionTitleStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  answerCircle1_no: {
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
  },
  answerCircle2_no: {
    borderRadius: 17,
    width: 34,
    height: 34,
    backgroundColor: 'white',
    marginTop: 4,
    borderColor: 'white',
    borderWidth: 1,
  },
  answerCircle3_no: {
    borderRadius: 14,
    width: 28,
    height: 28,
    backgroundColor: 'white',
    marginTop: 7,
    borderColor: 'white',
    borderWidth: 1,
  },
  answerCircle1_yes: {
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: '#87CEFA',
    borderColor: 'white',
    borderWidth: 1,
  },
  answerCircle2_yes: {
    borderRadius: 17,
    width: 34,
    height: 34,
    backgroundColor: '#87CEFA',
    marginTop: 4,
    borderColor: 'white',
    borderWidth: 1,
  },
  answerCircle3_yes: {
    borderRadius: 14,
    width: 28,
    height: 28,
    backgroundColor: '#87CEFA',
    marginTop: 7,
    borderColor: 'white',
    borderWidth: 1,
  },
  difDiv: {
    marginLeft: 20,
    marginRight: 20,
  },
  questionInnerBox:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  questionInnerTextBox:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4,
  },
  answerText:{
    fontSize: 10,
    fontWeight: 'bold',
  },
  appFooter:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default Mbti1Screen;