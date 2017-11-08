import React, {Component} from 'react';
import { WebView, Text, Button, View, Image } from 'react-native';

export default class DetailPage extends Component{
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return({
            title: 'Detail',
            headerStyle: { backgroundColor: '#6495ED' },
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white',
            headerLeft: (
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../res/images/ic_back.png')}
                               style={{tintColor: 'white', height: 16, width: 16}}/>
                        <Button
                            color='white'
                            title = 'Back'
                            onPress={ params.goBack ? params.goBack : () => null }
                        />
                    </View>
                    <Button
                        color='white'
                        title = 'Close'
                        onPress={ () => navigation.goBack() }
                    />
                </View>
            )
        });
    };
    constructor(props){
        super(props);
        this.state = {
            url: this.props.navigation.state.params.url,
            canGoBack: false,
            title: ''
        }
    }
    render(){
        return(
            <WebView
                ref='detailWebView'
                source={{uri: this.state.url}}
                startInLoadingState={true}
                onNavigationStateChange={(e) => {
                    this.setState({
                        canGoBack: e.canGoBack,
                        title: e.title
                    });
                }}
            />
        )
    }
    _goBack(){
        if (this.state.canGoBack){
            this.refs.detailWebView.goBack();
        }else{
            this.props.navigation.goBack();
        }
    }
    componentDidMount(){
        // 通过 navigation.setParams 方法，讲 screen 中的参数、方法传递到 header 中去
        this.props.navigation.setParams({ goBack: this._goBack.bind(this) });
    }
}