import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import { connect } from 'react-redux'
import { setCounterDecrement } from '../store/actions/countersActions'

function CounterDecrement(props) {

  const { counterDecrement } = props

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.button}
          onPress={() => { props.setCounterDecrement(counterDecrement - 1) }}>
          <Text style={styles.counterText}>{counterDecrement}</Text>
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
    counterDecrement: state.counter2.counterDecrement
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCounterDecrement(newCounterDecrement) {
      const action = setCounterDecrement(newCounterDecrement)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterDecrement) 