import { SET_COUNTER_ADD, SET_COUNTER_SUBTRACT } from './actionTypes'

export function setCounterAdd(newCounterAdd) {
  return {
    type: SET_COUNTER_ADD,
    payload: newCounterAdd
  }
}

export function setCounterSubtract(newCounterSubtract) {
  return {
    type: SET_COUNTER_SUBTRACT,
    payload: newCounterSubtract
  }
}