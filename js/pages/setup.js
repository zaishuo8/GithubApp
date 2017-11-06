import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import WelcomePage from "./WelcomePage";
import HomePage from "./HomePage";

function setup() {
    // 进行一些初始化配置
    const Root = StackNavigator({
        WelcomePage: {
            screen: WelcomePage
        },
        HomePage: {
            screen: HomePage,
        }
    },{
        headerMode: 'none'
    });

    return <Root/>
}

module.exports = setup;