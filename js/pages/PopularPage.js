import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput } from 'react-native';
import HttpUtils from '../utils/HttpUtils';

export default class PopularPage extends Component{
    static navigationOptions = {
        tabBarLabel: 'Popular',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../res/images/ic_polular.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        )
    };
    constructor(props){
        super(props);
        this.state = {
            text: '',
            result: ''
        }
    }
    onLoad(){
        // https://api.github.com/search/repositories?q=java&sort=stars
        let url = `https://api.github.com/search/repositories?q=${this.state.text}&sort=stars`;
        HttpUtils.get(url)
            .then(json => this.setState({result: JSON.stringify(json)}))
            .catch(err => this.setState({result: JSON.stringify(err)}))
    }
    render(){
        return(
            <View style={styles.container}>
                <TextInput
                    style={{height: 40, backgroundColor: 'white'}}
                    onChangeText={(value) => {this.setState({text: value})}}
                />
                <Button
                    title='获取数据'
                    onPress={this.onLoad.bind(this)}
                />
                <Text style={{flex: 1}}>{this.state.result}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tips: {
        fontSize: 30
    },
    icon: {
        width: 26,
        height: 26,
    }
});