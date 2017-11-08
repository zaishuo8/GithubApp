import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import PopularPage from "./PopularPage";
import TrendingPage from "./TrendingPage";
import MyProfile from "./MyProfile";
import FavouritePage from "./FavouritePage";

const HomePage = TabNavigator({
    Popular: {
        screen: PopularPage
    },
    Trending: {
        screen: TrendingPage
    },
    Favorite: {
        screen: FavouritePage
    },
    Profile: {
        screen: MyProfile
    }
}, {
    tabBarOptions: {
        activeTintColor: '#6495ED',
    }
});

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    }
});

export default HomePage;