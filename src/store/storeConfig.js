import { createStore, combineReducers } from 'redux'

import { CounterAdd, CounterSubtract } from './reducers/coutersReducers'

const reducers = combineReducers({
  counter1: CounterAdd,
  counter2: CounterSubtract
})

function storeConfig() {
  return createStore(reducers)
}

export default storeConfig