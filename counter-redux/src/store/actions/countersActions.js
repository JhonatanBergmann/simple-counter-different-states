import { SET_COUNTER_INCREMENT, SET_COUNTER_DECREMENT } from './actionTypes'

export function setCounterIncrement(newCounterIncrement) {
  return {
    type: SET_COUNTER_INCREMENT,
    payload: newCounterIncrement
  }
}

export function setCounterDecrement(newCounterDecrement) {
  return {
    type: SET_COUNTER_DECREMENT,
    payload: newCounterDecrement
  }
}