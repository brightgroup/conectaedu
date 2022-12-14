import { URLS } from 'api/Urls'
import { Axios } from 'utils/Axios'
import { SET_COHORT, SET_ERROR } from './types'

export const setCohorts = cohorts => ({
  type: SET_COHORT,
  payload: cohorts,
})

export const setError = error => ({
  type: SET_ERROR,
  payload: error,
})

export const getCohorts = () => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getCohort)
      dispatch(setCohorts(data || []))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}
