import React, { Component } from 'react';
import { TextInput, Button, Image, StyleSheet, View, Text } from 'react-native';

export default class TrendingPage extends Component{
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
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 22}}>Trending!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    }
});