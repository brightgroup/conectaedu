import {
  GET_AVERAGE_COURSE,
  GET_COURSE,
  GET_NOTES_COURSE,
  SET_COURSES,
  SET_ERROR,
  SET_FULL_DATA,
  SET_SHEETS,
} from './types'

const initialState = {
  courses: [],
  course: [],
  courseNotes: [],
  sheet: {},
  fullData: {},
  courseAverage: [],
  error: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COURSES:
      return {
        ...state,
        courses: action.payload,
      }
    case SET_FULL_DATA:
      return {
        ...state,
        fullData: action.payload,
      }
    case SET_SHEETS:
      return {
        ...state,
        sheet: action.payload,
      }
    case GET_COURSE:
      return {
        ...state,
        course: action.payload,
      }
    case GET_NOTES_COURSE:
      return {
        ...state,
        courseNotes: action.payload,
      }
    case GET_AVERAGE_COURSE:
      return {
        ...state,
        courseAverage: action.payload,
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
