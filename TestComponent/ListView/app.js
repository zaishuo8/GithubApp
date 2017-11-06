import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image, TouchableOpacity,
    RefreshControl} from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast';

let data = {
    "result": [
        {
            key: 1,
            email: "456565@qq.com",
            fullName: "张三"
        },
        {
            key: 2,
            email: "456565@qq.com",
            fullName: "张三"
        },
        {
            key: 3,
            email: "456565@qq.com",
            fullName: "张三"
        },
        {
            key: 4,
            email: "456565@qq.com",
            fullName: "张三"
        },
        {
            key: 5,
            email: "456565@qq.com",
            fullName: "张三"
        },
        {
            key: 6,
            email: "456565@qq.com",
            fullName: "张三"
        },
        {
            key: 7,
            email: "456565@qq.com",
            fullName: "张三"
        },
        {
            key: 8,
            email: "456565@qq.com",
            fullName: "张三"
        },
        {
            key: 9,
            email: "456565@qq.com",
            fullName: "张三"
        },
        {
            key: 10,
            email: "456565@qq.com",
            fullName: "张三"
        },
        {
            key: 11,
            email: "456565@qq.com",
            fullName: "张三"
        },
        {
            key: 12,
            email: "456565@qq.com",
            fullName: "张三"
        },
        {
            key: 13,
            email: "456565@qq.com",
            fullName: "张三"
        },
        {
            key: 14,
            email: "456565@qq.com",
            fullName: "张三"
        },
        {
            key: 15,
            email: "456565@qq.com",
            fullName: "张三"
        },
        {
            key: 16,
            email: "456565@qq.com",
            fullName: "张三"
        },
        {
            key: 17,
            email: "456565@qq.com",
            fullName: "张三"
        },
        {
            key: 18,
            email: "456565@qq.com",
            fullName: "张三"
        },
        {
            key: 19,
            email: "456565@qq.com",
            fullName: "张三"
        },
        {
            key: 20,
            email: "456565@qq.com",
            fullName: "张三"
        },
    ]
};

class ListBody extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: data.result,
            refreshing: true
        }
    }

    renderRow(item){
        return(
            <View style={styles.row}>
                <TouchableOpacity onPress={()=>{this.refs.toast.show(`you clicked ${item.key}!`, DURATION.LENGTH_SHORT)}}>
                    <Text style={styles.tips}>{item.fullName}</Text>
                    <Text style={styles.tips}>{item.email}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _separator(){
        return(
            <View style={styles.line}/>
        );
    }

    _footer(){
        return <Image style={{width: 400, height: 100}} source={{uri: 'https://car1.autoimg.cn/car/upload/2015/4/20/1024x0_1_q87_20150420234946693-1112.jpg'}}/>
    }

    _onRefresh(){
        this.setState({refreshing: true});
        setTimeout(()=>{
            this.setState({
                refreshing: false
            })
        }, 2000)
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => this.renderRow(item)}
                    ItemSeparatorComponent={this._separator}
                    ListFooterComponent={this._footer}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                        />
                    }
                />
                <Toast ref='toast'/>
            </View>
        )
    }

    componentDidMount(){
        this._onRefresh();
    }
}

const HomeScreen = ({ navigation }) => (
    <View style={{flex: 1}}>
        <ListBody/>
    </View>
);

const ListViewMain = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'ListView',
        }
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    tips: {
        fontSize: 18
    },
    row: {
        height: 50
    },
    line: {
        height: 1,
        backgroundColor: 'black'
    }
});

export default ListViewMain;



























