import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; 

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button 
                    title='Go to Details'
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title='Go to Details... again'
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button 
                    title='Go to Home'
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button 
                    title='Go back'
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button 
                    title='Pop to top'
                    onPress={() => this.props.navigation.popToTop()}
                />
            </View>
        );
    }
}

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
    },
    Details: {
        screen: DetailsScreen,
    },
}, {
    initialRouteName: 'Home',
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}