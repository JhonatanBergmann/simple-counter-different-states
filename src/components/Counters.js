
import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import { setStatusBarHidden } from 'expo-status-bar' /* EXPO STATUSBAR HIDDEN */

import { connect } from 'react-redux'
import { setCounterAdd, setCounterSubtract } from '../store/actions/countersActions'

function Counters(props) {

  const { counterAdd, counterSubtract } = props

  setStatusBarHidden(true) /* EXPO STATUSBAR HIDDEN */

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.button}
          onPress={() => { props.setStateCounterAdd(counterAdd + 1) }}>
          <Text style={styles.counterText}>{counterAdd}</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 10 }}>Contador 1 - Adicionando</Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.button}
          onPress={() => { props.setCounterSubtract(counterSubtract - 1) }}>
          <Text style={styles.counterText}>{counterSubtract}</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 10 }}>Contador 2 - Subtraindo</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: '#865ee5'
  },
  counterText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 50
  }
})

function mapStateToProps(state) {
  return {
    counterAdd: state.counter1.counterAdd,
    counterSubtract: state.counter2.counterSubtract
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setStateCounterAdd(newCounterAdd) {
      const action = setCounterAdd(newCounterAdd)
      dispatch(action)
    },
    setCounterSubtract(newCounterSubtract) {
      const action = setCounterSubtract(newCounterSubtract)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counters) 