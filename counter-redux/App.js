import React from 'react'
import { Provider } from 'react-redux'

import configStore from './src/store/storeConfig'
const store = configStore()

import CounterIncrement from './src/components/CounterIncrement'
import CounterDecrement from './src/components/CounterDecrement'

export default function App() {
  return (
    <Provider store={store}>
      <CounterIncrement />
      <CounterDecrement />
    </Provider>
  )
}