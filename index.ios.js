// Requiring the react native library
var React = require("react");
var ReactNative = require("react-native");
var TimeFormat = require("minutes-seconds-milliseconds");

// Require all the components that we are going to use
// var Text        = ReactNative.Text;
// var View        = ReactNative.View;
// var AppRegistry = ReactNative.AppRegistry;

var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  TouchableHighlight
} = ReactNative;

// Create a React Component
var Timer = React.createClass({
  getInitialState: function(){
    //return {time: 0, status: "stopped"};
    return {time: 0, startTime: 0, currentTime: 0, status: "stopped"};
  },
  onPressButton: function(){
    //alert("hey");
    // setInterval(function(){
    //   this.setState({time: this.state.time + 1});
    // }.bind(this), 1000);
    console.log(new Date());
    if (this.state.status === "started") {
      clearInterval(this.timerInterval);
      this.setState({status: "stopped", currentTime: this.state.time + this.state.currentTime});
    } else {
      this.setState({status: "started", startTime: new Date()});
      //this.timerInterval = setInterval(() => this.setState({time: this.state.time + 10}), 10);
      this.timerInterval = setInterval(() => this.setState({time: new Date() - this.state.startTime}), 1);
    }
  },
  displayTime: function(){
    if (this.state.status === "stopped") {
      return this.state.currentTime;
    } else {
      return ( this.state.time + this.state.currentTime );
    }
  },
  onReset: function() {
    this.setState({currentTime: 0});
  },
  render: function() {
    var label = this.state.status === "stopped" ? "Start" : "Stop";
    return <View style={styles.container}>
            <Text style={styles.text}>{TimeFormat(this.displayTime())}</Text>
            <TouchableHighlight underlayColor="grey" onPress={this.onPressButton}>
              <Text>{label}</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="grey" onPress={this.onReset}>
              <Text>Reset</Text>
            </TouchableHighlight>
          </View>;
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  text: {
    fontSize: 30
  }
});

// timer is the main application name
// AppRegistry, registers the main component
//AppRegistry.registerComponent("timer", function(){ return Timer});
AppRegistry.registerComponent("timer", () => Timer);


// Register the component

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// class timer extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('timer', () => timer);
