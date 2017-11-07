import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class SortKeysPage extends Component{
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            title: 'SortKeys',
            headerStyle: { backgroundColor: '#6495ED' },
            headerTitleStyle: { color: 'white' },
            headerLeftStyle: { color: 'white' },
            headerTintColor: 'white',
            headerRight: (
                <Button
                    color='white'
                    title = 'Save'
                    onPress={ params.handleSave ? params.handleSave : () => null }
                />
            )
        }
    };
    render(){
        return(
            <Text>标签排序</Text>
        )
    }
}