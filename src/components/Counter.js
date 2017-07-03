import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActionCreators from '../actions/CounterActionCreators'

import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class Counter extends Component {
    render () {

        const { counter, increment,
            decrement, incrementServer } = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.number}>{ counter }</Text>
                <Button onPress={() => { increment() }} title="+1"/>
                <Button onPress={() => { decrement() }} title="-1"/>
                <Button onPress={incrementServer} title="Add Random (Server)"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  number: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

function mapStateToProps (state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(CounterActionCreators, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(Counter)