import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

export default function CounterDecrement() {

  const [counterDecrement, setCounterDecrement] = useState(0)

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.button}
          onPress={() => { setCounterDecrement(counterDecrement - 1) }}>
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