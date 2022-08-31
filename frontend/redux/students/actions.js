import { URLS } from 'api/Urls'
import { Axios } from 'utils/Axios'
import { getInitials } from 'views/students'
import { SET_STUDENTS, SET_STUDENT_DATA, SET_ERROR } from './types'

export const setStudents = courses => ({
  type: SET_STUDENTS,
  payload: courses,
})

export const setStudentData = information => ({
  type: SET_STUDENT_DATA,
  payload: information,
})

export const setError = error => ({
  type: SET_ERROR,
  payload: error,
})

export const getStudents = () => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getStudents)
      dispatch(setStudents(data ? getInitials(data) : []))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export const getStudentData = () => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getStudentInformation)
      dispatch(setStudentData(data || []))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}
