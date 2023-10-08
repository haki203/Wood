import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ItemEbook = (props) => {
    const {productz} = props;
    return (
        <View>
            <TouchableOpacity style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', paddingTop: 15 }}>
                <Image style={{
                    width: 30,
                    height: 30
                }} source={require('../../../assets/images/search.png')}></Image>
                <Text style={{
                    color: '#374B87',
                    fontSize: 15,
                    fontStyle: 'normal',
                    fontWeight: '400',
                    paddingLeft: 10
                }}>Ebook trending</Text>
                <Image style={{
                    marginLeft: 5
                }} source={require('../../../assets/images/chuyen.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', paddingTop: 15 }}>
                <Image style={{
                    width: 30,
                    height: 30
                }} source={require('../../../assets/images/search.png')}></Image>
                <Text style={{
                    color: '#374B87',
                    fontSize: 15,
                    fontStyle: 'normal',
                    fontWeight: '400',
                    paddingLeft: 10
                }}>Ebook miễn phí</Text>
                <Image style={{
                    marginLeft: 5
                }} source={require('../../../assets/images/chuyen.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', paddingTop: 15 }}>
                <Image style={{
                    width: 30,
                    height: 30
                }} source={require('../../../assets/images/search.png')}></Image>
                <Text style={{
                    color: '#374B87',
                    fontSize: 15,
                    fontStyle: 'normal',
                    fontWeight: '400',
                    paddingLeft: 10
                }}>Ebook mới xuất bản</Text>
                <Image style={{
                    marginLeft: 5
                }} source={require('../../../assets/images/chuyen.png')}></Image>
            </TouchableOpacity>
        </View>
    )
}

export default ItemEbook

const styles = StyleSheet.create({
    sach: {
        width: 55,
        height: 85,
        borderRadius: 8,
      }
})