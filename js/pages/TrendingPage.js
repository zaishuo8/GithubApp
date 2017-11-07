import React, { Component } from 'react';
import { TextInput, Button, Image, StyleSheet, View, Text, AsyncStorage } from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast';

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
    constructor(props){
        super(props);
        this.state = {
            key: '',
            value: ''
        }
    }
    onSave(){
        AsyncStorage.setItem(this.state.key, this.state.value, (err) => {
            if (!err){
                this.refs.toast.show('保存成功', DURATION.LENGTH_SHORT);
            }else {
                this.refs.toast.show('保存失败', DURATION.LENGTH_SHORT);
            }
        });
    }
    onGet(){
        AsyncStorage.getItem(this.state.key, (err, value) => {
            if (!err){
                this.refs.toast.show(value, DURATION.LENGTH_SHORT);
            }else {
                this.refs.toast.show('取出失败', DURATION.LENGTH_SHORT);
            }
        });
    }
    onRemove(){
        AsyncStorage.removeItem(this.state.key, (err) => {
            if (!err){
                this.refs.toast.show('移除成功', DURATION.LENGTH_SHORT);
            }else {
                this.refs.toast.show('移除失败', DURATION.LENGTH_SHORT);
            }
        })
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Text>Key</Text>
                <TextInput
                    style={{height: 30, backgroundColor: 'white'}}
                    onChangeText={(value)=>this.setState({key: value})}
                />
                <Text>Value</Text>
                <TextInput
                    style={{height: 30, backgroundColor: 'white'}}
                    onChangeText={(value)=>this.setState({value: value})}
                />
                <Button
                    onPress={this.onSave.bind(this)}
                    title='保存'
                />
                <Button
                    onPress={this.onGet.bind(this)}
                    title='取出'
                />
                <Button
                    onPress={this.onRemove.bind(this)}
                    title='移除'
                />
                <Toast
                    ref='toast'
                    position='center'
                    style={{
                        backgroundColor: 'gray',
                    }}
                />
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