import React, { createContext, useState, useContext } from 'react'

const CounterContext = createContext()

export default function CounterProvider({ children }) {

  const [counterIncrement, setCounterIncrement] = useState(0)
  const [counterDecrement, setCounterDecrement] = useState(0)

  return (
    <CounterContext.Provider
      value={{
        counterIncrement,
        setCounterIncrement,
        counterDecrement,
        setCounterDecrement
      }}
    >
      {children}
    </CounterContext.Provider>
  )
}

export function useCounter() {
  const context = useContext(CounterContext)
  const { counterIncrement, setCounterIncrement, counterDecrement, setCounterDecrement } = context

  return { counterIncrement, setCounterIncrement, counterDecrement, setCounterDecrement }
}