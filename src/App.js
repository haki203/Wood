import React from 'react';
import { StyleSheet, Text, View, LogBox, Image } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import SwipeToChangeBackground from './components/screens/SwipeToChangeBackground';
import HotScreen from './components/screens/hot/HotScreen';
import SearchBook from './components/screens/search/SearchBook';
import Detail from './components/screens/detail/Detail';
import ProfileInputScreen from './components/screens/user/ProfileInputScreen';

const App = () => {
  return (
    // <Provider store={store}>
    //   <LinearGradient style={styles.container} colors={['#e6f2ff', '#cce6ff']}>
    //     <NavigationContainer>
    //       <AppNavigator />
    //     </NavigationContainer>
    //   </LinearGradient>
    // </Provider>

    <Provider store={store}>
          <ProfileInputScreen/>

    </Provider>
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