import { SET_SUBJECTS } from './types'

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
    default:
      return state
  }
}
