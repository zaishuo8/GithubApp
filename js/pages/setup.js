import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import WelcomePage from "./WelcomePage";
import HomePage from "./HomePage";
import CustomKeyPage from "./CustomKeyPage";
import AsyncStorageUtils from "../utils/AsyncStorageUtils";
import defaultKeys from '../../res/data/key.json';
import SortKeysPage from "./SortKeysPage";
import DetailPage from "./DetailPage";

function setup() {
    // 进行一些初始化配置
    const Root = StackNavigator({
        /*WelcomePage: {
            screen: WelcomePage
        },*/
        HomePage: {
            screen: HomePage,
            navigationOptions: {
                title: 'Home',
                headerLeft: null,
                headerStyle: { backgroundColor: '#6495ED' },
                headerTitleStyle: { color: 'white' },
            }
        },
        CustomKeyPage: { screen: CustomKeyPage },
        SortKeysPage: { screen: SortKeysPage },
        DetailPage: { screen: DetailPage },
    });

    // 初始化默认 keys
    AsyncStorageUtils.get('keys')
        .then((value) => {
            if (!value) AsyncStorageUtils.save('keys', JSON.stringify(defaultKeys));
        });

    return <Root/>
}

module.exports = setup;