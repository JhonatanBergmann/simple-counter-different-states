import React from 'react'

import CounterProvider from './src/contexts/CounterContext'

import CounterIncrement from './src/components/CounterIncrement'
import CounterDecrement from './src/components/CounterDecrement'

export default function App() {
  return (
    <CounterProvider>
      <CounterIncrement />
      <CounterDecrement />
    </CounterProvider>
  )
}