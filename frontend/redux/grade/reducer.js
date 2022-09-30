import { SET_COHORT, SET_ERROR } from './types'

const initialState = {
  cohorts: [],
  error: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COHORT:
      return {
        ...state,
        cohorts: action.payload,
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
