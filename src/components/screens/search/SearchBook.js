import { View, Text, StyleSheet, Dimensions, TextInput, Image, TouchableOpacity, ScrollView, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState, useReducer, useEffect } from 'react'
import ListBook from './ListBook';
const { height } = Dimensions.get('window');
const fontText = 'Poppins-Medium';
const colorBtnFocus = '#ccf5ff';
const colorTextFocus = '#cccccc';
const srcImage='../../../assets/images/';
const SearchBook = (props) => {
  const { navigation } = props;
  // const [searchText, setSearchText] = useState('');
  const [isPressed, setIsPressed] = useState(0);

  const handleBtnHeader = (num) => {
    switch (num) {
      case 0:
        setIsPressed(0);
        break;
      case 1:
        setIsPressed(1);
        break;
      case 2:
        setIsPressed(2);
        break;
      default:
        break;
    }
  }
  const handleScreenPress = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.searchContainer}>
            <TextInput
              underlineColorAndroid="transparent" placeholder='Tìm kiếm sách, tác giả' style={[styles.search, { backgroundColor: 'hsla(240, 60%, 80%, 0.5)' }]}>
            </TextInput>
            <Image style={styles.icon} source={require('../../../assets/images/search-white.png')}></Image>
            <Text style={styles.huy}>Hủy</Text>
          </View>
          <View style={styles.btnHeaderContainer}>
            <View style={styles.btnItem}>
              <TouchableOpacity
                style={[styles.btnHeader, { backgroundColor: (isPressed == 0) ? colorBtnFocus : 'white' }]}
                onPress={() => handleBtnHeader(0)}>
                <Image
                  source={(isPressed == 0) ? require('../../../assets/images/audio-book.png') : require('../../../assets/images/audiobook-nor.png')}
                  style={styles.imageHeader}
                />
              </TouchableOpacity>
              <Text style={[styles.textHeader, { color: (isPressed == 0) ? 'white' : colorTextFocus }]}>Tất cả</Text>
            </View>
            <View style={styles.btnItem}>
              <TouchableOpacity
                style={[styles.btnHeader, { backgroundColor: (isPressed == 1) ? colorBtnFocus : 'white' }]}
                onPress={() => handleBtnHeader(1)}>
                <Image
                  source={(isPressed == 1) ? require('../../../assets/images/audio-book.png') : require('../../../assets/images/audiobook-nor.png')}
                  style={styles.imageHeader}
                />
              </TouchableOpacity>
              <Text style={[styles.textHeader, { color: (isPressed == 1) ? 'white' : colorTextFocus }]}>Sách đọc</Text>
            </View>
            <View style={styles.btnItem}>
              <TouchableOpacity
                style={[styles.btnHeader, { backgroundColor: (isPressed == 2) ? colorBtnFocus : 'white' }]}
                onPress={() => handleBtnHeader(2)}>
                <Image
                  source={(isPressed == 2) ? require('../../../assets/images/audio-book.png') : require('../../../assets/images/audiobook-nor.png')}
                  style={styles.imageHeader}
                />
              </TouchableOpacity>
              <Text style={[styles.textHeader, { color: (isPressed == 2) ? 'white' : colorTextFocus }]}>Sách nói</Text>
            </View>
          </View>
        </View>
        <View style={styles.listContainer}>
          <ListBook isPressed={isPressed} data={data} />
        </View>
      </View>
    </TouchableWithoutFeedback>

  )
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#6b73ba',
  },
  headerContainer: {
    height: height * 0.32,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  listContainer: {
    height: height * 0.68,
    backgroundColor: '#E4EBF5',
    borderTopRightRadius: 43,
    borderTopLeftRadius: 43,
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%'
  },
  searchContainer: {
    flexDirection: 'row'
  },
  btnHeaderContainer: {
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  btnItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnHeader: {
    backgroundColor: 'white',
    width: 80,
    height: 75,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageHeader: {
    width: 40, height: 40

  },
  textHeader: {
    marginTop: 10,
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 16,
    fontFamily: fontText,
  },

  search: {
    width: 320,
    height: 55,
    borderWidth: 1,
    borderColor: '#6b73ba',
    borderRadius: 15,
    marginTop: 15,
    marginLeft: 25,
    paddingStart: 60,
    color: '#FFFFFF'
  },
  huy: {
    padding: 20,
    marginTop: 10,
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#FFFFFF'
  },
  icon: {
    width: 35,
    height: 35,
    position: 'absolute',
    marginLeft: 47,
    marginTop: 25
  },
  danhsach: {
    fontSize: 23,
    fontWeight: '600',
    color: '#000000',
    fontVariant: 'normal',
    fontStyle: 'normal',
    paddingHorizontal: 20,
    paddingTop: 20
  },

});
export default SearchBook;

const data = [{
  "id": "12c1ee57-768f-4f22-a48e-83f786e2c605",
  "category": "audiobook",
  "name": "North Perry Airport",
  "image": "http://dummyimage.com/229x100.png/dddddd/000000"
}, {
  "id": "7e2cfceb-b4bd-4b63-aa17-70dc8753b58e",
  "category": "ebook",
  "name": "North Perry Airport",
  "image": "http://dummyimage.com/235x100.png/dddddd/000000"
}, {
  "id": "1",
  "category": "ebook",
  "name": "North Perry Airport",
  "image": "http://dummyimage.com/151x100.png/5fa2dd/ffffff"
}, {
  "id": "2",
  "category": "audiobook",
  "name": "North Perry Airport",
  "image": "http://dummyimage.com/139x100.png/ff4444/ffffff"
}, {
  "id": "3",
  "category": "audiobook",
  "name": "North Perry Airport",
  "image": "http://dummyimage.com/238x100.png/5fa2dd/ffffff"
}, {
  "id": "4",
  "category": "audiobook",
  "name": "North Perry Airport",
  "image": "http://dummyimage.com/206x100.png/cc0000/ffffff"
}, {
  "id": "5",
  "category": "ebook",
  "name": "North Perry Airport",
  "image": "http://dummyimage.com/134x100.png/dddddd/000000"
}, {
  "id": "6",
  "category": "ebook",
  "name": "North Perry Airport",
  "image": "http://dummyimage.com/233x100.png/ff4444/ffffff"
}, {
  "id": "7",
  "category": "E Book",
  "name": "North Perry Airport",
  "image": "http://dummyimage.com/142x100.png/dddddd/000000"
}, {
  "id": "8",
  "category": "audiobook",
  "name": "North Perry Airport",
  "image": "http://dummyimage.com/197x100.png/cc0000/ffffff"
}];

