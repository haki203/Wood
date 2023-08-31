import React, { Component, useState } from 'react';
import { View, Animated, PanResponder, StyleSheet, Dimensions, TouchableOpacity, Text,Button } from 'react-native';
import PlayScreen from './PlayScreen';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window');
export default function SwipeToChangeBackground() {
    const pan = React.useRef(new Animated.ValueXY()).current;
    const [heightView, setHeight] = useState(height);
    const [isPlay, setIsPlay] = useState(false);
    const [bottom, setBottom] = useState(0);
    
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
                        setBottom(80)
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
            <View style={{ height: height, width: width }}>
                <Text>Đây là màn cố định</Text>
                <Button onPress={()=>setIsPlay(!isPlay)} title='Play'/>
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
                                        <View style={{ backgroundColor: 'yellow', height: '100%' }}>
                                            <Text style={{ color: 'black' }}>Đây là màn thu nhỏ</Text>
                                        </View>
                                    ) :
                                    (
                                        <View style={{ width: width, height: height }}>
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
