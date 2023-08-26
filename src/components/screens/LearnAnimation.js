import { StyleSheet, Text, View, Animated, SafeAreaView ,ScrollView} from 'react-native'
import React, { useRef } from 'react'

const LearnAnimation = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView>
      <Animated.View
        style={{
          width:'100%',
          backgroundColor:'green',
          opacity:animatedValue.interpolate({
            inputRange:[0,10,100],
            outputRange:[1,0.5,0]
          }),
          height:animatedValue.interpolate({
            inputRange:[0,1000],
            outputRange:[100,0]
          })
        }}
      />
      <ScrollView 
      onScroll={(e)=>{animatedValue.setValue(e.nativeEvent.contentOffset.y)}}
      scrollEventThrottle={16}
      >
        <View style={{height:1000}}></View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LearnAnimation

const styles = StyleSheet.create({})