import React, { useState, useRef } from 'react';
import moment from 'moment';
import { Text, View, StyleSheet } from 'react-native';
import Button from './button';

const Timer = () => {
    const [millis, setMillis] = useState(0);
    const [intervalId, setIntervalId] = useState();
    const [wasStopped, setWasStopped] = useState(false);

    const start = () => {
        let milliseconds = millis;
        const clockInterval = setInterval(()=>{
            milliseconds = milliseconds + 1000;
            setMillis(milliseconds);
        }, 1000);
        setIntervalId(clockInterval);
    }

    const stop = () => {
        clearInterval(intervalId);
        setWasStopped(true);
    }

    return (
        <View style={styles.container}>
            <View style={styles.timerView}>
            { millis === 0 ?
                <Text style={styles.time}>00:00:00</Text> :
                <Text style={styles.time}>{moment.utc(millis).format("HH:mm:ss")}</Text>
            }
            </View>
            <Button onPress={() => start()} />
            <Button onPress={() => stop()} />
        </View>
    )
};  

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    timerView: {
        paddingBottom: 15
    },
    time: {
        fontFamily: 'Fjalla',
        color: '#fff',
        fontSize: 50
    }
})

export default Timer;