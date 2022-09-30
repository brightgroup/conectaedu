import { SET_ERROR, SET_SESSION, SET_USER } from './types'

const initialState = {
  session: false,
  user: {},
  error: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SESSION:
      return {
        ...state,
        session: action.payload,
      }
    case SET_USER:
      return {
        ...state,
        user: action.payload,
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
