import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
class HomeView extends Component {
    render() {
        return (
            <LinearGradient colors={['#650aff', '#f4a']} style={styles.container} >
                <Text style={styles.text}>
                    Happy City App
                </Text>
            </LinearGradient>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        paddingBottom: 14,
        color: '#fff',
        fontSize: 24,
    }
});
export default HomeView