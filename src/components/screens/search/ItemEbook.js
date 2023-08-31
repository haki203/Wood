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
                }} source={require('../assets/images/search.png')}></Image>
                <Text style={{
                    color: '#374B87',
                    fontSize: 15,
                    fontStyle: 'normal',
                    fontWeight: '400',
                    paddingLeft: 10
                }}>Ebook trending</Text>
                <Image style={{
                    marginLeft: 5
                }} source={require('../assets/images/chuyen.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', paddingTop: 15 }}>
                <Image style={{
                    width: 30,
                    height: 30
                }} source={require('../assets/images/search.png')}></Image>
                <Text style={{
                    color: '#374B87',
                    fontSize: 15,
                    fontStyle: 'normal',
                    fontWeight: '400',
                    paddingLeft: 10
                }}>Ebook miễn phí</Text>
                <Image style={{
                    marginLeft: 5
                }} source={require('../assets/images/chuyen.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', paddingTop: 15 }}>
                <Image style={{
                    width: 30,
                    height: 30
                }} source={require('../assets/images/search.png')}></Image>
                <Text style={{
                    color: '#374B87',
                    fontSize: 15,
                    fontStyle: 'normal',
                    fontWeight: '400',
                    paddingLeft: 10
                }}>Ebook mới xuất bản</Text>
                <Image style={{
                    marginLeft: 5
                }} source={require('../assets/images/chuyen.png')}></Image>

                {/* <View style={{ flexDirection: 'row', paddingTop: 20 }}>
                    <Image style={styles.sach} source={require('../assets/images/image.webp')}></Image>
                    <View style={{ padding: 15, justifyContent: 'center' }}>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '400',
                            fontStyle: 'normal',
                            color: '#6b73ba'
                        }}>{productz.category}</Text>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                            fontStyle: 'normal',
                            color: '#374B87'
                        }}>{productz.name}</Text>
                    </View>
                </View> */}
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