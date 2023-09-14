import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const ItemListView = ({ dulieu }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [isLiked, setIsLiked] = useState(false);
    const [scaleValue] = useState(new Animated.Value(1));
    const handleLike = () => {
        setIsLiked(!isLiked);
        animateIcon();

    };
    const handlePlay = () => {
        navigation.navigate('Home');
        dispatch({ type: 'SET_IS_PLAY', payload: true });
    };


    const animateIcon = () => {
        Animated.sequence([
            Animated.timing(scaleValue, {
                toValue: 1.5,
                duration: 100,
                useNativeDriver: false,
            }),
            Animated.timing(scaleValue, {
                toValue: 1,
                duration: 100,
                useNativeDriver: false,
            }),
        ]).start();
    };

    const animatedStyle = {
        transform: [{ scale: scaleValue }],
    };
    return (
        <View style={styles.container}>
            <View style={styles.datetime}>
                <View style={styles.date}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#000000', textAlign: 'center', marginTop: 10 }}>
                        26
                    </Text>
                    <Text style={{ fontSize: 15, color: '#000000', textAlign: 'center' }}>
                        T.8
                    </Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyimage}>
                    <Image style={styles.image} source={{ uri: dulieu.image }} />
                    <View style={styles.iconimage}>
                        <Text style={{ color: "#000000", fontFamily: 'Poppins-Medium', fontSize: 16 }} >{dulieu.category}</Text>
                        <Text style={{ marginTop: 3, fontSize: 16, fontFamily: 'Poppins-Medium' }}>Kinh Doanh - Lãnh Đạo</Text>
                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'space-between' }}>


                            <TouchableOpacity
                                style={styles.click}
                                onPress={handlePlay}
                            >
                                <Icon name="playcircleo" size={20} color='black' />
                                <Text style={{ fontSize: 14, textAlign: 'center', fontFamily: 'Poppins-Medium' }}>
                                    Nghe
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.click}>
                                <TouchableOpacity onPress={handleLike}>
                                    <Animated.View style={animatedStyle}>
                                        <Icon
                                            name={isLiked ? 'heart' : 'hearto'}
                                            size={20}
                                            color={isLiked ? 'black' : 'black'}
                                        />
                                    </Animated.View>
                                </TouchableOpacity>

                                {isLiked && <Text style={{ fontSize: 14, textAlign: 'center', fontFamily: 'Poppins-Medium' }}>
                                    Đã thích
                                </Text> || <Text style={{ fontSize: 14, textAlign: 'center', fontFamily: 'Poppins-Medium' }}>
                                        Yêu thích
                                    </Text>}


                            </View>
                            <View style={styles.click}>
                                <Icon name="infocirlceo" size={20} color='black' />

                                <Text style={{ fontSize: 14, textAlign: 'center', fontFamily: 'Poppins-Medium' }}>
                                    Chi tiết
                                </Text>
                            </View>

                        </View>


                    </View>
                </View>
                <View style={styles.bodytext}>
                    <Text style={styles.namebook}>{dulieu.bookname}</Text>
                    <Text numberOfLines={2} style={styles.content}>{dulieu.content}</Text>
                </View>

                <View style={styles.chi}></View>
            </View>

        </View>
    )
}

export default ItemListView

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10,
    }, datetime: {
        width: 60
    }, body: {
        width: '100%',
        height: "100%",
        flexDirection: 'column',
        display: 'flex'
    }, bodyimage: {
        width: '100%',
        height: "auto",
        flexDirection: 'row',
    }
    , iconimage: {
        width: '100%',
        height: "auto",
        flexDirection: 'column',
        marginTop: 20,
        marginLeft: 25
    }, date: {
        marginLeft: 12,
        width: 35,
        height: 65,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        flexDirection: 'column',
    }, image: {
        width: 75,
        height: 120,
        borderRadius: 10,
    }, click: {
        width: 'auto',
        height: 50,
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        alignitems: 'center',
        justifycontent: 'center',
        justifyContent: 'space-around'
    }, play: {
        width: 30,
        height: 30
    }, bodytext: {
        width: 320,
        height: 'auto',
        flexDirection: 'column',

    }, namebook: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: '#000000',
        marginTop: 7,

    },
    content: {
        fontSize: 14,
        marginTop: 2,
        fontFamily: 'Poppins-Medium',
        marginBottom: 15
    },
    chi: {
        width: 320,
        height: 0.5,
        backgroundColor: "#BAB3FF",
        borderRadius: 10,
    }
})