import { GET_COURSES_COHORT, GET_REPORT_FOLIO_MORNING, GET_TOTAL_FOLIOS, SET_COHORT, SET_ERROR } from './types'

const initialState = {
  cohorts: [],
  courses: [],
  folios: {},
  totalFolio: {},
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
    case GET_REPORT_FOLIO_MORNING:
      return {
        ...state,
        folios: action.payload,
      }
    case GET_TOTAL_FOLIOS:
      return {
        ...state,
        totalFolio: action.payload,
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
