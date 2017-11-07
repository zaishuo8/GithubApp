import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, RefreshControl } from 'react-native';
import HttpUtils from '../utils/HttpUtils';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import RepositoryCell from "../common/RepositoryCell";
import AsyncStorageUtils from "../utils/AsyncStorageUtils";

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
            subscribe: []
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <ScrollableTabView
                    renderTabBar={()=><ScrollableTabBar/>}
                    tabBarBackgroundColor='#6495ED'
                    tabBarInactiveTextColor='mintcream'
                    tabBarActiveTextColor='white'
                    tabBarUnderlineStyle={{backgroundColor: '#e7e7e7', height: 2}}
                >
                    {this.state.subscribe.map((item, index) => {
                        return item.checked ? <PopularTab key={index} tabLabel={item.name}/> : null
                    })}
                </ScrollableTabView>
            </View>
        )
    }
    componentDidMount(){
        AsyncStorageUtils.get('keys')
            .then((value)=>{this.setState({subscribe: JSON.parse(value)})})
    }
}

class PopularTab extends Component{
    constructor(props){
        super(props);
        this.state = {
            result: '',
            refreshing: false
        }
    }
    onLoad(){
        this.setState({refreshing: true});
        // https://api.github.com/search/repositories?q=java&sort=stars
        let url = `https://api.github.com/search/repositories?q=${this.props.tabLabel}&sort=stars`;
        HttpUtils.get(url)
            .then(json => {
                this.setState({refreshing: false});
                this.setState({result: json})
            })
            .catch(err => this.setState({result: JSON.stringify(err)}))
    }
    renderRow(item){
        return <RepositoryCell item={item}/>
    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.result.items}
                    renderItem={({item}) => this.renderRow(item)}
                    keyExtractor={(item, index) => index}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onLoad.bind(this)}
                            colors={['#6495ED']}
                            tintColor={'#6495ED'}
                            title={'Loading...'}
                            titleColor={'#6495ED'}
                        />
                    }
                />
            </View>
        )
    }
    componentDidMount(){
        this.onLoad();
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