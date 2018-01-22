/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {isShowingText: true};

        setInterval(() => {
            this.setState(previousState => {
                return {
                    isShowingText: !previousState.isShowingText
                };
            });
        }, 2000);
    }

    render() {
        let display = this.state.isShowingText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

export default class BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink text={'This text is blinking '}/>
            </View>
        );
    }
}