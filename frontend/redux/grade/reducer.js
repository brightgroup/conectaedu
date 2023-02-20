import { GET_COURSES_COHORT, SET_COHORT, SET_ERROR } from './types'

const initialState = {
  cohorts: [],
  courses: [],
  error: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COHORT:
      return {
        ...state,
        cohorts: action.payload,
      }
    case GET_COURSES_COHORT:
      return {
        ...state,
        courses: action.payload,
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
