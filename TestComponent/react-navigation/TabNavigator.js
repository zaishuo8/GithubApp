import { TabNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import React from 'react';

const HomeScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
    </View>
);

const ProfilesScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
    </View>
);

const RootTabs = TabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
        }
    },
    Profile: {
        screen: ProfilesScreen,
        navigationOptions: {
            tabBarLabel: 'Profile'
        }
    }
});

export default RootTabs;





























