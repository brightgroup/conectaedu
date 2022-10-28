import {
  SET_COMPLETE_STUDENTS,
  SET_ERROR,
  SET_OBSERVATIONS,
  SET_STUDENTS,
  SET_STUDENT_COHORT,
  SET_STUDENT_DATA,
  SET_STUDENT_REPORT,
  SET_STUDENT_SCORES,
  SET_STUDENT_USER,
} from './types'

const initialState = {
  students: [],
  student: [],
  scores: { subjects: [], data: [] },
  completeStudents: [],
  cohortStudent: [],
  studentUser: {},
  studentObservations: [],
  studentReport: {},
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
    case SET_COMPLETE_STUDENTS:
      return {
        ...state,
        completeStudents: action.payload,
      }
    case SET_STUDENT_COHORT:
      return {
        ...state,
        cohortStudent: action.payload,
      }
    case SET_STUDENT_USER:
      return {
        ...state,
        studentUser: action.payload,
      }
    case SET_OBSERVATIONS:
      return {
        ...state,
        studentObservations: action.payload,
      }
    case SET_STUDENT_REPORT:
      return {
        ...state,
        studentReport: action.payload,
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
