import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './button';

const BottomNav = ({ addTimer, addCountdown }) => (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <Button onPress={addCountdown} name="md-hourglass" />
            <Button onPress={addTimer} name="md-watch" />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 90,
        backgroundColor: '#333',
        width: '100%'
    },
    wrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1
    }
});

export default BottomNav;