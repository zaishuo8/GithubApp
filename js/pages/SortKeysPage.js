import React, { Component } from 'react';
import { View, Text, Button, TouchableHighlight, Image } from 'react-native';
import AsyncStorageUtils from "../utils/AsyncStorageUtils";
import SortableListView from 'react-native-sortable-listview';

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
    constructor(props){
        super(props);
        this.state = {
            checkedKeys: [],
            uncheckedKeys: []
        };
    }

    render(){
        let data = this.state.checkedKeys;
        let order = Object.keys(data);
        return(
            <View style={{flex: 1}}>
                <SortableListView
                    style={{ flex: 1 }}
                    data={data}
                    order={order}
                    onRowMoved={e => {
                        order.splice(e.to, 0, order.splice(e.from, 1)[0]);
                        this.forceUpdate();

                        let oldCheckedKeys = Object.assign([], this.state.checkedKeys);
                        oldCheckedKeys.splice(e.to, 0, oldCheckedKeys.splice(e.from, 1)[0]);
                        this.setState({ checkedKeys: oldCheckedKeys });
                    }}
                    renderRow={row => <RowComponent data={row} />}
                />
            </View>
        )
    }
    _handleSave(){
        AsyncStorageUtils.save('keys', JSON.stringify(this.state.checkedKeys.concat(this.state.uncheckedKeys)))
            .then(()=>{this.props.navigation.navigate('HomePage')})
    }
    componentDidMount(){
        // 通过 navigation.setParams 方法，讲 screen 中的参数、方法传递到 header 中去
        this.props.navigation.setParams({ handleSave: this._handleSave.bind(this) });

        AsyncStorageUtils.get('keys')
            .then((value) => {
                this.getCheckedItems(JSON.parse(value));
            })
            .catch(err => {})
    }
    getCheckedItems(allKeys){
        let checkedKeys = [],
            uncheckedKeys = [];
        for (let i = 0; i < allKeys.length; i++){
            let key = allKeys[i];
            if (key.checked){
                checkedKeys.push(key);
            }else {
                uncheckedKeys.push(key);
            }
        }
        this.setState({checkedKeys: checkedKeys, uncheckedKeys: uncheckedKeys});
    }
}

class RowComponent extends React.Component {
    render() {
        return (
            <TouchableHighlight
                underlayColor={'#eee'}
                style={{
                    padding: 15,
                    backgroundColor: '#F8F8F8',
                    borderBottomWidth: 1,
                    borderColor: '#eee',
                }}
                {...this.props.sortHandlers}
            >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../res/images/ic_sort.png')}
                           style={{tintColor: '#6495ED', height: 16, width: 16, marginRight: 10}}/>
                    <Text>{this.props.data.name}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}