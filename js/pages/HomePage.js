import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import PopularPage from "./PopularPage";

class Trending extends Component{
    static navigationOptions = {
        tabBarLabel: 'Trending',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../res/images/ic_trending.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        )
    };
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20}}>Trending</Text>
            </View>
        );
    }
}
class Favorite extends Component{
    static navigationOptions = {
        tabBarLabel: 'Favorite',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../res/images/ic_favorite.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        )
    };
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20}}>Favorite</Text>
            </View>
        );
    }
}
class Profile extends Component{
    static navigationOptions = {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../res/images/ic_my.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        )
    };
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20}}>Profile</Text>
            </View>
        );
    }
}

const HomePage = TabNavigator({
    Popular: {
        screen: PopularPage
    },
    Trending: {
        screen: Trending
    },
    Favorite: {
        screen: Favorite
    },
    Profile: {
        screen: Profile
    }
}, {
    tabBarOptions: {
        activeTintColor: '#6495ED',
    }
});

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    }
});

export default HomePage;