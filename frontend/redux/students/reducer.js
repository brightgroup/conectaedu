import { SET_STUDENTS, SET_STUDENT_DATA, SET_STUDENT_SCORES } from './types'

const initialState = {
  students: [],
  student: [],
  scores: { subjects: [], data: [] },
  error: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return {
        ...state,
        students: action.payload,
      }
    case SET_STUDENT_DATA:
      return {
        ...state,
        student: action.payload,
      }
    case SET_STUDENT_SCORES:
      return {
        ...state,
        scores: action.payload,
      }
    default:
      return state
  }
}
