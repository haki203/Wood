import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Dimensions, Modal, Pressable, Image, ScrollView, FlatList } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import TrackPlayer from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import { toggleIsPlay } from '../../actions/playerActions';
import { connect, useDispatch, useSelector } from 'react-redux';
import PlayScreen from './PlayScreen';
import { runOnJS } from 'react-native-reanimated';
const { width, height } = Dimensions.get('window');
function InfiniteScrollFlatList() {
  const pressed = useSharedValue(false);
  const offset = useSharedValue(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackDuration, setTrackDuration] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtist, setTrackArtist] = useState('');
  const [volume, setVolume] = useState(70.0); // Giá trị mặc định cho âm lượng
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [play, setPlay] = useState(false);
  const dispatch = useDispatch();
  const isPlay = useSelector(state => state.play.isPlay);

  useEffect(() => {
    setupTrackPlayer();
  }, []);
  const setupTrackPlayer = async () => {
    await TrackPlayer.add({
      id: 'your_track_id',
      url: require('../common/audio.mp3'),
      title: 'Đắc Nhân Tâm',
      artist: 'Your Artist',
    });
    const duration = await TrackPlayer.getDuration();
    setTrackDuration(duration);
    setTrackTitle('Đắc Nhân Tâm');
    setTrackArtist('Your Artist');
  };
  const togglePlayPause = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
    setIsPlaying(!isPlaying);
  };
  const onSliderValueChange = async value => {
    await TrackPlayer.seekTo(value);
  };
  const updatePosition = async () => {
    const position = await TrackPlayer.getPosition();
    setCurrentPosition(position);
  };
  useEffect(() => {
    const interval = setInterval(updatePosition, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  // -------------------------------------------
  function setPlayNe() {
    setPlay(true);
  }
  const pan = Gesture.Pan()
    .onBegin(() => {
      console.log(_WORKLET);
      pressed.value = true;
    })
    .onChange((event) => {
      if (event.translationY > 0) {
        offset.value = event.translationY;
        console.log("y ne:", parseInt(event.translationY));
        if (parseInt(event.translationY) > 300) {
          console.log("khop");
        }
      }
    })
    .onFinalize(() => {
      offset.value = withSpring(0);
      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateY: offset.value },
    ],

  }));

  return (
    <GestureHandlerRootView style={styles.container1}>
      <View style={{ height: height, position: 'absolute' }}>
        <LinearGradient style={styles.container} colors={['#656565', '#656565']}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <View style={styless.headerContainer}>
              <View style={styless.leftHeader}>
                <Image style={styless.logo} source={require('../../assets/images/gg.png')} />
                <Text style={styless.name}>Worm</Text>
              </View>
              <View style={styless.rightHeader}>
                <Icon name="cog" color={'#656565'} size={25} />
              </View>
            </View>
            <View style={styless.listCategoryContainer}>
              <View style={styless.categoryNameContainer}>
                <Text style={styless.categoryName}>Danh mục</Text>
              </View>
              <View style={styless.listCategory}>
                <FlatList
                  data={sampleCategories}
                  renderItem={this.renderItemCategory}
                  keyExtractor={(item, index) => index.toString()}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                />
              </View>
            </View>
            <View style={styless.listContainer}>
              <View style={styless.categoryNameContainer}>
                <Text style={styless.categoryName}>Dành cho bạn</Text>
                <TouchableOpacity style={styless.seeMoreContainer}>
                  <Text style={styless.seeMoreText}>Xem thêm</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={sampleBooks}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              />
            </View>
            <View style={styless.listContainer}>
              <View style={styless.categoryNameContainer}>
                <Text style={styless.categoryName}>Dành cho ông hàng xóm</Text>
                <TouchableOpacity style={styless.seeMoreContainer}>
                  <Text style={styless.seeMoreText}>Xem thêm</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={sampleBooks}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              />
            </View>
            <View style={styless.listContainer}>
              <View style={styless.categoryNameContainer}>
                <Text style={styless.categoryName}>Dành cho tôi</Text>
                <TouchableOpacity style={styless.seeMoreContainer}>
                  <Text style={styless.seeMoreText}>Xem thêm</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={sampleBooks}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              />
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
      <View style={styles.container1}>
        <GestureDetector gesture={pan}>
          {
            (play == false) ? (
              <LinearGradient colors={['#6fa8dc', '#cfe2f3']}>
                <Animated.View style={[styles.circle, animatedStyles]} >
                  <PlayScreen />
                </Animated.View>
              </LinearGradient>
            )
              :
              <View >
                <Text>asdasd</Text>
              </View>
          }
        </GestureDetector>
        <View>
        </View>
      </View>
    </GestureHandlerRootView>

  );
}
const mapStateToProps = state => ({
  isPlay: state.play.isPlay,
});

const mapDispatchToProps = (dispatch) => ({
  toggleIsPlay: () => dispatch({ type: 'TOGGLE_IS_PLAY' }),

});
export default connect(mapStateToProps, mapDispatchToProps)(InfiniteScrollFlatList);
const styless = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    width: width,
    height: height,

  },
  bookContainer: {
    width: 150,
    height: 220,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  listContainer: {
    width: '100%',
    marginBottom: 60
  },
  listCategoryContainer: {
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.041,
    padding: 10
  },
  leftHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  rightHeader: {
    flexDirection: 'row',
  },
  categoryContainer: {
    width: '100%',
  },

  categoryName: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Poppins-Black',
  },
  itemCategory: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    backgroundColor: '#F5F5FA',
    marginRight: 12,
    borderRadius: 10,
    marginBottom: 32
  },
  itemNameCategory: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Poppins-Black',
  },
  categoryNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'space-between'
  },
  seeMoreContainer: {
    paddingRight: 16
  },
  seeMoreText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    color: '#4838D1',
    fontWeight: '500',
    fontFamily: 'Poppins-Black',
  },

  logo: {
    width: 35,
    height: 35,
  },
  name: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10
  },
  bookImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 10
  }
});
const styles = StyleSheet.create({
  container1: {
    flex: 1,

  },
  circle: {
    height: height,
    width: width,
    cursor: 'grab',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    width: width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 20,
    height: 120,
    marginTop: 20

  },
  optionContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
  },
  navContainer: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 8
  },
  playList: {

  },
  nameBook: {
    fontSize: 18,
    fontFamily: 'georgia',
    fontWeight: 'bold'

  },
  nameAuthor: {
    fontSize: 16
  },
  gridContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  btnSpeed: {
    width: 50,
    height: 50,
    backgroundColor: '#ff8000',
    marginRight: 5,
    justifyContent: 'center',
    borderRadius: 10
  },
  textModal: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold'
  },
});
const sampleCategories = [
  {
    id: 1,
    name: 'Sach cc',
  },
  {
    id: 2,
    name: 'Khoi nghiep',
  },
  {
    id: 3,
    name: 'Bussiness',
  },
  {
    id: 4,
    name: 'Book',
  },
  {
    id: 5,
    name: 'Bookkker',
  },
  {
    id: 6,
    name: 'Anime',
  },
]
const sampleBooks = [
  {
    id: 1,
    title: 'Book 1',
    image: 'https://firstnews.com.vn/public/uploads/products/dac-nhan-tam-biamem2019-76k-bia11.jpg'
  },
  {
    id: 2,
    title: 'Book 2',
    image: 'https://bizweb.dktcdn.net/100/176/269/products/toi-thay-hoa-vang-tren-co-xanh-ban-in-moi-2018.jpg?v=1547696190593'
  },
  {
    id: 3,
    title: 'Book 3',
    image: 'https://newshop.vn/public/uploads/products/53377/chien-thang-con-quy-trong-ban-sbooks.jpg'
  },
  {
    id: 4,
    title: 'Book 4',
    image: 'https://firstnews.com.vn/public/uploads/products/nghigiaulamgiau-biamem110k-resized.jpg'
  },
  {
    id: 5,
    title: 'Book 5',
    image: 'https://firstnews.com.vn/public/uploads/products/dac-nhan-tam-biamem2019-76k-bia11.jpg'
  },
  {
    id: 6,
    title: 'Book 6',
    image: 'https://firstnews.com.vn/public/uploads/products/dac-nhan-tam-biamem2019-76k-bia11.jpg'
  },
  // Thêm sách khác tại đây
];