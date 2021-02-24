import { SET_COUNTER_INCREMENT, SET_COUNTER_DECREMENT } from '../actions/actionTypes'

const initialStateCounterIncrement = {
  counterIncrement: 0
}

export function CounterIncrement(state = initialStateCounterIncrement, action) {

  switch (action.type) {
    case SET_COUNTER_INCREMENT:
      return {
        ...state,
        counterIncrement: action.payload
      }
    default:
      return state
  }
}

const initialStateCounterDecrement = {
  counterDecrement: 0
}

export function CounterDecrement(state = initialStateCounterDecrement, action) {

  switch (action.type) {
    case SET_COUNTER_DECREMENT:
      return {
        ...state,
        counterDecrement: action.payload
      }
    default:
      return state
  }
}