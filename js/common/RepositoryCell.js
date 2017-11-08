import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorageUtils from "../utils/AsyncStorageUtils";

export default class RepositoryCell extends Component{
    constructor(props){
        super(props);
        this.state = {
            isFavourite: false,
        }
    }
    favouriteImage(){
        if (this.state.isFavourite){
            return(
                <Image
                    style={{height: 22, width: 22, tintColor: '#6495ED'}}
                    source={require('../../res/images/ic_star.png')}
                />
            )
        }else {
            return(
                <Image
                    style={{height: 22, width: 22}}
                    source={require('../../res/images/ic_unstar_navbar.png')}
                />
            )
        }
    }
    render(){
        let item = this.props.item;
        return(
            <TouchableOpacity onPress={() => this.props.handlePress(item.svn_url)}>
                <View style={styles.cell_container}>
                    <Text style={styles.title}>{item.full_name}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.row}>
                        <View style={styles.row}>
                            <Text>Author:</Text>
                            <Image
                                style={{height: 22, width: 22}}
                                source={{uri: item.owner.avatar_url}}
                            />
                        </View>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                            <Text>Star:</Text>
                            <Text>{item.stargazers_count}</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            if (this.state.isFavourite){
                                this.setState({isFavourite: !this.state.isFavourite});
                                AsyncStorageUtils.get('favourite')
                                    .then((favouriteArr) => {
                                        let favouriteArrJSON = JSON.parse(favouriteArr);
                                        let index;
                                        for (let i = 0; i < favouriteArrJSON.length; i++){
                                            if (favouriteArrJSON[i].id.toString() === item.id.toString()){
                                                index = i;
                                                break;
                                            }
                                        }
                                        favouriteArrJSON.splice(index, 1);
                                        AsyncStorageUtils.save('favourite', JSON.stringify(favouriteArrJSON));
                                    });
                            }else {
                                this.setState({isFavourite: !this.state.isFavourite});
                                AsyncStorageUtils.get('favourite')
                                    .then((favouriteArr) => {
                                        let favouriteArrJSON = JSON.parse(favouriteArr);
                                        favouriteArrJSON.push(item);
                                        AsyncStorageUtils.save('favourite', JSON.stringify(favouriteArrJSON));
                                    });
                            }
                        }}>
                            {this.favouriteImage()}
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    componentDidMount(){
        // 判断是否收藏
        let item = this.props.item;
        AsyncStorageUtils.get('favourite')
            .then((favouriteArr) => {
                let favouriteArrJSON = JSON.parse(favouriteArr);
                for (let i = 0; i < favouriteArrJSON.length; i++){
                    if (favouriteArrJSON[i].id.toString() === item.id.toString()){
                        this.setState({
                            isFavourite: true
                        });
                        return;
                    }
                }
            });
    }
}

const styles = StyleSheet.create({
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        marginBottom: 2,
        color: '#212121',
    },
    description: {
        fontSize: 14,
        marginBottom: 2,
        color: '#757575'
    },
    cell_container: {
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 3,
        borderColor: '#dddddd',
        borderWidth: 0.5,
        borderRadius: 2,
        shadowColor: 'gray',
        shadowOffset: {width:0.5, height: 0.5},
        shadowOpacity: 0.4,
        shadowRadius: 1,
        elevation:2
    },
});