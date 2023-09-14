import React from 'react';
import { StyleSheet, Text, View, LogBox, Image, } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import SwipeToChangeBackground from './components/screens/SwipeToChangeBackground';
import HotScreen from './components/screens/hot/HotScreen';
import SearchBook from './components/screens/search/SearchBook';
import Detail from './components/screens/detail/Detail';
import ProfileInputScreen from './components/screens/user/ProfileInputScreen';
import ScreenWrapper from './components/screens/ScreenWrapper';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
const App = () => {
  return (
    <Provider store={store}>
      <LinearGradient style={styles.container} colors={['#e6f2ff', '#cce6ff']}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </LinearGradient>
    </Provider>

    // <Provider store={store}>
    //   <ScreenWrapper >
    //     <View  style={{flex:1,}}><ProfileInputScreen/></View>
    //   </ScreenWrapper>
    // </Provider>
    //<LearnAnimation/>
    //<MomoHeader/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
});
export default App;