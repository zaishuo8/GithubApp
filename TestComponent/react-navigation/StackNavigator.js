import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
            title='Go to details'
            onPress={() => navigation.navigate('Details')}
        />
    </View>
);

const DetailsScreen = () => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
    </View>
);

const rootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Home',
        }
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: {
            headerTitle: 'Details',
        }
    }

});

export default rootNavigator;



























