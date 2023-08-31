import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'


const ItemBook = (item) => {
  return (
    <TouchableOpacity style={{flex:1,width:'100%',paddingTop: 20 }}>  
      <View style={{ flexDirection: 'row', }}>
        <Image style={styles.sach} source={require('../assets/images/image.webp')}></Image>
        <View style={{ padding: 15, justifyContent: 'center' }}>
          <Text style={{
            fontSize: 12,
            fontWeight: '400',
            fontStyle: 'normal',
            color: '#6b73ba'
          }}>{item.category}</Text>
          <Text style={{
            fontSize: 16,
            fontWeight: '600',
            fontStyle: 'normal',
            color: '#374B87'
          }}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ItemBook

const styles = StyleSheet.create({
  sach: {
    width: 55,
    height: 85,
    borderRadius: 8,
  }
})