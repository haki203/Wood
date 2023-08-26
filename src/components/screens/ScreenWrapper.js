import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const ScreenWrapper = ({ children }) => {
  return (
    <LinearGradient style={styles.container} colors={['#6fa8dc', 'white']}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="dark-content" />
      {children}
    </LinearGradient>
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:23
  },
});

export default ScreenWrapper;
