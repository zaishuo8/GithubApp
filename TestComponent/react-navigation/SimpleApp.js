import React from 'react';
import { AppRegistry, Text, StyleSheet, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreenNavigator from "./NestNavigate";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

class HomeScreen extends React.Component{
    static navigationOptions = {
        title: 'Welcome'
    };

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Text>Hello Navigation!</Text>
                <Button
                    title='Chat with Lucy'
                    onPress={() => navigate('Chat', {user: 'Lucy'})}
                />
            </View>
        )
    }
}

class ChatScreen extends React.Component{
    static navigationOptions = ({ navigation }) => {
        const { state, setParams } = navigation;
        const isInfo = state.params.mode === 'info';
        const { user } = state.params;
        return {
            title: isInfo ? `${user}'s info` : `Chat with ${user}`,
            headerRight: (
                <Button
                    title = {isInfo ? 'Done' : `${user}'s info`}
                    onPress={() => setParams({mode: isInfo ? 'none' : 'info'})}
                />
            )
        }
    };

    render(){
        const { params } = this.props.navigation.state;
        return(
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        )
    }
}

const SimpleApp = StackNavigator({
    Home: {
        screen: MainScreenNavigator,
        navigationOptions: {
            title: 'My Chats'
        }
    },
    Chat: {
        screen: ChatScreen
    }
});

export default SimpleApp;