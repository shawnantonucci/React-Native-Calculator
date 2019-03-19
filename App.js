/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing
} from "react-native";

export default class App extends Component {
  constructor() {
    super();
    this.RotateValueHolder = new Animated.Value(0);
  }

  componentDidMount() {
    this.StartImageRotateFunction();
  }

  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);
    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear
    }).start(() => this.StartImageRotateFunction());
  }

  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });

    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: 200,
            height: 200,
            transform: [{ rotate: RotateData }]
          }}
          source={{
            uri:
              "https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png"
          }}
        />
        <Text style={styles.text}>Built with React Native :)</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  text: {
    color: 'white',
    fontSize: 24
  }
});
