/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player'; // Import TrackPlayer

// Đăng ký nhiệm vụ của TrackPlayer
TrackPlayer.setupPlayer(); // Gọi hàm setupPlayer() một lần
TrackPlayer.registerPlaybackService(() => require('./service.js')); // Đăng ký dịch vụ

AppRegistry.registerComponent(appName, () => App);