import { StyleSheet, Text, View, Dimensions, Platform, TouchableOpacity } from 'react-native';
import React from 'react';
import ScreenWrapper from '../ScreenWrapper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { setGender } from "../../../actions/userAction";
const { width, height } = Dimensions.get('window');
const DBGender = () => {
    // GENDER: 1- nam, 2:nu , 3,gioi tinh khac, 0: ko tra loi
    const dispatch = useDispatch(); // Lấy hàm dispatch từ React Redux
    const { isSelect, gender, year } = useSelector((state) => state.user);

    const handleToggle = () => {
        dispatch({ type: "TOGGLE_SELECT" });
    };
    const handleSetGender = (newGender) => {
        dispatch(setGender(newGender)); // Sử dụng action setGender để đặt giá trị gender
        console.log(newGender);
        handleToggle()
      };
    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <View style={styles.bottomSheet}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, width: '100%', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 22, color: '#00004d', fontFamily: "Poppins-Bold", }}>Vui lòng chọn</Text>
                        <TouchableOpacity onPress={handleToggle} style={{
                            height: 32, width: 32, backgroundColor: '#e6ecff',
                            alignItems: 'center', justifyContent: 'center',
                            borderRadius: 100, end: 0
                        }}>
                            <Icon name="times" color={'#00004d'} size={16} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={()=>handleSetGender(1)}  style={styles.optionContainer}>
                        <Text style={styles.optionText}>Nam</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleSetGender(2)}  style={styles.optionContainer}>
                        <Text style={styles.optionText}>Nữ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleSetGender(3)}  style={styles.optionContainer}>
                        <Text style={styles.optionText}>Giới tính khác</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleSetGender(0)}  style={styles.optionContainer}>
                        <Text style={styles.optionText}>Không chia sẻ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScreenWrapper>

    )
}

export default DBGender

const styles = StyleSheet.create({
    container: {
    },
    bottomSheet: {
        position: 'absolute',
        width: '100%',
        height: height * 0.4,
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,

        padding: 25,
        bottom:0,
    },
    optionContainer: {
        height: 45,
        justifyContent: 'center',
        marginTop: 8
    },
    optionText: {
        fontSize: 18, color: '#00004d', fontFamily: "Poppins-Medium", marginBottom: 10
    }
})