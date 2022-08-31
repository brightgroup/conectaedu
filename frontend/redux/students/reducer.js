import { SET_STUDENTS, SET_STUDENT_DATA } from './types'

const initialState = {
  students: [],
  student: [],
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
    default:
      return state
  }
}
