// allClocksAreBastards
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SwipeRow } from 'react-native-swipe-list-view';
import Button from './button';

import Timer from './timer';

const AllClocks = ({ clockArr, rmClock, changeText }) => {

    const testFunc = (test) => {

    }

    const renderClocks = () => {
        const renderArr = [];
        clockArr.map((val, index) => {
            val.type === 'timer' ?
            renderArr.push(
                <SwipeRow style={{ width: '100%' }} key={index} leftOpenValue={75} rightOpenValue={-75}>
                    <View style={styles.swipeDelete}>
                        <Button onPress={() => rmClock(index)} name="md-close" />
                        <Button onPress={() => rmClock(index)} name="md-close" />
                    </View>
                    <View style={styles.swipeTimer}>
                        <Timer changeText={changeText} index={index} obj={val} />
                    </View>
                </SwipeRow>
            ) :
            null;
        });
        return renderArr;
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.text}>All Clocks Are Bastards</Text>
            { renderClocks() }
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Fjalla',
        color: '#fff',
        fontSize: 24
    },
    swipeout: {
        width: '100%',
        backgroundColor: '#1e1e1e'
    },
    swipeDelete: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    swipeTimer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#121212',
        width: '100%'
    }
})

export default AllClocks;