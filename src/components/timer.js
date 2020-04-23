import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import moment from 'moment';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Button from './button';

const Timer = () => {
    const [millis, setMillis] = useState(0);
    const [intervalId, setIntervalId] = useState();
    const [isStopped, setIsStopped] = useState(false);
    const [timerName, setTimerName] = React.useState('');

    const start = () => {
        // set milliseconds equal to millis so 
        // it will persist once its stopped.
        let milliseconds = millis;
        setIsStopped(false);
        const clockInterval = setInterval(()=>{
            milliseconds = milliseconds + 1000;
            setMillis(milliseconds);
        }, 1000);
        setIntervalId(clockInterval);
    }

    const stop = () => {
        if (isStopped) {
            setMillis(0);
            setIsStopped(false);
        } else {
            clearInterval(intervalId);
            setIsStopped(true);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput 
                value={timerName}
                onChangeText={text => setTimerName(text)}
                placeholder="Set a name"
                placeholderTextColor="#444"
                style={styles.timerName}
            />
            <View style={styles.timerView}>
            { millis === 0 ?
                <Text style={styles.time}>00:00:00</Text> :
                <Animatable.Text animation={isStopped ? 'pulse' : null} iterationCount='infinite' style={styles.time}>
                    {moment.utc(millis).format("HH:mm:ss")}
                </Animatable.Text>
            }
            </View>
            <View style={styles.btnView}>
                <Button name="ios-play" onPress={() => start()} />
                <Button name={isStopped ? "ios-trash" : "ios-pause"} onPress={() => stop()} />
            </View>
        </View>
    )
};  

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20,
    },
    timerView: {
        paddingBottom: 0
    },
    time: {
        fontFamily: 'Fjalla',
        color: '#fff',
        fontSize: 50
    },
    btnView: {
        flexDirection: 'row',
        width: 120,
        justifyContent: 'space-between'
    },
    timerName: {
        color: '#ddd',
        fontFamily: 'Fjalla'
    }
})

export default Timer;