import { SET_COUNTER_ADD, SET_COUNTER_SUBTRACT } from '../actions/actionTypes'

const initialStateCounterAdd = {
  counterAdd: 0
}

export function CounterAdd(state = initialStateCounterAdd, action) {

  switch (action.type) {
    case SET_COUNTER_ADD:
      return {
        ...state,
        counterAdd: action.payload
      }
    default:
      return state
  }
}

const initialStateCounterSubtract = {
  counterSubtract: 0
}

export function CounterSubtract(state = initialStateCounterSubtract, action) {

  switch (action.type) {
    case SET_COUNTER_SUBTRACT:
      return {
        ...state,
        counterSubtract: action.payload
      }
    default:
      return state
  }
}