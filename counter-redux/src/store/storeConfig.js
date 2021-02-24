import { createStore, combineReducers } from 'redux'

import { CounterIncrement, CounterDecrement } from './reducers/coutersReducers'

const reducers = combineReducers({
  counter1: CounterIncrement,
  counter2: CounterDecrement
})

function storeConfig() {
  return createStore(reducers)
}

export default storeConfig