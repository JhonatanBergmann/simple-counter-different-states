import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import { connect } from 'react-redux'
import { setCounterIncrement } from '../store/actions/countersActions'

function CounterIncrement(props) {

  const { counterIncrement } = props

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.button}
          onPress={() => { props.setCounterIncrement(counterIncrement + 1) }}>
          <Text style={styles.counterText}>{counterIncrement}</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 10 }}>Contador 1 - Adicionando</Text>
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
    counterIncrement: state.counter1.counterIncrement
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCounterIncrement(newCounterIncrement) {
      const action = setCounterIncrement(newCounterIncrement)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterIncrement) 