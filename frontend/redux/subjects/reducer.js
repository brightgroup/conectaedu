import { SET_ERROR, SET_SUBJECTS } from './types'

const initialState = {
  subjects: [],
  error: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUBJECTS:
      return {
        ...state,
        subjects: action.payload,
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
