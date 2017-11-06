import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HomePage from "./HomePage";

export default class WelcomePage extends Component{
    static navigationOptions = {
        title: 'WelcomePage'
    };
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20}}>I am WelcomePage</Text>
            </View>
        )
    }
    componentDidMount(){
        this.timer = setTimeout(()=>{
            this.props.navigation.navigate('HomePage')
        }, 2000)
    }
    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
    }
}