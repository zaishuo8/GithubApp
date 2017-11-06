import { TabNavigator } from 'react-navigation';
import React from 'react';
import { Text, View, Button } from 'react-native';

class RecentChatsScreen extends React.Component{
    static navigationOptions = {
        title: 'Welcome'
    };

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Text>Recently</Text>
                <Button
                    title='Chat with Lucy'
                    onPress={() => navigate('Chat', {user: 'Lucy'})}
                />
            </View>
        )
    }
}

class AllContactsScreen extends React.Component{
    static navigationOptions = {
        title: 'Welcome'
    };

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Text>All</Text>
                <Button
                    title='Chat with Lucy'
                    onPress={() => navigate('Chat', {user: 'Lucy'})}
                />
            </View>
        )
    }
}

const MainScreenNavigator = TabNavigator({
    Recent: { screen: RecentChatsScreen },
    All: { screen: AllContactsScreen }
});

export default MainScreenNavigator;