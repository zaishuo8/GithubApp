import React, { Component } from 'react';
import { View, Button, Image, StyleSheet, Text, ScrollView, CheckBox, TouchableOpacity } from 'react-native';
import AsyncStorageUtils from '../utils/AsyncStorageUtils';

export default class CustomKeyPage extends Component{
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            title: 'CustomKey',
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
    constructor(props){
        super(props);
        this.state = {
            keys: []
        }
    }
    _handleSave(){
        AsyncStorageUtils.save('keys', JSON.stringify(this.state.keys))
            .then(()=>{this.props.navigation.navigate('HomePage')})
    }
    _renderView(){
        if (!this.state.keys || this.state.keys.length === 0) return null;
        let returnView = [];
        this.state.keys.forEach((item, index) => {
            returnView.push(
                <View key={index}>
                    <TouchableOpacity
                        style={{
                            paddingTop: 8,
                            paddingBottom: 6,
                            marginTop: 10,
                            marginBottom: 10,
                            marginLeft: 20,
                            marginRight: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 5,
                            backgroundColor: item.checked ? '#6495ED' : 'gray',
                        }}
                        onPress={() => {
                            let newKeys = Object.assign([], this.state.keys);
                            newKeys[index].checked = !newKeys[index].checked;
                            this.setState({keys: newKeys});
                        }}
                    >
                        <Text style={{fontSize: 18, color: 'white'}}>{item.name}</Text>
                    </TouchableOpacity>
                </View>
            )
        });
        return returnView;
    }
    render(){
        return(
            <View>
                <ScrollView>
                    { this._renderView() }
                </ScrollView>
            </View>
        )
    }
    componentDidMount(){
        // 通过 navigation.setParams 方法，讲 screen 中的参数、方法传递到 header 中去
        this.props.navigation.setParams({ handleSave: this._handleSave.bind(this) });
        AsyncStorageUtils.get('keys')
            .then((value) => {this.setState({keys: (JSON.parse(value))})});
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