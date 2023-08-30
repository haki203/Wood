import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Dimensions, Modal, Pressable, Image } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import { toggleIsPlay } from '../../actions/playerActions';
import { connect, useDispatch, useSelector } from 'react-redux';
const { width, height } = Dimensions.get('window');
const PlayScreen = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackDuration, setTrackDuration] = useState(0);
    const [currentPosition, setCurrentPosition] = useState(0);
    const [trackTitle, setTrackTitle] = useState('');
    const [trackArtist, setTrackArtist] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        setupTrackPlayer();
    }, []);
    const skipPoints = [
        { label: 'Giới thiệu tác giả', time: 142 },
        { label: 'Lời nói của tác giả', time: 182 },
        // Thêm các điểm tua khác ở đây
    ];
    // Thêm hàm để tua đến thời gian tương ứng khi người dùng chọn
    const skipToTime = async (time) => {
        await TrackPlayer.seekTo(time);
    };

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
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => dispatch(toggleIsPlay())} >
                    <Icon name="chevron-down" color={'#656565'} size={27} />
                </TouchableOpacity>
                <TouchableOpacity style={{}} onPress={() => setShowOptions(!showOptions)}>
                    <Icon name="cog" color={'#656565'} size={27} />
                </TouchableOpacity>
            </View>
            <View>
                <View style={styles.infoContainer}>
                    <Text style={styles.nameBook}>{trackTitle}</Text>
                    <Text style={styles.nameAuthor}>{trackArtist}</Text>
                    <Image style={{ width: width / 2, height: height / 2.5, borderRadius: 20, marginTop: 8 }} source={require('../../assets/images/Dac-Nhan-Tam.jpg')} />
                </View>
                <View style={styles.menuContainer}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', }}>{formatTime(currentPosition)} / {formatTime(trackDuration)}</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'ReadexPro-Bold', }}>Lời mở đầu</Text>
                    <Slider
                        style={{ width: 300 }}
                        minimumValue={0}
                        maximumValue={trackDuration}
                        value={currentPosition}
                        onValueChange={onSliderValueChange}
                    />
                    <View style={styles.navContainer}>
                        <TouchableOpacity>
                            <Icon name="step-backward" color={'#656565'} size={22} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnPlay} onPress={togglePlayPause}>
                            <Text>{isPlaying ?
                                <Icon name="pause" color={'#656565'} size={22} />
                                :
                                <Icon name="play" color={'#656565'} size={22} />
                            }</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="step-forward" color={'#656565'} size={22} />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </View>


    );
};

export default PlayScreen;
const styles = StyleSheet.create({
    container1: {
        flex: 1,
    },
    circle: {
        height: height,
        width: width,
        backgroundColor: '#b58df1',
        borderRadius: 20,
        cursor: 'grab',
    },
    container: {

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
})
