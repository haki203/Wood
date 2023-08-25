import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../components/screens/LoginScreen';
import HomeScreen from '../components/screens/HomeScreen';
import FavouriteScreen from '../components/screens/FavouriteScreen';
import HotScreen from '../components/screens/HotScreen';
import LibraryScreen from '../components/screens/LibraryScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import PlayScreen from '../components/screens/PlayScreen';
import { connect } from 'react-redux';
import ScreenWrapper from '../components/screens/ScreenWrapper';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Users = () => {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}

const Mains = () => {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
        </Stack.Navigator>

    )
}

const Home = ({ scrollY }) => {
    const isTabVisibleRedux = useSelector(state => state.scroll.isTabVisible);
    const [isTabVisible, setIsTabVisible] = useState(isTabVisibleRedux);
    // Sử dụng useEffect để theo dõi thay đổi của isTabVisible trong Redux
    useEffect(() => {
        setIsTabVisible(isTabVisibleRedux);
    }, [isTabVisibleRedux]);
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#ff8000',
                headerShown: false,
                color: 'red',
                tabBarLabelStyle: { fontSize: 15 },
                tabBarStyle: { height: 60, borderRadius: 20 },
            })}
        >
            <Tab.Screen
                name="Trang chủ"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={30} />
                    ),
                    tabBarStyle: {
                        display: isTabVisible,
                    },
                }}
            >
                {() => (
                    <ScreenWrapper>
                        <Play />
                    </ScreenWrapper>
                )}
            </Tab.Screen>
            <Tab.Screen
                name="Yêu thích"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" color={color} size={30} />
                    ),
                }}
            >
                {() => (
                    <ScreenWrapper>
                        <FavouriteScreen />
                    </ScreenWrapper>
                )}
            </Tab.Screen>
            <Tab.Screen
                name="Sách hot"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="fire" color={color} size={30} />
                    ),
                }}
            >
                {() => (
                    <ScreenWrapper>
                        <FavouriteScreen />
                    </ScreenWrapper>
                )}
            </Tab.Screen>

            <Tab.Screen
                name="Thư viện"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="bookmark" color={color} size={30} />
                    ),
                }}
            >
                {() => (
                    <ScreenWrapper>
                        <FavouriteScreen />
                    </ScreenWrapper>
                )}
            </Tab.Screen>

        </Tab.Navigator>

    )

}
const Play = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.ModalSlideFromBottomIOS, // Sử dụng animation slide-up
            }}
        >
            <Stack.Screen name="Home">
                {props => (
                    <ScreenWrapper>
                        <HomeScreen {...props} />
                    </ScreenWrapper>
                )}
            </Stack.Screen>
            <Stack.Screen name="Play">
                {props => (
                    <ScreenWrapper>
                        <PlayScreen {...props} />
                    </ScreenWrapper>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
};
const AppNavigator = () => {

    return (
        <>
            <Home />
        </>
    )
}
const mapStateToProps = (state) => ({
    isTabVisible: state.isTabVisible,
});
export default connect(mapStateToProps)(AppNavigator);

const styles = StyleSheet.create({
    iconTab: { width: 30, height: 29 }
})