import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native';
import AsyncStorageUtils from "../utils/AsyncStorageUtils";
import RepositoryCell from "../common/RepositoryCell";

export default class FavouritePage extends Component{
    static navigationOptions = {
        tabBarLabel: 'Favorite',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../res/images/ic_favorite.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        )
    };
    constructor(props){
        super(props);
        this.state = {
            favouriteArr: [],
            refreshing: false
        }
    }
    navigateToDetail(url){
        this.props.navigation.navigate('DetailPage', {url: url});
    }
    renderRow(item){
        return <RepositoryCell item={item} handlePress={this.navigateToDetail.bind(this)}/>
    }
    render(){
        return(
            <View style={{flex:1}}>
                <FlatList
                    data={this.state.favouriteArr}
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
        );
    }
    onLoad(){
        this.setState({refreshing: true});
        AsyncStorageUtils.get('favourite')
            .then((favouriteArr) => {
                let favouriteArrJSON = JSON.parse(favouriteArr);
                this.setState({
                    refreshing: false,
                    favouriteArr: favouriteArrJSON
                });
            })
    }
    componentDidMount(){
        this.onLoad();
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    }
});