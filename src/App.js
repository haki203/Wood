import React from 'react';
import { StyleSheet, Text, View, LogBox, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import LinearGradient from 'react-native-linear-gradient';
import { Provider } from 'react-redux';
import store from './store/store';
import InfiniteScrollFlatList from './components/screens/InfiniteScrollFlatList';
import LearnAnimation from './components/screens/LearnAnimation';
import MomoHeader from './components/animations/MonoHeader/MonoHeader';

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
    //   <InfiniteScrollFlatList />
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