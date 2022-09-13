import { SET_COURSES, SET_SHEETS } from './types'

const initialState = {
  courses: [],
  sheet: {},
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COURSES:
      return {
        ...state,
        courses: action.payload,
      }
    case SET_SHEETS:
      return {
        ...state,
        sheet: action.payload,
      }
    default:
      return state
  }
}
