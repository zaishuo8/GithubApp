import React, { Component } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

export default class MyProfile extends Component{
    static navigationOptions = {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../res/images/ic_my.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        )
    };
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Button
                    title='自定义标签页'
                    onPress={()=>{ this.props.navigation.navigate('CustomKeyPage') }}
                />
                <Button
                    title='标签排序页'
                    onPress={()=>{ this.props.navigation.navigate('SortKeysPage') }}
                />
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