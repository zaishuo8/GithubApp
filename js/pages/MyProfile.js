import React, { Component } from 'react';
import { View, Button, Image, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';

export default class MyProfile extends Component{
    static navigationOptions = {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../res/images/ic_my.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        )
    };
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <ScrollView>
                    {/*github app*/}
                    <TouchableOpacity>
                        <View style={[styles.item, {height: 90}]}>
                            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                                <Image source={require('../../res/images/ic_trending.png')}
                                       style={[{width: 40, height: 40, marginRight: 10, tintColor: '#6495ED'}]}/>
                                <Text>GitHub Popular</Text>
                            </View>
                            <TiaoZhuanIcon/>
                        </View>
                    </TouchableOpacity>

                    <View style={{height: 20}}/>

                    {/*Custom Subscription*/}
                    <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('CustomKeyPage')}}>
                        <View style={[styles.item, {height: 45}]}>
                            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                                <Image source={require('../../res/images/ic_custom_language.png')}
                                       style={[{width: 20, height: 20, marginRight: 10, tintColor: '#6495ED'}]}/>
                                <Text>Custom Subscription</Text>
                            </View>
                            <TiaoZhuanIcon/>
                        </View>
                    </TouchableOpacity>

                    <View style={{height: 1}}/>

                    {/*Sort Subscription*/}
                    <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('SortKeysPage')}}>
                        <View style={[styles.item, {height: 45}]}>
                            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                                <Image source={require('../../res/images/ic_swap_vert.png')}
                                       style={[{width: 20, height: 20, marginRight: 10, tintColor: '#6495ED'}]}/>
                                <Text>Sort Subscription</Text>
                            </View>
                            <TiaoZhuanIcon/>
                        </View>
                    </TouchableOpacity>

                    <View style={{height: 20}}/>

                    {/*Custom Tag*/}
                    <TouchableOpacity>
                        <View style={[styles.item, {height: 45}]}>
                            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                                <Image source={require('../../res/images/ic_custom_language.png')}
                                       style={[{width: 20, height: 20, marginRight: 10, tintColor: '#6495ED'}]}/>
                                <Text>Custom Tag</Text>
                            </View>
                            <TiaoZhuanIcon/>
                        </View>
                    </TouchableOpacity>

                    <View style={{height: 1}}/>

                    {/*Sort Tag*/}
                    <TouchableOpacity>
                        <View style={[styles.item, {height: 45}]}>
                            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                                <Image source={require('../../res/images/ic_swap_vert.png')}
                                       style={[{width: 20, height: 20, marginRight: 10, tintColor: '#6495ED'}]}/>
                                <Text>Sort Tag</Text>
                            </View>
                            <TiaoZhuanIcon/>
                        </View>
                    </TouchableOpacity>

                    <View style={{height: 1}}/>

                    {/*Remove Tag*/}
                    <TouchableOpacity>
                        <View style={[styles.item, {height: 45}]}>
                            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                                <Image source={require('../../res/images/ic_remove.png')}
                                       style={[{width: 20, height: 20, marginRight: 10, tintColor: '#6495ED'}]}/>
                                <Text>Remove Tag</Text>
                            </View>
                            <TiaoZhuanIcon/>
                        </View>
                    </TouchableOpacity>

                    <View style={{height: 20}}/>

                    {/*Custom Theme*/}
                    <TouchableOpacity>
                        <View style={[styles.item, {height: 45}]}>
                            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                                <Image source={require('../../res/images/ic_view_quilt.png')}
                                       style={[{width: 20, height: 20, marginRight: 10, tintColor: '#6495ED'}]}/>
                                <Text>Custom Theme</Text>
                            </View>
                            <TiaoZhuanIcon/>
                        </View>
                    </TouchableOpacity>

                    <View style={{height: 1}}/>

                    {/*Author*/}
                    <TouchableOpacity>
                        <View style={[styles.item, {height: 45}]}>
                            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                                <Image source={require('../../res/images/ic_custom_language.png')}
                                       style={[{width: 20, height: 20, marginRight: 10, tintColor: '#6495ED'}]}/>
                                <Text>Author</Text>
                            </View>
                            <TiaoZhuanIcon/>
                        </View>
                    </TouchableOpacity>

                    <View style={{height: 1}}/>

                    {/*Setting*/}
                    <TouchableOpacity>
                        <View style={[styles.item, {height: 45}]}>
                            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                                <Image source={require('../../res/images/ic_swap_vert.png')}
                                       style={[{width: 20, height: 20, marginRight: 10, tintColor: '#6495ED'}]}/>
                                <Text>Setting</Text>
                            </View>
                            <TiaoZhuanIcon/>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

class TiaoZhuanIcon extends Component{
    render(){
        return(
            <Image source={require('../../res/images/ic_tiaozhuan.png')}
                   style={[{
                       opacity: 1,
                       marginRight: 10,
                       height: 22,
                       width: 22,
                       alignSelf: 'center',
                       tintColor: '#6495ED'
                   }]}/>
        )
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
    },
    item: {
        backgroundColor: 'white',
        padding: 10, height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    groupTitle: {
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 12,
        color: 'gray'

    },
});