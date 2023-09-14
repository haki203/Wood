import { StyleSheet, Text, View, Dimensions, Platform, TouchableOpacity, ScrollView } from 'react-native';
import React, { useRef, useEffect } from 'react';
import ScreenWrapper from '../ScreenWrapper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { setYear } from "../../../actions/userAction";
const colorText = "#00004d";
const fontText = "Poppins-Medium";
const { width, height } = Dimensions.get('window');
const DBYear = () => {
    const years = Array.from({ length: 2024 - 1980 }, (_, index) => 1980 + index);
    const dispatch = useDispatch(); // Lấy hàm dispatch từ React Redux
    const initialScrollY = (years.length / 2) * 60 - (200 / 2);
    const handleToggle = () => {
        dispatch({ type: "TOGGLE_SELECT" });
    };
    const handleSetYear = (newYear) => {
        dispatch(setYear(newYear)); // Sử dụng action setGender để đặt giá trị gender
        console.log(newYear);
        handleToggle()
    };
    // scroll toi giua
    const scrollViewRef = useRef(null);
    useEffect(() => {
        scrollViewRef.current.scrollTo({ y: initialScrollY, animated: false });
    }, []);
    return (
        <ScreenWrapper style={styles.container}>

            <View style={styles.bottomSheet}>
                <View style={{
                    flexDirection: 'row', alignItems: 'center', marginBottom: 10, width: '100%',
                    justifyContent: 'space-between',
                    padding: 25,
                    paddingBottom: 15
                }}>
                    <Text style={{ fontSize: 22, color: '#00004d', fontFamily: "Poppins-Bold", }}>Vui lòng chọn</Text>
                    <TouchableOpacity onPress={handleToggle} style={{
                        height: 32, width: 32, backgroundColor: '#e6ecff',
                        alignItems: 'center', justifyContent: 'center',
                        borderRadius: 100, end: 0
                    }}>
                        <Icon name="times" color={'#00004d'} size={16} />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    contentContainerStyle={styles.scrollView}
                    ref={scrollViewRef}
                >
                    {years.map((year, index) => (
                        <TouchableOpacity onPress={() => handleSetYear(year)}
                            key={year}
                            style={[
                                styles.yearItem,
                            ]}
                        >
                            <Text style={styles.yearText}>{year}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </ScreenWrapper>

    )
}

export default DBYear

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:height
    },
    bottomSheet: {
        position: 'absolute',
        width: '100%',
        height: height * 0.4,
        backgroundColor: 'white',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        ...Platform.select({
            android: { elevation: 3 },
        }),
        padding: 0
    },
    optionContainer: {
        justifyContent: 'center',
        marginTop: 8
    },
    optionText: {
        fontSize: 18, color: '#00004d', fontFamily: "Poppins-Medium", marginBottom: 10
    },
    scrollView: {
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    yearItem: {
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        height: 60,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderRadius: 10
    },
    yearText: {
        fontSize: 22,
        color: colorText,
        fontFamily: 'Roboto-Black'
    },
    blueBackground: {
        backgroundColor: 'blue',
    },
})