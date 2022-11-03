import { GET_INSTITUTIONS, SET_ERROR } from './types'

const initialState = {
  institutions: [],
  error: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INSTITUTIONS:
      return {
        ...state,
        institutions: action.payload,
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
