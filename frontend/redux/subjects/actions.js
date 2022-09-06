import { URLS } from 'api/Urls'
import { Axios } from 'utils/Axios'
import { SET_SUBJECTS, SET_ERROR } from './types'

export const setSubjects = courses => ({
  type: SET_SUBJECTS,
  payload: courses,
})

export const setError = error => ({
  type: SET_ERROR,
  payload: error,
})

export const getSubjects = () => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getSubjects)
      if (data) dispatch(setSubjects(data))
    } catch (error) {
      dispatch(setError(error))
      dispatch(setSubjects([]))
    }
  }
}
