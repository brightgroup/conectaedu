import { URLS } from 'api/Urls'
import { Axios } from 'utils/Axios'
import { SET_COHORTS, SET_STUDENTS_BY_COHORT, SET_COURSES_BY_COHORT } from './types'

export const setCohorts = cohorts => ({
  type: SET_COHORTS,
  payload: cohorts,
})

export const setStudentsByCohort = students => ({
  type: SET_STUDENTS_BY_COHORT,
  payload: students,
})

export const setCoursesByCohort = courses => ({
  type: SET_COURSES_BY_COHORT,
  payload: courses,
})

export const getCohorts = () => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getCohorts)
      if (data) dispatch(setCohorts(data))
    } catch (error) {
      dispatch(setCohorts([]))
    }
  }
}

export const getStudentsByCohort = () => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getStudentsByCohort)
      if (data) dispatch(setStudentsByCohort(data))
    } catch (error) {
      dispatch(setStudentsByCohort([]))
    }
  }
}

export const getCoursesByCohort = () => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getCoursesByCohort)
      if (data) dispatch(setCoursesByCohort(data))
    } catch (error) {
      dispatch(setCoursesByCohort([]))
    }
  }
}
