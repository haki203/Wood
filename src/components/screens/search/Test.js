import { TouchableOpacity, View, Image, StyleSheet, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

const Test = () => {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonPress = (buttonIndex) => {
      setSelectedButton(buttonIndex);
    };
  
    const getButtonImage = (buttonIndex) => {
      if (selectedButton === buttonIndex) {
        switch (buttonIndex) {
          case 1:
            return require('../assets/images/all.png');
          case 2:
            return require('../assets/images/gg.png');
          case 3:
            return require('../assets/images/ebook.png');
          default:
            return require('../assets/images/logoApp.png');
        }
      } else {
        switch (buttonIndex) {
          case 1:
            return require('../assets/images/alls.png');
          case 2:
            return require('../assets/images/audiobook.png');
          case 3:
            return require('../assets/images/ebookmau.png');
          default:
            return require('../assets/images/ebook.png');
        }
      }
    };
  
    const getButtonBackground = (buttonIndex) => {
      return selectedButton === buttonIndex ? '#f9e5fc' : '#FFFFFF';
    };

    return (
        <>
        <TouchableOpacity onPress={() => handleButtonPress(1)}>
          <View style={{ width: 65, height: 65, backgroundColor: getButtonBackground(1), borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 40, height: 40 }} source={getButtonImage(1)} />
          </View>
          <Text style={{ color: selectedButton === 1 ? '#FFFFFF' : '#000000', fontSize: 12, fontWeight: '600', fontStyle: 'normal', padding: 10, paddingLeft: 12 }}>TẤT CẢ</Text>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => handleButtonPress(2)}>
          <View style={{ width: 65, height: 65, backgroundColor: getButtonBackground(2), borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 40, height: 40, marginLeft: 5 }} source={getButtonImage(2)} />
          </View>
          <Text style={{ color: selectedButton === 2 ? '#FFFFFF' : '#000000', fontSize: 12, fontWeight: '600', fontStyle: 'normal', padding: 10, marginLeft: -4 }}>SÁCH NÓI</Text>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => handleButtonPress(3)}>
          <View style={{ width: 65, height: 65, backgroundColor: getButtonBackground(3), borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 50, height: 40, marginLeft: 0 }} source={getButtonImage(3)} />
          </View>
          <Text style={{ color: selectedButton === 3 ? '#FFFFFF' : '#000000', fontSize: 12, fontWeight: '600', fontStyle: 'normal', padding: 10, marginLeft: 4 }}>EBOOK</Text>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => handleButtonPress(4)}>
          <View style={{ width: 65, height: 65, backgroundColor: getButtonBackground(4), borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 40, height: 40, marginLeft: 4 }} source={getButtonImage(4)} />
          </View>
          <Text style={{ color: selectedButton === 4 ? '#FFFFFF' : '#000000', fontSize: 12, fontWeight: '600', fontStyle: 'normal', padding: 10 }}>TÓM TẮT</Text>
        </TouchableOpacity>
      </>
    );
};

export default Test

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonContainer: {
        flexDirection: 'row',
      },
      button: {
        width: 100,
        height: 150,
        margin: 10,
        alignItems: 'center',
      },
      buttonImage: {
        width: 80,
        height: 80,
        marginBottom: 10,
      },
      buttonText: {
        color: 'black',
        fontSize: 16,
      },
});