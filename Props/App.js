/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {Image, Text, View} from "react-native";
import React, {Component} from "react";


//get user name with props attribute
class Greeting extends Component {
    render() {
        return (
            <Text> Hello {this.props.name}</Text>
        );
    }
}

export default class Bananas extends Component {
    render() {
        let pic = {
            uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
        };

        return (

            <View>

                {/* Show a imageVview with a custom props /*/}
                <Image source={pic} style={{width: 350, height: 200}}/>

                <Greeting name={'Tairo'}/>
                <Greeting name={'Luceli'}/>
                <Greeting name={'Panicobass'}/>
            </View>
        );
    }
}
