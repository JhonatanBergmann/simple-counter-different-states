import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import { useCounter } from '../contexts/CounterContext'

export default function CounterIncrement() {

  const {
    counterIncrement,
    setCounterIncrement
  } = useCounter()

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.button}
          onPress={() => { setCounterIncrement(counterIncrement + 1) }}>
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