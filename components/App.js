import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeView from './HomeView';
const Routing = StackNavigator({
    HOME: { screen: HomeView },
},
{
    initialRouteName: 'HOME',
});
export default Routing
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Routing from './components/Routing';
export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Routing />
            </View>
        );
    }
}