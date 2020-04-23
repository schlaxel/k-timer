import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Button = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Ionicons name="ios-play" size={32} color="#333" />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        width: 46,
        height: 46,
        backgroundColor: '#dedede',
        borderRadius: 23,
        paddingLeft: 5,
        paddingTop: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Button;