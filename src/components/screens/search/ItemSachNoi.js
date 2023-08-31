import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ItemSachNoi = (props) => {
    const {product} = props;
    return (
        <TouchableOpacity>
            <View style={{ flexDirection: 'row', paddingTop: 20 }}>
                <Image style={styles.sach} source={require('../../../assets/images/image.webp')}></Image>
                <View style={{ padding: 15, justifyContent: 'center' }}>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: '400',
                        fontStyle: 'normal',
                        color: '#6b73ba'
                    }}>{product.category}</Text>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '600',
                        fontStyle: 'normal',
                        color: '#374B87'
                    }}>{product.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ItemSachNoi

const styles = StyleSheet.create({
    sach: {
        width: 55,
        height: 85,
        borderRadius: 8,
    }
})