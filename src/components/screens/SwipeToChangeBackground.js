import React, { Component, useState, useEffect } from 'react';
import { View, Animated, PanResponder, StyleSheet, Dimensions, TouchableOpacity, Text, Button, Image } from 'react-native';
import PlayScreen from './play/PlayScreen';
import LinearGradient from 'react-native-linear-gradient';
import { connect, useDispatch, useSelector } from 'react-redux';
import HomeScreen from './home/HomeScreen';
const colorText = "#00004d";
const fontText = "Poppins-Medium";
const { width, height } = Dimensions.get('window');

export default function SwipeToChangeBackground(props) {
    const isTabVisible = useSelector((state) => state.scroll.isTabVisible);
    const pan = React.useRef(new Animated.ValueXY()).current;
    const [heightView, setHeight] = useState(height);
    const {navigation} = props;
    const [bottom, setBottom] = useState(0);
    const isPlay = useSelector((state) => state.play.isPlay);
    const dispatch = useDispatch();

    useEffect(() => {
        setHeight(50)
        console.log(heightView);
      }, []);

    const panResponder = React.useMemo(
        () =>
            PanResponder.create({
                onMoveShouldSetPanResponderCapture: (_, gestureState) => {
                    return true;
                },
                onPanResponderMove: Animated.event([null, { dy: pan.y }], {
                    useNativeDriver: false,
                }),
                onPanResponderRelease: (_, gestureState) => {
                    if (gestureState.dy > 200) {
                        // Vuốt quá 200px, thay đổi màu nền và chiều cao
                        setHeight(50);
                        setBottom(20)
                    } else {
                        // Nếu không vuốt quá 200px, quay về như cũ
                        setHeight(height);
                        setBottom(0)
                    }
                    // Đặt lại giá trị y của Animated.ValueXY về 0
                    Animated.spring(pan, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false,
                    }).start();
                },
            }),
        [pan]
    );
    const handlePress = () => {
        // Nếu không vuốt quá 200px, quay về như cũ
        setHeight(height);
        const string = {};
        setStyleNe(string)
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: height, width: width, marginTop: 10 }}>
                <HomeScreen navigation={navigation}/>
            </View>
            {
                (isPlay) ? (
                    <Animated.View
                        style={{
                            transform: pan.getTranslateTransform(),
                            height: heightView,
                            width: width,
                            position: 'absolute',
                            bottom: bottom
                        }}
                        {...panResponder.panHandlers}
                    >
                        {/* Nội dung của màn hình */}
                        <LinearGradient style={{}} colors={['#e6f2ff', '#cce6ff']}>
                            {
                                (heightView < 60) ?
                                    (
                                        <View style={{ backgroundColor: '#00e6e6', height: 70, padding: 10, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <View style={{ justifyContent: 'center' }}>
                                                <Text style={{ color: colorText, fontSize: 18, fontFamily: fontText }}>Đắc nhân tâm</Text>
                                                <Text style={{ fontSize: 14, fontFamily: fontText }}>Napoleon Hill</Text>
                                            </View>
                                            <TouchableOpacity style={{borderRadius:50,borderWidth:2,padding:10,borderColor:'#6666cc'}}>
                                                <Image style={{width:25,height:25}} source={require('../../assets/images/play.png')} />
                                            </TouchableOpacity>
                                        </View>
                                    ) :
                                    (
                                        <View style={{ width: width, height: height,paddingTop: isTabVisible === 'flex' ? '10%' : 0 }}>
                                            <PlayScreen />
                                        </View>
                                    )
                            }
                        </LinearGradient>
                    </Animated.View>
                )
                    : (
                        <View></View>
                    )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view2: {
        height: height,
    }
});
