import { SET_COHORTS, SET_STUDENTS_BY_COHORT, SET_COURSES_BY_COHORT } from './types'

const initialState = {
  cohorts: [],
  students: [],
  courses: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COHORTS:
      return {
        ...state,
        cohorts: action.payload,
      }
    case SET_STUDENTS_BY_COHORT:
      return {
        ...state,
        students: action.payload,
      }
    case SET_COURSES_BY_COHORT:
      return {
        ...state,
        courses: action.payload,
      }
    default:
      return state
  }
}
