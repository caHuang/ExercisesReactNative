import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; 

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button 
                    title='Go to Details'
                    onPress={() => this.props.navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: 'anything you want here.',
                    })}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('otherParam', 'A Nested Details Screen'),
        };
    };

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title='Go to Details... again'
                    onPress={() => this.props.navigation.push('Details', {
                        itemId: Math.floor(Math.random() * 100),
                    })}
                />
                <Button 
                    title='Update the title'
                    onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
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
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}