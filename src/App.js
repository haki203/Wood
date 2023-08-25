import React from 'react';
import { StyleSheet, Text, View, LogBox, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import LinearGradient from 'react-native-linear-gradient';
import { Provider } from 'react-redux';
import store from './store/store';
import InfiniteScrollFlatList from './components/screens/InfiniteScrollFlatList';

const App = () => {
  return (
    <Provider store={store}>
      <LinearGradient style={styles.container} colors={['#6fa8dc', '#cfe2f3']}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </LinearGradient>
    </Provider>
    // <Provider store={store}>
    //   <InfiniteScrollFlatList />

    // </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
});
export default App;