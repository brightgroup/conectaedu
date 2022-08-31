import { URLS } from 'api/Urls'
import { Axios } from 'utils/Axios'
import { SET_COURSES, SET_ERROR } from './types'

export const setCourses = courses => ({
  type: SET_COURSES,
  payload: courses,
})

export const setError = error => ({
  type: SET_ERROR,
  payload: error,
})

export const getCourses = () => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getCourses)
      dispatch(setCourses(data || []))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}
