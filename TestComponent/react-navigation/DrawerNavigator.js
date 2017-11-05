import React from 'react';
import { View, Text, Button } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

const HomeScreen = ({navigation}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
            onPress={()=>{navigation.navigate('DrawerToggle')}}
            title='open drawer'
        />
    </View>
);

const ProfileScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
    </View>
);

const RootDrawer = DrawerNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            drawerLabel: 'Home'
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            drawerLabel: 'Profile'
        }
    },
});

export default RootDrawer;