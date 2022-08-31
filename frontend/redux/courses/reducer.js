import { SET_COURSES } from './types'

const initialState = {
  courses: [],
  error: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COURSES:
      return {
        ...state,
        courses: action.payload,
      }
    default:
      return state
  }
}
