import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Button = ({ onPress, name }) => (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Ionicons name={name} size={25} color="#333" />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        backgroundColor: '#dedede',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Button;