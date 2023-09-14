/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import DBGender from './DBGender';
const colorText = "#00004d";
const fontText = "Poppins-Medium";
const { width, height } = Dimensions.get('window');
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import DBYear from './DBYear';

const ProfileInputScreen = () => {
  const [name, setName] = useState('');
  const [showOptionGender, setShowOptionGender] = useState(false);
  const dispatch = useDispatch(); // Lấy hàm dispatch từ React Redux
  const { isSelectGender,isSelectYear, gender, year } = useSelector((state) => state.user);
  const [genderMessage, setGenderMessage] = useState('');
  const handleToggle1 = () => {
    dispatch({ type: "TOGGLE_SELECT1" });
  };
  const handleToggle2 = () => {
    dispatch({ type: "TOGGLE_SELECT2" });
  };
  useEffect(() => {
    switch (gender) {
      case null:
        setGenderMessage("Vui lòng chọn");
        break;
      case 0:
        setGenderMessage("Không muốn chia sẻ");
        break;
      case 1:
        setGenderMessage("Nam");
        break;
      case 2:
        setGenderMessage("Nữ");
        break;
      case 3:
        setGenderMessage("Giới tính khác");
        break;

      default:
        setGenderMessage(null);
        break;
    }
  }, [gender]); // useEffect sẽ chạy khi isSelect thay đổi


  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={{ padding:20,height:height}}>
        <View style={styles.headerContainer}>
          <Text style={styles.text1}>
            Vui lòng cho chúng tôi biết thêm về bạn một chút nhé!
          </Text>
          <Text style={styles.text2}>
            Thông tin này sẽ giúp chúng tôi cung cấp cho bạn các đề xuất nội dung
            tốt hơn.
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Tên</Text>
            <View style={{
              width:'100%',height:50,backgroundColor:'white',
              paddingLeft:20,
              borderRadius:90,marginTop:10
              }}>
              <TextInput style={{
                fontSize:18,fontFamily:fontText,height:50,
                paddingBottom:5,
                paddingLeft:10
                }} placeholder='Nhập tên'/>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Giới tính</Text>
            <TouchableOpacity onPress={handleToggle1} style={[styles.input, { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }]}>
              <Text style={styles.inputText}>{genderMessage}</Text>
              <View style={{ position: 'absolute', end: 20 }}><Icon name="caret-down" color={'#00004d'} size={16} /></View>
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.label}>Năm sinh</Text>
              <TouchableOpacity onPress={handleToggle2} style={[styles.input, { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }]}>
                <Text style={styles.inputText}>{year === null ? "Vui lòng chọn" : year}</Text>
                <View style={{ position: 'absolute', end: 20 }}><Icon name="caret-down" color={'#00004d'} size={16} /></View>
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <TouchableOpacity style={{ 
          height: 55,marginTop:40,
          justifyContent:'center'}}
          >
          <LinearGradient
          style={{height:'100%',justifyContent:'center',alignItems:'center', borderRadius: 40,}}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
             colors={['#ff7733', '#ffaa80']}>
            <Text style={[styles.inputText, {color: 'white' }]}>Tiếp tục</Text>
            </LinearGradient>
        </TouchableOpacity>

      </View>
      
      <View style={{}}>
        {
          (isSelectGender == true) ? (
            <View style={{ width: width }}>
              <DBGender />
            </View>
          )
            :
            (
              <View></View>
            )
        }
      </View>
      <View style={{}}>
        {
          (isSelectYear == true) ? (
            <View style={{ width: width }}>
              <DBYear />
            </View>
          )
            :
            (
              <View></View>
            )
        }
      </View>
    </KeyboardAwareScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#D4E8FC',
  },
  text1: {
    fontSize: 40,
    color: colorText,
    fontWeight: 'bold',
    lineHeight: 55,
  },
  text2: {
    fontSize: 20,
    color: colorText,
    lineHeight: 30,
  },
  inputText: {
    fontSize: 18, paddingLeft: 10, fontFamily: fontText, paddingTop: 3,
  },
  label: {
    fontSize: 25,
    color: colorText,
    fontWeight: 'bold',
  },
  pickerContainerFocused: {
    height: 20
  },
  inputContainer: {
    marginBottom: 15
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: 'gray',
    borderRadius: 90,
    backgroundColor: '#FFFFFF',
    fontSize: 20,
    color: '#620A56',
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingLeft: 20
  },

  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F32C0C',
    borderRadius: 90,
    height: 50,
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 20,
  }
});

export default ProfileInputScreen;