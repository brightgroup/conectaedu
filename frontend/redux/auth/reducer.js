import { SET_SESSION } from './types'

const initialState = {
  session: false,
  error: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SESSION:
      return {
        ...state,
        session: action.payload,
      }
    default:
      return state
  }
}
