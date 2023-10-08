import React, { useEffect } from 'react';
import { StyleSheet, Text, View, LogBox, Image, } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import User from './components/screens/user/User';
import firebase from '@react-native-firebase/app';
const credentials = {
  clientId: '1:421293673425:android:7dec49524bbbc7fed1aef0',
  appId: '1:421293673425:android:7dec49524bbbc7fed1aef0',
  apiKey: 'AIzaSyBNHRRUMNzcm5Bm-Pk_wvw2C7pTjXLrtyE',
  databaseURL: 'https://worm-70d77.firebaseio.com',
  storageBucket: 'worm-70d77.appspot.com',
  messagingSenderId: '421293673425',
  projectId: 'worm-70d77',
};
const config = {
  name: 'worm',
};
const initializeFirebase = async () => {
  await firebase.initializeApp(credentials, config);
};
const App = () => {
  useEffect(() => {
    initializeFirebase(); // Gọi hàm async ở đây
  }, []);
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
});

export default App;